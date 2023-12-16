import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { getUsuarios} from '../data/usuarios';
import { useEffect, useState } from 'react';
import { Database, Storage } from '@ionic/storage';
import { createStore, get, set } from '../data/IonicStorage';

const Tab2: React.FC = () => {

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
  const storageUsuario = sessionStorage.getItem('Usuario');

  console.log(storageUsuario);

  const chequeo = () =>
  {
    const usuarios = getUsuarios();
    usuarios.map((user) => {
      if(user.name == storageUsuario) {
        return true;
      }
    });
   // sessionStorage.setItem('Usuario', log);
    //console.log(sessionStorage.getItem('Usuario'));
   // window.location.replace('./tab1');
  }


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Mi Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      
      

      <IonContent fullscreen color="secondary">

      <IonGrid>{userDataVendedor.map((usuario) => {
      if(usuario.name == storageUsuario)
          return(
            <IonCard key={usuario.id}>
            <img alt="Silhouette of mountains" src={usuario.img} />
            <IonCardHeader>
              <IonCardTitle>Perfil de {usuario.name}</IonCardTitle>
              <IonCardSubtitle>Nombre: {usuario.nombre}</IonCardSubtitle>
              <IonCardSubtitle>Apellido: {usuario.apellido}</IonCardSubtitle>
              <IonCardSubtitle>Teléfono: {usuario.telefono}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{usuario.mensaje}</IonCardContent>
          </IonCard>
      );})}
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
