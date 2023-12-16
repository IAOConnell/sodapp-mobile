import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonAvatar, IonLabel, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonCol, IonGrid, IonRow } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { getUsuarios} from '../data/usuarios';
import { useEffect, useState } from 'react';
import { Database, Storage } from '@ionic/storage';
import { createStore, get, set } from '../data/IonicStorage';

const Tab2: React.FC = () => {

  const [found, setFound] = useState(false);

  const [userDataVendedor, setUserDataVendedor] = useState([]);
/*
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
*/
  useEffect(() => {

    const usuarios = getUsuarios();
    const user = sessionStorage.getItem('Usuario');
    usuarios.map((us) => {
      if(us.name == user)
      {
        setUserDataVendedor(us);
        setFound(true);
      }
    }); 
    if (found === false)
    {
        window.location.replace('./tab3');
    }
	}, []);


  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen color="secondary">
      <IonGrid>
            <IonCard key={userDataVendedor.id}>
            <img alt="Silhouette of mountains" src={userDataVendedor.img} />
            <IonCardHeader>
              <IonCardTitle>Perfil de {userDataVendedor.name}</IonCardTitle>
              <IonCardSubtitle>Nombre: {userDataVendedor.nombre}</IonCardSubtitle>
              <IonCardSubtitle>Apellido: {userDataVendedor.apellido}</IonCardSubtitle>
              <IonCardSubtitle>Teléfono: {userDataVendedor.telefono}</IonCardSubtitle>
            </IonCardHeader>
            <IonCardContent>{userDataVendedor.mensaje}</IonCardContent>
          </IonCard>
      </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;