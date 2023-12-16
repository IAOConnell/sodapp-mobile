const usuarios = [
    {
      name: 'admin',
      id: 4,
      img: '../resources/profile.png',
      tienda: '',
      contrasena: 'admin',
      nombre: "Admin",
      apellido: "Sodapp",
      telefono: "12341234",
      tipo: "Admin",
      mensaje: "El admin."
    } ,
    {
      name: 'franP',
      id: 0,
      img: '../resources/franp.png',
      tienda: 'tienda/franp',
      contrasena: 'franp',
      nombre: "Franco",
      apellido: "Pozzetti",
      telefono: "1124251213",
      tipo: "Vendedor",
      mensaje: "Hola, me gusta el jugo de manzana!"
    },
    {
      name: 'vendedor',
      id: 1,
      img: '../resources/vendedor.png',
      tienda: 'tienda/vendedor',
      contrasena: 'vendedor',
      nombre: "Vendedor",
      apellido: "Prueba",
      telefono: "1112312312",
      tipo: "Vendedor",
      mensaje: "Soy un vendedor de ejemplo."
    },
    {
      name: 'oko1995',
      id: 2,
      img: '../resources/oko1995.png',
      tienda: '',
      contrasena: '123',
      nombre: "Iván",
      apellido: "O'Connell",
      telefono: "1139241167",
      tipo: "Comprador",
      mensaje: "La vida es una lenteja, o la tomas o la dejas"
    },
    {
      name: 'cliente',
      id: 3,
      img: '../resources/profile.png',
      tienda: '',
      contrasena: '12341234',
      nombre: "Cliente",
      apellido: "Prueba",
      telefono: "1139241167",
      tipo: "Comprador",
      mensaje: "Soy un comprador de ejemplo."
    },
    {
      name: 'Sodavinci',
      id: 5,
      img: '../resources/Sodavinci.png',
      tienda: 'tienda/sodavinci',
      contrasena: 'davinci',
      nombre: "Leonardo",
      apellido: "Da Vinci",
      telefono: "30930935",
      tipo: "Vendedor",
      mensaje: "Inventor de la soda?"
    },
    {
      name: 'Prueba',
      id: 6,
      img: '../resources/Prueba.png',
      tienda: '',
      contrasena: 'prueba',
      nombre: "Prueba",
      apellido: "Di Probando",
      telefono: "12341234",
      tipo: "Cliente",
      mensaje: "Otro cliente de prueba!"
    },
    {
      name: 'Ivess',
      id: 7,
      img: '../resources/Ivess.png',
      tienda: 'tienda/ivess',
      contrasena: 'ivess',
      nombre: "Ivess",
      apellido: "S.A.",
      telefono: "42072428",
      tipo: "Vendedor",
      mensaje: "La cuenta oficial de Ivess"
    },
    {
      name: 'mabelv',
      id: 8,
      img: '../resources/mabelv.png',
      tienda: '',
      contrasena: 'mabel',
      nombre: "Mabel",
      apellido: "Vazquez",
      telefono: "45820454",
      tipo: "Cliente",
      mensaje: "Si querés llorar, llorá."
    },
    {
      name: 'Cimes',
      id: 9,
      img: '../resources/Cimes.png',
      tienda: 'tienda/Cimes',
      contrasena: 'cimes',
      nombre: "Cimes",
      apellido: "S.A.",
      telefono: "12753512",
      tipo: "Vendedor",
      mensaje: "La cuenta oficial de Cimes."
    },
    {
      name: 'Pato',
      id: 10,
      img: '../resources/Cimes.png',
      tienda: '',
      contrasena: 'pato',
      nombre: "Patricio",
      apellido: "OConnell",
      telefono: "12341234",
      tipo: "Cliente",
      mensaje: "Pato Pato Pato"
    },
    {
      name: 'Samsung',
      id: 11,
      img: '../resources/profile.png',
      tienda: '',
      contrasena: 'sam',
      nombre: "Sam",
      apellido: "Sung",
      telefono: "88888888",
      tipo: "Cliente",
      mensaje: "Pato Pato Pato"
    }
  ];
  
  export const getUsuarios = () => usuarios;