import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonSearchbar, IonButton, IonAvatar, 
  IonCol, IonGrid, IonRow } 
from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
import { Database, Storage } from '@ionic/storage';
import { createStore, get, set } from '../../data/IonicStorage';
import { getUsuarios} from '../../data/usuarios';
import { getProductos} from '../../data/productos';
import './catalogo.css';




const catalogo: React.FC = () => {

  const [userDataProducto, setUserDataProducto] = useState([]);
  const [userDataVendedor, setUserDataVendedor] = useState([]);

  const usuarios = getUsuarios();
  const productos = getProductos();

  const pos = 0;

  const comprar = () =>
  {
    const usu = sessionStorage.getItem('Usuario');
    const vend = namev;
    //window.location.replace('./tab1');

        window.location.replace('https://sodappweb.000webhostapp.com/api/tiendamovil.php?vend=' + vend + '&usu=' + usu);

  }


  
  useEffect(() => {

		const setupStore = async () => {

			await createStore("AlansDB");
      setUserDataProducto(productos);
      const ven = get("vendedor-data:");
      setUserDataVendedor(ven);
      console.log(ven);

		//	if (!exists) {
		//		
		//		const msgs = str.getMessages();
		//		str.set("msgs", msgs);
		//	}
		}

		setupStore();
	}, []);

  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  console.log(urlParams.has('vendedor'));
  console.log(urlParams.get('vendedor'));
  const idv = urlParams.get('vendedor');
  const namev = urlParams.get('nombre');
  const img = "../resources/";

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle>Sodapp</IonTitle>
        </IonToolbar>
        <IonToolbar>
          <IonSearchbar placeholder="Buscar" showClearButton="focus"></IonSearchbar>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen color="secondary">
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Inicio</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonGrid id="ficha-vendedor">
        <IonRow>
          <IonCol size="4"><img id="foto-catalogo" alt="" src={img + namev + '.png'} /></IonCol>
          <IonCol size="4"><h1>Bienvenido a la tienda de {namev}</h1></IonCol>
        </IonRow>
      </IonGrid>

    <IonList>{userDataProducto.map((producto) => {
      if(producto.idvendedor == idv)
          return(
        <IonItem key={producto.id}>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src={producto.img} />
          </IonAvatar>
          <IonLabel>{producto.name} : ${producto.precio}</IonLabel>
          <IonLabel>{producto.codigo}</IonLabel>
        </IonItem>
      );})}
      </IonList>

    <IonList>
    <IonLabel color="dark">Visita su tienda!</IonLabel>
      <IonItem>
        <IonButton onClick={comprar}>Ir a su tienda</IonButton>
      </IonItem>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default catalogo;
