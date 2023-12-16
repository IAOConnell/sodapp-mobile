import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonList, IonItem, IonInput, IonButton } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { getUsuarios} from '../data/usuarios';

const Tab3: React.FC = () => {

  const login = () =>
  {
    const log = document.getElementById("usuarioLogin").value;
    const pass = document.getElementById("contrasenaLogin").value;
    const usuarios = getUsuarios();


    const data = { obj: log, pass: pass };
    const url= "https://sodappweb.000webhostapp.com/api/api.php";
    const options = {
     method: "POST",
     body: JSON.stringify(data),
     headers: {
       Accept: "application/json",
     },
    };
   
    fetch (url,options)
     .then((response) => response.json())
     .then((res) => 
     {
      if(res.result)
      {
        sessionStorage.setItem('Usuario', log);
        window.location.replace('./tab1');
      }
       console.log(res);
     })
     .catch(error => 
       {
         console.error(error);
       });

   // sessionStorage.setItem('Usuario', log);
    //console.log(sessionStorage.getItem('Usuario'));
   // window.location.replace('./tab1');
  }

  const registro = () =>
  {
    
    const re_usuario = document.getElementById("registroUsuario").value;
    const re_contrasena = document.getElementById("registroContrasena").value;
    const re_telefono = document.getElementById("registroTelefono").value;
    const re_email = document.getElementById("registroEmail").value;
    const re_nombre = document.getElementById("registroNombre").value;
    const re_apellido = document.getElementById("registroApellido").value;

   // $.ajax({
   //   type: 'POST',
    //  url: 'https://sodappweb.000webhostapp.com/logica/registroLogica.php',
    //  data: {nombre: re_nombre, apellido: re_apellido, email: re_email, telefono: re_telefono, usuario: re_usuario, contrasena: re_contrasena, tipo: 'CLIENTE' },
   //   success: function(response)
   //   {
   //     console.log("ok!");
   //     console.log(response);
   //   },
   //   error: function()
   //   {
   //     console.log("fallo to'");
   //   }
  //  });

 //   fetch('https://sodappweb.000webhostapp.com/logica/registroLogica.php', {
//  method: 'POST',
//  headers: {
 //   Accept: 'application/json',
 //   'Content-Type': 'application/json',
//  },
//  body: JSON.stringify({
//    usuario: re_usuario,
 //   contrasena: re_contrasena,
//    nombre: re_nombre,
//    apellido: re_apellido,
 //   telefono: re_telefono,
 //   email: re_email,
 // }),
// });
 //window.location.replace('https://sodappweb.000webhostapp.com/index.php?seccion=registro');
// https://sodappweb.000webhostapp.com/api/api.php

 const data = { obj: re_usuario, pass: re_contrasena, telefono: re_telefono, email: re_email, nombre: re_nombre, apellido: re_apellido };
 const url= "https://sodappweb.000webhostapp.com/api/apiregistro.php";
 const options = {
  method: "POST",
  body: JSON.stringify(data),
  headers: {
    Accept: "application/json",
  },
 };

 fetch (url,options)
  .then((response) => response.json())
  .then((res) => 
  {
    console.log(res);
    window.location.replace('./tab1');

  })
  .catch(error => 
    {
      console.error(error);
    });

  }

  const logout = () =>
  {
    sessionStorage.clear();
    window.location.replace('./tab1');
  }
  
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
      
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Sesión</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
          <IonItem> <h1>Iniciar Sesión</h1></IonItem>
      <IonItem id="itemLogin">
        <IonInput id="usuarioLogin" label="Usuario" placeholder="Ingresar usuario"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput id="contrasenaLogin" label="Contraseña" type="password" placeholder="Ingresar contraseña"></IonInput>
      </IonItem>
      <IonButton onClick={login}>Iniciar Sesión</IonButton>
    </IonList>

    <IonList>
          <IonItem> <h1>Registrarse</h1></IonItem>
      <IonItem>
        <IonInput id="registroUsuario" label="Usuario" placeholder="Usuario"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput id="registroContrasena" label="Contraseña" type="password" placeholder="password"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput id="registroTelefono" label="Teléfono" type="tel" placeholder="888-888-8888"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput id="registroEmail" label="E-mail" type="email" placeholder="email@domain.com"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput id="registroNombre" label="Nombre" placeholder="Nombre"></IonInput>
      </IonItem>
      <IonItem>
        <IonInput id="registroApellido" label="Apellido" placeholder="Apellido"></IonInput>
      </IonItem>
      <IonButton onClick={registro}>Registrarse</IonButton>
    </IonList>

    <IonList>
      <IonItem> <h1>Cerrar Sesión</h1></IonItem>
    <IonButton onClick={logout}>Cerrar Sesión</IonButton>
    </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
