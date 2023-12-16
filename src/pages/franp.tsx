import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonSearchbar, IonButton } 
from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { useEffect, useState } from 'react';
import { Database, Storage } from '@ionic/storage';
import { createStore, get, set } from '../data/IonicStorage';
import { getUsuarios} from '../data/usuarios';
import { getProductos} from '../data/productosFranP';




const franp: React.FC = () => {

  const [userDataProducto, setUserDataProducto] = useState([]);

  const productosFranP = getProductos();
  useEffect(() => {

		const setupStore = async () => {

			await createStore("AlansDB");
      setUserDataProducto(productosFranP);

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
        <IonCard>
      <img alt="Silhouette of mountains" src="../resources/soda.jpg" />
      <IonCardHeader>
        <IonCardTitle>Sodapp</IonCardTitle>
        <IonCardSubtitle>¡Bienvenido a Sodapp!</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>¡En esta app vas a encontrar los mejores precios ylos mejores proveedores de soda y otras bebidas del país!</IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Vendedores destacados</IonCardTitle>
        <IonCardSubtitle>Nuestros usuarios con mejor valoración de la app</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default franp;
