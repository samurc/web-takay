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

export default class FormularioContactanos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_completo: '',
      telefono: '',
      correo: '',
      tipo_servicio: '',
      informacion_adicional: ''
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
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { nombre_completo, telefono, correo, tipo_servicio, informacion_adicional } = this.state;
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
      const data = await axios.post(rutaFormNosotros, dataRequest);
      console.log(data);
    } catch (error) {
      console.log(error)
    }
  }

  render() {
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
              <LayoutColumn>
                <label>Nombre</label>
                <input
                  name="nombre_completo"
                  type="text"
                  value={this.state.nombre_completo}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>
              <LayoutRow className="flex-items">
                <LayoutColumn>
                  <label>Teléfono</label>
                  <input
                    name="telefono"
                    type="text"
                    value={this.state.telefono}
                    onChange={this.handleInputChange}
                  />
                </LayoutColumn>
                <LayoutColumn>
                  <label>Email</label>
                  <input
                    name="correo"
                    type="email"
                    value={this.state.correo}
                    onChange={this.handleInputChange}
                  />
                </LayoutColumn>
              </LayoutRow>
              <LayoutColumn>
                <label>Tipo de servicio</label>
                <input
                  name="tipo_servicio"
                  type="text"
                  value={this.state.tipo_servicio}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>
              <LayoutColumn>
                <label>Información adicional</label>
                <textarea rows={6} cols={6} name="informacion_adicional" value={this.state.informacion_adicional} onChange={this.handleInputChange}></textarea>
              </LayoutColumn>
              <Button type="submit">Enviar</Button>
            </Form>
          </Col2Inner>
        </Col2>
      </Layout>
    );
  }
}
