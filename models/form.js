import Item from './item';

export class Form {

    constructor (obj) {
        this.Id = this.generateGuid();
        this.Responsable = "";
        this.Asesor = "";
        this.Resultado = 0;
        this.Fecha = new Date().toLocaleDateString();

        this.ConectarItems = [
            {
              Pregunta: "SE ACERCÓ AL CLIENTE Y LO RECIBIÓ CON UNA SONRISA?",
              Respuesta: false,
              Consejo: "RECUERDA SIEMPRE RECIBIR A NUESTROS CLIENTES, AMABLEMENTE, CON UNA SONRISA, ESTAN ENTRANDO EN NUESTRA CASA!!",
              Valor: 4
            },
            {
              Pregunta: "EL ASESOR INICIÓ CONTACTO UTILIZANDO ALGUNA FRASE, PREGUNTA ABIERTA?",
              Respuesta: false,
              Consejo: "SIEMPRE UTILIZA PREGUNTAS ABIERTAS, DONDE EL CLIENTE DEBA RESPONDER SIN UTILIZAR UN NO, ASÍ PODRÁS INICIAR FACILMENTE UNA CONVERSACIÓN",
              Valor: 4
            },
            {
              Pregunta: "EL ASESOR SE PRESENTÓ CON SU NOMBRE?",
              Respuesta: false,
              Consejo: "AL MENCIONAR TU NOMBRE, NO SOLO TE ASEGURAS QUE EL CLIENTE LUEGO TE BUSQUE, SI NO ADEMAS YA ESTABLECES UN VÍNCULO",
              Valor: 7
            },
            {
              Pregunta: "MENCIONÓ PROMOCIONES?",
              Respuesta: false,
              Consejo: "LAS PROMOCIONES SON UN BENEFICIO CON EL CUAL CONTAMOS, NUNCA TE OLVIDES DE MENCIONARLAS.",
              Valor: 4
            }
          ];

        this.InspirarItems = [
        {
          Pregunta: "EL ASESOR ACOMPAÑO AL CLIENTE HASTA EL PRODUCTO SOLICITADO?",
          Respuesta: false,
          Consejo: "JAMAS SE DEBE SEÑALAR EL PRODUCTO, SIEMPRE ACOMPAÑAMOS A NUESTRO CLIENTE HACIA ÉL, EN CASO DE NO PODER HACERLO, LE PEDIMOS AYUDA A UN COMPAÑERO.",
          Valor: 5
        },
        {
          Pregunta: "REALIZÓ PREGUNTAS ABIERTAS PARA ENTENDER LAS NECESIDADES?",
          Respuesta: false,
          Consejo: "RECUERDA REALIZAR PREGUNTAS ABIERTAS PARA PODER OFRECER EL PRODUCTO CORRECTO.",
          Valor: 5
        },
        {
          Pregunta: "EL ASESOR RECOMENDÓ PRODUCTOS?",
          Respuesta: false,
          Consejo: "NUNCA UN NO, SIEMPRE HAY UNA ALTERNATIVA PARA OFRECER, POR ESO ES QUE DEBEMOS INDAGAR",
          Valor: 5
        },
        {
          Pregunta: "OFRECIÓ PRODUCTO DESTACADO, BH, BS ETC?",
          Respuesta: false,
          Consejo: "SI NO SABES QUE OFRECERLE A TU CLIENTE, SIEMPRE PUEDES TENER UN BEST SELLERS BAJO LA MANGA! O PUEDES OFRECER UN BLACK HOLE, ASI LOS EMPUJAMOS UN POQUITO!",
          Valor: 5
        },
        {
          Pregunta: "INCENTIVÓ AL CLIENTE A PROBARSE EL PRODUCTO?",
          Respuesta: false,
          Consejo: "SIEMPRE INCENTIVA A TU CLIENTE A PROBARSE, SOLO DE ESA FORMA PODRÁ ENTENDER LO COMODO QUE ES UN CALZADO, O LA INDUMNETARIA QUE SE PRUEBE, ES UNA FORMA ,MAS DE CONVENCERLO.",
          Valor: 3
        },
        {
          Pregunta: "SUPO REBATIR OBJECIONES?",
          Respuesta: false,
          Consejo: "",
          Valor: 5
        },
        {
          Pregunta: "EL ASESOR ACOMPAÑO AL CLIENTE A PROBADOR?",
          Respuesta: false,
          Consejo: "ACOMPAÑALO HASTA EL PROBADOR, QUITALE LAS PERCHAS, MENCIONA SIEMPRE QUE AHÍ ESTARAS PARA AYUDARLO. EN CASO DE QUE SE TE DIFICULTE, CUENTA CON UN COMPAÑERO, Y SIEMPRE Y CUANDO SEAS AMABLE, ESTARÁS PERDONADO.",
          Valor: 7
        },
        {
          Pregunta: "LE PREGUNTÓ COMO LE QUEDABA?",
          Respuesta: false,
          Consejo: "OFRECE SIEMPRE TU OPINIÓN A CERCA DE COMO LE QUEDÓ, QUE TE MUESTRE, HAZLE SUGERENCIAS, ORIENTALO.",
          Valor: 7
        },
        {
          Pregunta: "OFRECIÓ ALTERNATIVA?",
          Respuesta: false,
          Consejo: "SI NO CUENTAS CON EL PRODUCTO QUE QUIERE, OFRECELE OTRO, BUSCA OIPCIONES, NUNCA DIGAS NO TENGO.",
          Valor: 7
        },
        {
          Pregunta: "ACERCÓ PIEZA ADICIONAL?",
          Respuesta: false,
          Consejo: "SI SE PRUEBA UNA REMERA OFRECELE UN SHORT, SI PRUEBA ZAPAS, UNAS MEDIAS, SUMA VENTA!",
          Valor: 7
        },
      ];
      
        this.ComprometerItems = [
          {
            Pregunta: "EL ASESOR SUGIRIÓ PRODUCTO COMPLEMENTARIO?",
            Respuesta: false,
            Consejo: "NO TE CONFORMES, DE CAMINO A CAJA SE PUEDE SEGUIR VENDIENDO",
            Valor: 5
          },
          {
            Pregunta: "ACOMPAÑÓ AL CLIENTE A LA CAJA?",
            Respuesta: false,
            Consejo: "SIEMPRE QUE PUEDAS ACOMPAÑALO A CAJA, SALUDALO AMABLEMENTE, DE SEGURO VUELVA Y PREGUNTE POR VOS.",
            Valor: 5
          },
          {
            Pregunta: "LO INVITÓ A REGRESAR?",
            Respuesta: false,
            Consejo: "SIEMPRE INVITALO A REGRESAR, SE SENTIRA A GUSTO DE SABER QUE LO ESPERAMOS, ",
            Valor: 5
          },
          {
            Pregunta: "LE MENCIONÓ CUIDADOS SOBRE EL PRODUCTO?",
            Respuesta: false,
            Consejo: "SI LE DAS A TU CLIENTE TIPS SOBRE COMO CUIDAR EL PRODUCTO, NO SOLO SE IRÁ CONTENTO CON LA ATENCIÓN RECIBIDA, SI NO TAMBIEN INFORMADO, Y QUEDRÁ REGRESAR PARA QUE LO ATIENDAS NUEVAMENTE.",
            Valor: 10
          },
        ];
        
        Object.assign(this, obj);
    }



    generateGuid() {
      return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
      });
    }
    
}
