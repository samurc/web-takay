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

export default class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_completo: '',
      telefono: '',
      correo: '',
      tipo_proyecto: '',
      situacion_actual: '',
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
              <LayoutColumn>
                <label>Nombre completo</label>
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
                  <label>Correo Eléctronico</label>
                  <input
                    name="correo"
                    type="email"
                    value={this.state.correo}
                    onChange={this.handleInputChange}
                  />
                </LayoutColumn>
              </LayoutRow>
              <LayoutColumn>
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
              <LayoutColumn>
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
