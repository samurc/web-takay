import React, { Component } from 'react';
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
      nombre_completo: 'coconut',
      telefono: '',
      correo: '',
      ocupacion: 'opt2',
      acepto_terminos: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    console.log(value, target.name);
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    console.log(this.state.nombre_completo);
    event.preventDefault();
  }

  render() {
    return (
      <Layout>
        <Col1>
          <Col1Inner>
            <Title1>Déjanos tus datos y te ayudaremos a complementar tus metas</Title1>
          </Col1Inner>
        </Col1>
        <Col2>
          <Col2Inner>
            <Title2>Contáctanos</Title2>
            <Form onSubmit={this.handleSubmit}>
              <LayoutColumn>
                <label>Nombre completo</label>
                <input
                  name="nombre_completo"
                  type="text"
                  value={this.state.nombre_completo}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>
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
                <label>Correo Eléctronico</label>
                <input
                  name="correo"
                  type="email"
                  value={this.state.correo}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>
              <LayoutColumn>
                <label>Ocupación</label>
                <select
                  name="ocupacion"
                  value={this.state.ocupacion}
                  onChange={this.handleInputChange}
                >
                  <option value="opt1">Grapefruit</option>
                  <option value="opt2">Lime</option>
                  <option value="opt3">Coconut</option>
                </select>
              </LayoutColumn>
              <LayoutColumn className="checkboxLayout">
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
              <Button>
                <a href={'#'}>Enviar</a>
              </Button>
            </Form>
          </Col2Inner>
        </Col2>
      </Layout>
    );
  }
}
