import React, { Component } from 'react';
import axios from 'axios';

import {
  Layout,
  Col1,
  Col1Inner,
  Col2,
  Col2Inner,
  Title1,
  Title2,
  Text,
  Form,
  LayoutRow,
  LayoutColumn,
  Button,
  Parraph,
  LdsRing
} from './styles';

export default class FormularioContactanos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_completo: '',
      telefono: '',
      correo: '',
      tipo_servicio: '',
      informacion_adicional: '',
      acepto_terminos: false,
      acepto_politica: false,
      formErrors: {
        nombre_completo: '',
        telefono: '',
        correo: '',
        tipo_servicio: '',
        informacion_adicional: '',
        acepto_terminos: '',
        acepto_politica: ''
      },
      formError: null,
      formLoading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    let value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name == 'nombre_completo') {
      if (!(value.match(/^([a-zA-ZñÑáéíóúÁÉÍÓÚ ]*)$/) && value.length < 101)){ return; }
    } else if (name == 'telefono') {
      if (!(value.length < 21)){ return; }
    }

    this.setState({
      [name]: value
    }, () => {
      const fieldValidationErrors = this.validateField(name, value)
      this.setState({
        formErrors: fieldValidationErrors
      });
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = false;
    let checkValid = false;
    let nameValid = false;
    let phoneValid = false;

    switch(fieldName) {
      case 'nombre_completo':
        nameValid = value && value.match(/^([a-zA-ZñÑáéíóúÁÉÍÓÚ ]*)$/) && value.length < 101;
        fieldValidationErrors.nombre_completo = nameValid ? false : true;
        break;
      case 'telefono':
        phoneValid = value && value.match(/^(\d*)$/) && value.length < 21;
        fieldValidationErrors.telefono = phoneValid ? false : true;
        break;
      case 'correo':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.correo = emailValid ? false : true;
        break;
      case 'acepto_terminos':
        checkValid = value === true;
        fieldValidationErrors.acepto_terminos = checkValid ? false: true;
        break;
      case 'acepto_politica':
        checkValid = value === true;
        fieldValidationErrors.acepto_politica = checkValid ? false: true;
        break;
      default:
        fieldValidationErrors[fieldName] = value.length > 0 ? false : true;
        break;
    }
    return fieldValidationErrors
  }

  validateForm(nombre_completo, telefono, correo, tipo_servicio, informacion_adicional, acepto_terminos, acepto_politica) {
    let fieldValidationErrors = this.state.formErrors;
    fieldValidationErrors.nombre_completo = this.validateField('nombre_completo', nombre_completo).nombre_completo
    fieldValidationErrors.telefono = this.validateField('telefono', telefono).telefono
    fieldValidationErrors.correo = this.validateField('correo', correo).correo
    fieldValidationErrors.tipo_servicio = this.validateField('tipo_servicio', tipo_servicio).tipo_servicio
    fieldValidationErrors.informacion_adicional = this.validateField('informacion_adicional', informacion_adicional).informacion_adicional
    fieldValidationErrors.acepto_terminos = this.validateField('acepto_terminos', acepto_terminos).acepto_terminos
    fieldValidationErrors.acepto_politica = this.validateField('acepto_politica', acepto_politica).acepto_politica
    this.setState({ fieldValidationErrors: fieldValidationErrors })
    return Object.values(fieldValidationErrors).indexOf(true) === -1
  }

  errorClass(error) {
    return (!error ? '' : 'has-error');
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { nombre_completo, telefono, correo, tipo_servicio, informacion_adicional, acepto_terminos, acepto_politica } = this.state;
    const statusForm = this.validateForm(nombre_completo, telefono, correo, tipo_servicio, informacion_adicional, acepto_terminos, acepto_politica);
    if (statusForm) {
      const { rutaFormNosotros } = this.props;
      const dataRequest = {
        nombre_completo,
        telefono,
        correo,
        tipo_servicio,
        informacion_adicional
      }
      console.log(dataRequest)
      try {
        this.setState({formLoading: true, formError: null})
        const data = await axios.post(rutaFormNosotros, dataRequest);
        console.log(data);
        if (data.status === 200) {
          this.setState({
            formLoading: false,
            formError: false,
            nombre_completo: '',
            telefono: '',
            correo: '',
            tipo_servicio: '',
            informacion_adicional: '',
            acepto_terminos: false,
            acepto_politica: false
          })
        } else {
          this.setState({formLoading: false, formError: true})
        }
      } catch (error) {
        console.log(error)
        this.setState({formLoading: false, formError: true})
      }  
    }
  }

  render() {
    const { formLoading, formError } = this.state
    const { pdf } = this.props
    const pdf1 = pdf[0] || {};
    const pdf5 = pdf[4] || {};

    const comboServicios = [
      {
        id: "10001",
        titulo: "combo",
        textos: "Ampliación",
        sec_referencia: "combo servicio",
        keyunico: "15771913598912a4f1613",
        estado: "1"
      },
      {
        id: "10002",
        titulo: "combo",
        textos: "Remodelación",
        sec_referencia: "combo servicio",
        keyunico: "15771913598912a4f1614",
        estado: "1"
      },
      {
        id: "10003",
        titulo: "combo",
        textos: "Casa nueva",
        sec_referencia: "combo servicio",
        keyunico: "15771913598912a4f1615",
        estado: "1"
      },
    ];

    return (
      <Layout>
        <Col1>
          <Col1Inner>
            <Title2 mode="mobile">Contáctanos</Title2>
            <Title1>Déjanos tus datos y te ayudaremos a complementar tus metas</Title1>
          </Col1Inner>
        </Col1>
        <Col2>
          <Col2Inner>
            <Title2 mode="desktop">Contáctanos</Title2>
            <Form onSubmit={this.handleSubmit}>
              <LayoutColumn className={this.errorClass(this.state.formErrors.nombre_completo)}>
                <label>Nombre</label>
                <input
                  name="nombre_completo"
                  type="text"
                  value={this.state.nombre_completo}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>
              <LayoutRow className="flex-items">
                <LayoutColumn className={this.errorClass(this.state.formErrors.telefono)}>
                  <label>Teléfono</label>
                  <input
                    name="telefono"
                    type="number"
                    value={this.state.telefono}
                    onChange={this.handleInputChange}
                  />
                </LayoutColumn>
                <LayoutColumn className={this.errorClass(this.state.formErrors.correo)}>
                  <label>Email</label>
                  <input
                    name="correo"
                    type="email"
                    value={this.state.correo}
                    onChange={this.handleInputChange}
                  />
                </LayoutColumn>
              </LayoutRow>
              <LayoutColumn className={this.errorClass(this.state.formErrors.tipo_servicio)}>
                <label>Tipo de servicio</label>
                <select
                  name="tipo_servicio"
                  value={this.state.tipo_servicio}
                  onChange={this.handleInputChange}
                >
                  <option value={''}>Seleccione una opción</option>
                  {
                    comboServicios.map(function (v, idx) {
                      return (
                        <option key={v.keyunico} value={v.textos}>{v.textos}</option>  
                      )
                    })
                  }
                </select>
              </LayoutColumn>
              <LayoutColumn className={this.errorClass(this.state.formErrors.informacion_adicional)}>
                <label>Información adicional</label>
                <textarea rows={6} cols={6} name="informacion_adicional" value={this.state.informacion_adicional} onChange={this.handleInputChange}></textarea>
              </LayoutColumn>

              <LayoutColumn className={`checkboxLayout ${this.errorClass(this.state.formErrors.acepto_terminos)}`}>
                <label>
                  <input
                    name="acepto_terminos"
                    type="checkbox"
                    checked={this.state.acepto_terminos}
                    onChange={this.handleInputChange}
                  />
                  <a target="_blank" href={pdf1.imagen}>Acepto los <b> términos y condiciones</b></a>
                </label>
              </LayoutColumn>
              <LayoutColumn className={`checkboxLayout ${this.errorClass(this.state.formErrors.acepto_politica)}`}>
                <label>
                  <input
                    name="acepto_politica"
                    type="checkbox"
                    checked={this.state.acepto_politica}
                    onChange={this.handleInputChange}
                  />
                  <a target="_blank" href={pdf5.imagen}>{pdf5.titulo}</a>
                </label>
              </LayoutColumn>

              { formError === false && (<Parraph success>Tus datos se registraron correctamente.</Parraph>) }

              { formError === true && (<Parraph error>Se detectó un error al recibir los datos. Inténtelo de nuevo.</Parraph>) }

              { formLoading && (<LdsRing>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
              </LdsRing>) }

              <Button type="submit" disabled={formLoading}>Enviar</Button>
            </Form>
          </Col2Inner>
        </Col2>
      </Layout>
    );
  }
}
