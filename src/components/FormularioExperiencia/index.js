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

export default class FormularioExperiencia extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_completo: '',
      telefono: '',
      correo: '',
      ocupacion: '',
      acepto_terminos: false,
      acepto_politica: false,
      acepto_publicidad: false,
      formErrors: {
        nombre_completo: '',
        telefono: '',
        correo: '',
        ocupacion: '',
        acepto_terminos: '',
        acepto_politica: '',
        acepto_publicidad: ''
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
      case 'acepto_publicidad':
        checkValid = value === true;
        fieldValidationErrors.acepto_publicidad = checkValid ? false : true;
        break;
      default:
        fieldValidationErrors[fieldName] = value.length > 0 ? false : true;
        break;
    }
    return fieldValidationErrors
  }

  validateForm(nombre_completo, telefono, correo, ocupacion, acepto_terminos, acepto_politica, acepto_publicidad) {
    let fieldValidationErrors = this.state.formErrors;
    fieldValidationErrors.nombre_completo = this.validateField('nombre_completo', nombre_completo).nombre_completo
    fieldValidationErrors.telefono = this.validateField('telefono', telefono).telefono
    fieldValidationErrors.correo = this.validateField('correo', correo).correo
    fieldValidationErrors.ocupacion = this.validateField('ocupacion', ocupacion).ocupacion
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
    const { nombre_completo, telefono, correo, ocupacion, acepto_terminos, acepto_politica, acepto_publicidad } = this.state;
    const statusForm = this.validateForm(nombre_completo, telefono, correo, ocupacion, acepto_terminos, acepto_politica, acepto_publicidad);
    if (statusForm) {
      const { rutaFormExperto } = this.props;
      const dataRequest = {
        nombre_completo,
        telefono,
        correo,
        ocupacion,
        acepto_publicidad
      }
      console.log(dataRequest)
      try {
        this.setState({formLoading: true, formError: null})
        const data = await axios.post(rutaFormExperto, dataRequest);
        console.log(data);
        if (data.status === 200) {
          this.setState({
            formLoading: false,
            formError: false,
            nombre_completo: '',
            telefono: '',
            correo: '',
            ocupacion: '',
            acepto_terminos: false,
            acepto_politica: false,
            acepto_publicidad: false
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
    const { comboOcupacion, pdf } = this.props
    const pdf1 = pdf[0] || {};
    const pdf4 = pdf[3] || {};

    return (
      <Layout>
        <Col1>
          <Col1Inner>
            <Title1>Hablemos sobre tu experiencia:</Title1>
            <Text>Déjanos tus datos y te ayudaremos a completar tus metas.</Text>
          </Col1Inner>
        </Col1>
        <Col2>
          <Col2Inner>
            <Title2>Inicia ahora</Title2>
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
              <LayoutColumn className={this.errorClass(this.state.formErrors.ocupacion)}>
                <label>Ocupación</label>
                <select
                  name="ocupacion"
                  value={this.state.ocupacion}
                  onChange={this.handleInputChange}
                >
                  <option value={''}>Seleccione una opción</option>
                  {
                    comboOcupacion.map(function (v, idx) {
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
                  <a target="_blank" href={pdf4.imagen}>{pdf4.titulo}</a>
                </label>
              </LayoutColumn>
              <LayoutColumn className={`checkboxLayout ${this.errorClass(this.state.formErrors.acepto_publicidad)}`}>
                <label>
                  <input
                    name="acepto_publicidad"
                    type="checkbox"
                    checked={this.state.acepto_publicidad}
                    onChange={this.handleInputChange}
                  />
                  Acepto recibir información publicitaria de Takay
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
