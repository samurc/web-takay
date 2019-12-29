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
      formErrors: {
        nombre_completo: '',
        telefono: '',
        correo: '',
        tipo_servicio: '',
        informacion_adicional: ''
      },
      formError: null,
      formLoading: false
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

    switch(fieldName) {
      case 'correo':
        emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
        fieldValidationErrors.correo = emailValid ? false : true;
        break;
      default:
        fieldValidationErrors[fieldName] = value.length > 0 ? false : true;
        break;
    }
    return fieldValidationErrors
  }

  validateForm(nombre_completo, telefono, correo, tipo_servicio, informacion_adicional) {
    let fieldValidationErrors = this.state.formErrors;
    fieldValidationErrors.nombre_completo = this.validateField('nombre_completo', nombre_completo).nombre_completo
    fieldValidationErrors.telefono = this.validateField('telefono', telefono).telefono
    fieldValidationErrors.correo = this.validateField('correo', correo).correo
    fieldValidationErrors.tipo_servicio = this.validateField('tipo_servicio', tipo_servicio).tipo_servicio
    fieldValidationErrors.informacion_adicional = this.validateField('informacion_adicional', informacion_adicional).informacion_adicional
    this.setState({ fieldValidationErrors: fieldValidationErrors })
    return Object.values(fieldValidationErrors).indexOf(true) === -1
  }

  errorClass(error) {
    return (!error ? '' : 'has-error');
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { nombre_completo, telefono, correo, tipo_servicio, informacion_adicional } = this.state;
    const statusForm = this.validateForm(nombre_completo, telefono, correo, tipo_servicio, informacion_adicional);
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
            informacion_adicional: ''
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
                    type="text"
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
                <input
                  name="tipo_servicio"
                  type="text"
                  value={this.state.tipo_servicio}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>
              <LayoutColumn className={this.errorClass(this.state.formErrors.informacion_adicional)}>
                <label>Información adicional</label>
                <textarea rows={6} cols={6} name="informacion_adicional" value={this.state.informacion_adicional} onChange={this.handleInputChange}></textarea>
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
