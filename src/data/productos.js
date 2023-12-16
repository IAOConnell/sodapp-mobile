const productos = [
    {
      name: 'Soda',
      id: 0,
      img: '../resources/Sodaaa00.png',
      codigo: 'aa00',
      precio: '500',
      idvendedor: 0
    },
    {
      name: 'Bidón de Agua',
      id: 1,
      img: '../resources/Bidón_De_Aguaaa01.png',
      codigo: 'aa01',
      precio: '1500',
      idvendedor: 0
    },
    {
      name: 'Vaso de Agua',
      id: 2,
      img: '../resources/Vaso_De_Aguaaa03.png',
      codigo: 'aa03',
      precio: '200',
      idvendedor: 0
    },
    {
      name: 'Coca-Cola',
      id: 3,
      img: '../resources/coca.png',
      codigo: 'ba00',
      precio: '600',
      idvendedor: 1
    },
    {
      name: 'Vaso Reutilizable Premium',
      id: 4,
      img: '../resources/Vaso_Reutilizable_Premium.png',
      codigo: 'aa04',
      precio: '400',
      idvendedor: 0
    },
    {
      name: 'Botellones De Agua Retornables IVESS',
      id: 5,
      img: '../resources/Botellones_De_Agua_Retornables_IVESS.png',
      codigo: 'iv00',
      precio: '1200',
      idvendedor: 7
    },
    {
      name: 'Sifones De Soda Retornables IVESS',
      id: 6,
      img: '../resources/Sifones_De_Soda_Retornables_IVESS.png',
      codigo: 'iv01',
      precio: '400',
      idvendedor: 7
    },
    {
      name: 'Botellas De Agua Sin Gas IVESS',
      id: 7,
      img: '../resources/Botellas_De_Agua_Sin_Gas_IVESS.png',
      codigo: 'iv02',
      precio: '300',
      idvendedor: 7
    },
    {
      name: 'Aguas Saborizadas Con Gas IVESS',
      id: 8,
      img: '../resources/Aguas_Saborizadas_Con_Gas_IVESS.png',
      codigo: 'iv03',
      precio: '300',
      idvendedor: 7
    },
    {
      name: 'Botellones De Agua Descartables IVESS',
      id: 9,
      img: '../resources/Botellones_De_Agua_Descartables_IVESS.png',
      codigo: 'iv04',
      precio: '2000',
      idvendedor: 7
    },
    {
      name: 'Sifones De Soda Descartables IVESS',
      id: 10,
      img: '../resources/Sifones_De_Soda_Descartables_IVESS.png',
      codigo: 'iv05',
      precio: '400',
      idvendedor: 7
    },
    {
      name: 'Aguas Saborizadas Sin Gas IVESS',
      id: 11,
      img: '../resources/Aguas_Saborizadas_Sin_Gas_IVESSiv06.png',
      codigo: 'iv06',
      precio: '300',
      idvendedor: 7
    },
    {
      name: 'Dispenser De Pie De Agua Frío Calor',
      id: 12,
      img: '../resources/Dispenser_De_Pie_De_Agua_Frío_Caloriv07.png',
      codigo: 'iv07',
      precio: '5000',
      idvendedor: 7
    },
    {
      name: 'Dispenser De Agua Con Heladera Frío Calor',
      id: 13,
      img: '../resources/Dispenser_De_Agua_Con_Heladera_Frío_Caloriv08.png',
      codigo: 'iv08',
      precio: '10000',
      idvendedor: 7
    },
    {
      name: 'Dispenser De Agua Para Mesada Frío Calor',
      id: 14,
      img: '../resources/Dispenser_De_Agua_Para_Mesada_Frío_Calor.png',
      codigo: 'iv09',
      precio: '4500',
      idvendedor: 7
    },
    {
      name: 'Agua En Botellón Retornable 12 Litros',
      id: 15,
      img: '../resources/Agua_En_Botellón_Retornable_12_Litros.png',
      codigo: 'ci00',
      precio: '3000',
      idvendedor: 9
    },
    {
      name: 'Soda En Sifones Retornables Litro Y Medio',
      id: 16,
      img: '../resources/Soda_En_Sifones_Retornables_Litro_Y_Medioci01.png',
      codigo: 'ci01',
      precio: '400',
      idvendedor: 9
    },
    {
      name: 'Sobres De Jugo',
      id: 17,
      img: '../resources/Sobres_De_Jugo.png',
      codigo: 'ci02',
      precio: '20',
      idvendedor: 9
    }
  ];
  
  export const getProductos = () => productos;