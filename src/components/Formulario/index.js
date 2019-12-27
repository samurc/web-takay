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
  Button
} from './styles';

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_completo: '',
      telefono: '',
      correo: '',
      tipo_proyecto: '',
      situacion_actual: '',
      acepto_terminos: false,
      formErrors: {
        nombre_completo: '',
        telefono: '',
        correo: '',
        tipo_proyecto: '',
        situacion_actual: '',
        acepto_terminos: ''
      },
      emailValid: false,
      checkValid: false,
      formValid: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    }, () => { this.validateField(name, value) });
  }

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors;
    let emailValid = this.state.emailValid;
    let checkValid = this.state.checkValid;

    switch(fieldName) {
      case 'correo':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.correo = emailValid ? '' : ' is invalid';
        break;
      case 'acepto_terminos':
        checkValid = value === true;
        fieldValidationErrors.acepto_terminos = checkValid ? '': ' is invalid';
        break;
      default:
        break;
    }
    this.setState({
      formErrors: fieldValidationErrors,
      emailValid: emailValid,
      checkValid: checkValid
    }, this.validateForm);
  }

  validateForm() {
    this.setState({formValid: this.state.emailValid && this.state.checkValid});
  }

  errorClass(error) {
    return (error.length === 0 ? '' : 'has-error');
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { nombre_completo, telefono, correo, tipo_proyecto, situacion_actual } = this.state;
    const dataRequest = {
      nombre_completo,
      telefono,
      correo,
      tipo_proyecto,
      situacion_actual
    }
    console.log(dataRequest)
    try {
      const baseURL = 'https://takaydev.wordlatin.com/post_familia.php';
      const data = await axios.post(`${baseURL}`, dataRequest);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { comboProyecto, comboSituacion } = this.props
    return (
      <Layout>
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
                    type="text"
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
                  <option value={''}>{''}</option>
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
                  <option value={''}>{''}</option>
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
                  Acepto los <b> términos y condiciones</b>
                </label>
              </LayoutColumn>
              <Button type="submit" disabled={!this.state.formValid}>Enviar</Button>
            </Form>
          </Col2Inner>
        </Col2>
      </Layout>
    );
  }
}
