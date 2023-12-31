import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel, IonList, IonThumbnail, IonSearchbar, IonButton } 
from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';
import { useEffect, useState } from 'react';
import { Database, Storage } from '@ionic/storage';
import { createStore, get, set } from '../data/IonicStorage';
import { getUsuarios} from '../data/usuarios';




const Tab1: React.FC = () => {

  const [userData, setUserData] = useState(0);
  const [userDataVendedor, setUserDataVendedor] = useState([]);

  const usuLog = sessionStorage.getItem('Usuario');
  const getVendedorData = (user) =>
  {
    set("vendedor-data:", user);
    console.log(user);
  }

  const usuarios = getUsuarios();
  console.log(usuarios);
  useEffect(() => {

		const setupStore = async () => {

			await createStore("AlansDB");
      setUserDataVendedor(usuarios);

		//	if (!exists) {
		//		
		//		const msgs = str.getMessages();
		//		str.set("msgs", msgs);
		//	}
		}

		setupStore();
	}, []);

  const v =  "/tienda/catalogo?vendedor=";
  const b = "&nombre=";

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
        <IonCardSubtitle>¡Bienvenido a Sodapp {usuLog}!</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>¡En esta app vas a encontrar los mejores precios ylos mejores proveedores de soda y otras bebidas del país!</IonCardContent>
    </IonCard>
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Vendedores destacados</IonCardTitle>
        <IonCardSubtitle>Nuestros usuarios con mejor valoración de la app</IonCardSubtitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>{userDataVendedor.map((usuario) => {
          if(usuario.tipo == "Vendedor")
          return(
                    <IonItem key={usuario.id}>
                    <IonThumbnail slot="start">
                      <img alt="Silhouette of mountains" src={usuario.img} />
                    </IonThumbnail>
                    <IonItem routerLink={v + usuario.id + b + usuario.name} onClick={() => getVendedorData(usuario)} >
                    <IonLabel>{usuario.name}</IonLabel>
                    </IonItem>
                  </IonItem>
        );})}
        </IonList>
      </IonCardContent>
    </IonCard>
      </IonContent>
    </IonPage>
  );
};
export default Tab1;
