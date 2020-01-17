import React, { Component } from 'react';
import axios from 'axios';
import { Grid, Box, Title, Col1, Col1Inner, Col2, Col2Inner, Form, LayoutColumn, LayoutRow, LayoutRadio, Parraph, LdsRing, Button} from './styles';

export default class Page extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre_completo: '',
      telefono: '',
      correo: '',
      direccion: '',
      dni: '',
      padre_madre: '',
      fecha_incidente: '',
      lugar_incidente: '',
      tipo_bien: 'SERVICIO',
      monto_reclamado: '',
      descripcion: '',
      tipo_incidente: 'QUEJA',
      detalle_incidente: '',
      pedido_cliente: '',
      respuesta_reclamo: 'Respuesta Física',
      formErrors: {
        nombre_completo: '',
        telefono: '',
        correo: '',
        direccion: '',
        dni: '',
        padre_madre: '',
        fecha_incidente: '',
        lugar_incidente: '',
        monto_reclamado: '',
        descripcion: '',
        detalle_incidente: '',
        pedido_cliente: ''
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

  validateForm(nombre_completo, telefono, correo, direccion, dni, padre_madre,
      fecha_incidente, lugar_incidente, tipo_bien, monto_reclamado, descripcion,
      tipo_incidente,
      detalle_incidente, pedido_cliente, respuesta_reclamo) {
    let fieldValidationErrors = this.state.formErrors;
    fieldValidationErrors.nombre_completo = this.validateField('nombre_completo', nombre_completo).nombre_completo
    fieldValidationErrors.telefono = this.validateField('telefono', telefono).telefono
    fieldValidationErrors.correo = this.validateField('correo', correo).correo
    fieldValidationErrors.direccion = this.validateField('direccion', direccion).direccion
    fieldValidationErrors.dni = this.validateField('dni', dni).dni
    fieldValidationErrors.padre_madre = this.validateField('padre_madre', padre_madre).padre_madre
    fieldValidationErrors.fecha_incidente = this.validateField('fecha_incidente', fecha_incidente).fecha_incidente
    fieldValidationErrors.lugar_incidente = this.validateField('lugar_incidente', lugar_incidente).lugar_incidente
    fieldValidationErrors.tipo_bien = this.validateField('tipo_bien', tipo_bien).tipo_bien
    fieldValidationErrors.monto_reclamado = this.validateField('monto_reclamado', monto_reclamado).monto_reclamado
    fieldValidationErrors.descripcion = this.validateField('descripcion', descripcion).descripcion
    fieldValidationErrors.tipo_incidente = this.validateField('tipo_incidente', tipo_incidente).tipo_incidente
    fieldValidationErrors.detalle_incidente = this.validateField('detalle_incidente', detalle_incidente).detalle_incidente
    fieldValidationErrors.pedido_cliente = this.validateField('pedido_cliente', pedido_cliente).pedido_cliente
    fieldValidationErrors.respuesta_reclamo = this.validateField('respuesta_reclamo', respuesta_reclamo).respuesta_reclamo
    
    this.setState({ fieldValidationErrors: fieldValidationErrors })
    return Object.values(fieldValidationErrors).indexOf(true) === -1
  }

  errorClass(error) {
    return (!error ? '' : 'has-error');
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { nombre_completo, telefono, correo, direccion, dni, padre_madre, fecha_incidente, lugar_incidente, tipo_bien, monto_reclamado, descripcion, tipo_incidente,
      detalle_incidente, pedido_cliente, respuesta_reclamo } = this.state;

    const statusForm = this.validateForm(nombre_completo, telefono, correo,
      direccion, dni, padre_madre, fecha_incidente, lugar_incidente,
      tipo_bien, monto_reclamado, descripcion, tipo_incidente,
      detalle_incidente, pedido_cliente, respuesta_reclamo);
    if (statusForm) {
      const { rutaFormReclamaciones } = this.props;
      const dataRequest = {
        nombre_completo, telefono, correo, direccion, dni, padre_madre,
        fecha_incidente, lugar_incidente, tipo_bien, monto_reclamado,
        descripcion, tipo_incidente,
        detalle_incidente, pedido_cliente, respuesta_reclamo
      }
      try {
        this.setState({formLoading: true, formError: null})
        console.log(dataRequest)
        const data = await axios.post(rutaFormReclamaciones, dataRequest);
        console.log(data);
        if (data.status === 200) {
          this.setState({
            formLoading: false,
            formError: false,
            nombre_completo: '',
            telefono: '',
            correo: '',
            direccion: '',
            dni: '',
            padre_madre: '',
            fecha_incidente: '',
            lugar_incidente: '',
            tipo_bien: 'SERVICIO',
            monto_reclamado: '',
            descripcion: '',
            tipo_incidente: 'QUEJA',
            detalle_incidente: '',
            pedido_cliente: '',
            respuesta_reclamo: 'Respuesta Física'
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
    const { textosReclamaciones } = this.props
    const textos = textosReclamaciones[0] || {};
    console.log(textos)
    return (
    <Grid className="grid">
      <Title>Libro de reclamaciones</Title>
      <Box>
        <Col1>
          <Col1Inner>
            <div dangerouslySetInnerHTML={{ __html: textos.textos }} />
          </Col1Inner>
        </Col1>
        <Col2>
          <Col2Inner>
            <Form onSubmit={this.handleSubmit}>
              <h2 className="first">IDENTIFICACIÓN DEL CONSUMIDOR RECLAMANTE</h2>
              <LayoutColumn className={this.errorClass(this.state.formErrors.nombre_completo)}>
                <label>Nombre Completo</label>
                <input
                  name="nombre_completo"
                  type="text"
                  value={this.state.nombre_completo}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.direccion)}>
                <label>Dirección</label>
                <input
                  name="direccion"
                  type="text"
                  value={this.state.direccion}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.dni)}>
                <label>DNI / CE</label>
                <input
                  name="dni"
                  type="text"
                  value={this.state.dni}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.correo)}>
                <label>Correo Electrónico</label>
                <input
                  name="correo"
                  type="email"
                  value={this.state.correo}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.telefono)}>
                <label>Teléfono</label>
                <input
                  name="telefono"
                  type="text"
                  value={this.state.telefono}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.padre_madre)}>
                <label>Padre o Madre</label>
                <input
                  name="padre_madre"
                  type="text"
                  value={this.state.padre_madre}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <h2>IDENTIFICACIÓN DEL BIEN CONTRATADO</h2>

              <LayoutColumn className={this.errorClass(this.state.formErrors.fecha_incidente)}>
                <label>Fecha del incidente</label>
                <input
                  name="fecha_incidente"
                  type="date"
                  value={this.state.fecha_incidente}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.lugar_incidente)}>
                <label>Lugar del incidente</label>
                <input
                  name="lugar_incidente"
                  type="text"
                  value={this.state.lugar_incidente}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.tipo_bien)}>
                <label>Tipo del bien contratado</label>
                <LayoutRow>
                  <LayoutRadio className="first">
                    <label htmlFor="rad_1"> PRODUCTO</label> 
                    <input id="rad_1" type="radio" name="tipo_bien" value="PRODUCTO" checked={this.state.tipo_bien==='PRODUCTO'} onChange={this.handleInputChange}/>
                  </LayoutRadio>
                  <LayoutRadio>
                    <label htmlFor="rad_2"> SERVICIO</label> 
                    <input id="rad_2" type="radio" name="tipo_bien" value="SERVICIO" checked={this.state.tipo_bien==='SERVICIO'} onChange={this.handleInputChange}/>
                  </LayoutRadio>
                </LayoutRow>
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.monto_reclamado)}>
                <label>Monto Reclamado</label>
                <input
                  name="monto_reclamado"
                  type="text"
                  value={this.state.monto_reclamado}
                  onChange={this.handleInputChange}
                />
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.descripcion)}>
                <label>Descripción</label>
                <textarea rows={6} cols={6} name="descripcion" value={this.state.descripcion} onChange={this.handleInputChange}></textarea>
              </LayoutColumn>

              <h2>IDENTIFICACIÓN DE LA RECLAMACIÓN Y PEDIDO DEL CONSUMIDOR</h2>

              <LayoutColumn className={this.errorClass(this.state.formErrors.tipo_incidente)}>
                <label>Tipo de Incidente</label>
                <LayoutRow>
                  <LayoutRadio className="first">
                    <label htmlFor="rad_3">RECLAMO</label> <input id="rad_3" type="radio" name="tipo_incidente" value="RECLAMO" checked={this.state.tipo_incidente==='RECLAMO'} onChange={this.handleInputChange}/>
                  </LayoutRadio>
                  <LayoutRadio>
                    <label htmlFor="rad_4">QUEJA</label> <input id="rad_4" type="radio" name="tipo_incidente" value="QUEJA" checked={this.state.tipo_incidente==='QUEJA'} onChange={this.handleInputChange}/>
                  </LayoutRadio>
                </LayoutRow>
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.detalle_incidente)}>
                <label>Detalle del Incidente</label>
                <textarea rows={6} cols={6} name="detalle_incidente" value={this.state.detalle_incidente} onChange={this.handleInputChange}></textarea>
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.pedido_cliente)}>
                <label>Pedido del Cliente</label>
                <textarea rows={6} cols={6} name="pedido_cliente" value={this.state.pedido_cliente} onChange={this.handleInputChange}></textarea>
              </LayoutColumn>

              <LayoutColumn className={this.errorClass(this.state.formErrors.respuesta_reclamo)}>
                <label>¿Cómo desea recibir la respuesta a su reclamo?</label>
                <LayoutRow>
                  <LayoutRadio className="first">
                    <label htmlFor="rad_5">Correo Electrónico</label> 
                    <input id="rad_5" type="radio" name="respuesta_reclamo" value="Correo Electrónico" checked={this.state.respuesta_reclamo==='Correo Electrónico'} onChange={this.handleInputChange}/>
                  </LayoutRadio>
                  <LayoutRadio>
                    <label htmlFor="rad_6">Respuesta Física</label> 
                    <input id="rad_6" type="radio" name="respuesta_reclamo" value="Respuesta Física" checked={this.state.respuesta_reclamo==='Respuesta Física'} onChange={this.handleInputChange}/>
                  </LayoutRadio>
                </LayoutRow>
              </LayoutColumn>

              <p>
                *La formulación del reclamo no impide acudir a otras vías de solución de controversias ni es requisito previo para interponer una denuncia ante el 
                INDECOPI.
              </p>

              { formError === false && (<Parraph success>Su reclamo se registró correctamente.</Parraph>) }

              { formError === true && (<Parraph error>Se detectó un error al recibir su reclamo. Inténtelo de nuevo.</Parraph>) }

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
      </Box>
    </Grid>
  ); 
  }
}