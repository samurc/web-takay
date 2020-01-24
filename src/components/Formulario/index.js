import React, { Component } from 'react';
import Modal from '../Modal';
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

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      nombre_completo: '',
      telefono: '',
      correo: '',
      tipo_proyecto: '',
      situacion_actual: '',
      acepto_terminos: false,
      acepto_politica: false,
      acepto_publicidad: false,
      formErrors: {
        nombre_completo: '',
        telefono: '',
        correo: '',
        tipo_proyecto: '',
        situacion_actual: '',
        acepto_terminos: '',
        acepto_politica: '',
        acepto_publicidad: ''
      },
      formError: null,
      formLoading: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this)
    this.clickModal = this.clickModal.bind(this)
  }

  closeModal () {
    this.setState({ modal: false })
  };

  clickModal() {
    this.setState({ modal: true })
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
      const fieldValidationErrors =  this.validateField(name, value)
      this.setState({
        formErrors: fieldValidationErrors
      });   
    });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = false;
    let checkValid = false;
    let phoneValid = false;
    let stringValid = false;

    switch(fieldName) {
      case 'nombre_completo':
        stringValid = value && value.match(/^([a-zA-ZñÑáéíóúÁÉÍÓÚ ]*)$/) && value.length < 101;
        fieldValidationErrors.nombre_completo = stringValid ? false : true;
        break;
      case 'correo':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.correo = emailValid ? false : true;
        break;
      case 'telefono':
        phoneValid = value && value.match(/^(\d*)$/) && value.length < 21;
        fieldValidationErrors.telefono = phoneValid ? false : true;
        break;
      case 'acepto_terminos':
        checkValid = value === true;
        fieldValidationErrors.acepto_terminos = checkValid ? false: true;
        break;
      case 'acepto_politica':
        checkValid = value === true;
        fieldValidationErrors.acepto_politica = checkValid ? false: true;
        break;
      case 'acepto_publicidad':
        checkValid = value === true;
        fieldValidationErrors.acepto_publicidad = false;
        //fieldValidationErrors.acepto_publicidad = checkValid ? false: true;
        break;
      default:
        fieldValidationErrors[fieldName] = value.length > 0 ? false : true;
        break;
    }
    return fieldValidationErrors
  }

  validateForm(nombre_completo, telefono, correo, tipo_proyecto, situacion_actual, acepto_terminos, acepto_politica, acepto_publicidad) {
    let fieldValidationErrors = this.state.formErrors;
    fieldValidationErrors.nombre_completo = this.validateField('nombre_completo', nombre_completo).nombre_completo
    fieldValidationErrors.telefono = this.validateField('telefono', telefono).telefono
    fieldValidationErrors.correo = this.validateField('correo', correo).correo
    fieldValidationErrors.tipo_proyecto = this.validateField('tipo_proyecto', tipo_proyecto).tipo_proyecto
    fieldValidationErrors.situacion_actual = this.validateField('situacion_actual', situacion_actual).situacion_actual
    fieldValidationErrors.acepto_terminos = this.validateField('acepto_terminos', acepto_terminos).acepto_terminos
    fieldValidationErrors.acepto_politica = this.validateField('acepto_politica', acepto_politica).acepto_politica
    fieldValidationErrors.acepto_publicidad = this.validateField('acepto_publicidad', acepto_publicidad).acepto_publicidad
    this.setState({ fieldValidationErrors: fieldValidationErrors })
    return Object.values(fieldValidationErrors).indexOf(true) === -1
  }

  errorClass(error) {
    return (!error ? '' : 'has-error');
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { nombre_completo, telefono, correo, tipo_proyecto, situacion_actual, acepto_terminos, acepto_politica, acepto_publicidad } = this.state;
    const statusForm = this.validateForm(nombre_completo, telefono, correo, tipo_proyecto, situacion_actual, acepto_terminos, acepto_politica, acepto_publicidad); 
    if (statusForm) {
      const { rutaFormFamilia } = this.props;
      const dataRequest = {
        nombre_completo,
        telefono,
        correo,
        tipo_proyecto,
        situacion_actual,
        acepto_publicidad
      }
      try {
        this.setState({formLoading: true, formError: null})
        const data = await axios.post(rutaFormFamilia, dataRequest);
        console.log(data);
        if (data.status === 200) {
          this.setState({
            formLoading: false,
            formError: false,
            modal: true,
            nombre_completo: '',
            telefono: '',
            correo: '',
            tipo_proyecto: '',
            situacion_actual: '',
            acepto_terminos: false,
            acepto_politica: false,
            acepto_publicidad: false
          })
        } else {
          this.setState({formLoading: false, formError: true})
        }
      } catch (error) {
        console.log(error);
        this.setState({formLoading: false, formError: true})
      }
    }
  }

  render() {
    const { formLoading, formError } = this.state
    const { comboProyecto, comboSituacion, pdf } = this.props
    const pdf1 = pdf[0] || {};
    const pdf3 = pdf[2] || {};

    return (
      <Layout>
        {this.state.modal ? <Modal handler={this.closeModal} texto="Gracias por contactarnos, nos estaremos comunicando contigo." /> : null}
        <Col1>
          <Col1Inner>
            <Title2 mode="mobile">Inicia ahora</Title2>
            <Title1>Hablemos sobre tu proyecto:</Title1>
            <Text>Déjanos tus datos y un asesor te contactará para saber más de tu proyecto.</Text>
          </Col1Inner>
        </Col1>
        <Col2>
          <Col2Inner>
            <Title2 mode="desktop">Inicia ahora</Title2>
            <Form onSubmit={this.handleSubmit}>
              <LayoutColumn className={this.errorClass(this.state.formErrors.nombre_completo)}>
                <label>Nombre completo</label>
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
                  <label>Correo Eléctronico</label>
                  <input
                    name="correo"
                    type="email"
                    value={this.state.correo}
                    onChange={this.handleInputChange}
                  />
                </LayoutColumn>
              </LayoutRow>
              <LayoutColumn className={this.errorClass(this.state.formErrors.tipo_proyecto)}>
                <label>Tipo de proyecto</label>
                <select
                  name="tipo_proyecto"
                  value={this.state.tipo_proyecto}
                  onChange={this.handleInputChange}
                >
                  <option value={''}>Seleccione una opción</option>
                  {
                    comboProyecto.map(function (v, idx) {
                      return (
                      <option key={v.keyunico} value={v.textos}>{v.textos}</option>  
                      )
                    })
                  }
                </select>
              </LayoutColumn>
              <LayoutColumn className={this.errorClass(this.state.formErrors.situacion_actual)}>
                <label>Selecciona la opción que mejora se adapte a tu situación actual</label>
                <select
                  name="situacion_actual"
                  value={this.state.situacion_actual}
                  onChange={this.handleInputChange}
                >
                  <option value={''}>Seleccione una opción</option>
                  {
                    comboSituacion.map(function (v, idx) {
                      return (
                      <option key={v.keyunico} value={v.textos}>{v.textos}</option>  
                      )
                    })
                  }
                </select>
              </LayoutColumn>
              <LayoutColumn className={`checkboxLayout ${this.errorClass(this.state.formErrors.acepto_terminos)}`}>
                <label>
                  <input
                    name="acepto_terminos"
                    type="checkbox"
                    checked={this.state.acepto_terminos}
                    onChange={this.handleInputChange}
                  />
                  <a target="_blank" href={pdf1.imagen}>Acepto los <b>{pdf1.titulo}</b></a>
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
                  <a target="_blank" href={pdf3.imagen}>Acepto <strong>{pdf3.titulo}</strong></a>
                </label>
              </LayoutColumn>
              <LayoutColumn className={`checkboxLayout`}>
                <label>
                  <input
                    name="acepto_publicidad"
                    type="checkbox"
                    checked={this.state.acepto_publicidad}
                    onChange={this.handleInputChange}
                  />
                  <a target="_blank" href={pdf3.imagen}>Acepto recibir información publicitaria de Takay</a>
                  
                </label>
              </LayoutColumn>

              {/* formError === false && (<Parraph success>Su proyecto se registró correctamente.</Parraph>) */}

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
