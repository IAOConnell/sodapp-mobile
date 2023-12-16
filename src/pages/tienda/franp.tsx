import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonSearchbar, IonButton, IonAvatar, 
  IonCol, IonGrid, IonRow } 
from '@ionic/react';
import ExploreContainer from '../../components/ExploreContainer';
import { useEffect, useState } from 'react';
import { Database, Storage } from '@ionic/storage';
import { createStore, get, set } from '../../data/IonicStorage';
import { getUsuarios} from '../../data/usuarios';
import { getProductos} from '../../data/productosFranP';




const franp: React.FC = () => {

  const [userDataProducto, setUserDataProducto] = useState([]);
  const [userDataVendedor, setUserDataVendedor] = useState([]);

  const usuarios = getUsuarios();
  const productos = getProductos();
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

        <IonGrid>
        <IonRow>
          <IonCol><img alt="" src={userDataVendedor.img} /></IonCol>
          <IonCol>Bienvenido a la tienda de {userDataVendedor.name}</IonCol>
        </IonRow>
      </IonGrid>

    <IonList>{userDataProducto.map((producto) => {
          return(
        <IonItem key={producto.id}>
          <IonAvatar aria-hidden="true" slot="start">
            <img alt="" src={producto.img} />
          </IonAvatar>
          <IonLabel>{producto.name} : ${producto.precio}</IonLabel>
        </IonItem>
      );})}
      </IonList>
      </IonContent>
    </IonPage>
  );
};

export default franp;
