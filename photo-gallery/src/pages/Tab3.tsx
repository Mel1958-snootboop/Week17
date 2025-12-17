import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonListHeader, IonItem, IonLabel } from '@ionic/react';
import React, {useState, useEffect} from 'react';
import './Tab3.css';

const Tab3: React.FC = () => {
  // Dataset state variable to hold JSON data from WP
  // To meet Ionic's requirement for typescript data types
  // Set type to <any[]> on next line
  const [dataset, setDataset] = useState<any[]>([]);
  // URL for WP JSON REST endpoint

  // const dataURL = "https://dev-srjc-fall-2025.pantheonsite.io/wp-json/wp/v2/vaporwave/";
  const dataURL = "https://dev-srjc-fall-2025.pantheonsite.io/wp-json/twentytwentyone-child/v1/latest-posts/1";
  // useEffect() to get JSON data and populate dataset state variable
  useEffect(() => {
    fetch(dataURL) // Fetch() to load raw json string
    .then(response => response.json()) // json() to convert raw string to json object
    .then(data => setDataset(data)) // React state set function to populate data state var
  },[])
  
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>More Posts</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Posts</IonTitle>
          </IonToolbar>
        </IonHeader>
        {/* Reccomended to use map() to loop through JSON array returned from WP */}
        <IonList id="stuff-list">
          <IonListHeader>Posts</IonListHeader>
          {dataset.map((item, index) => (
            <IonItem lines="inset" key={index}>
              <IonLabel>
                <h4>{item.post_title}</h4>
                <p>{item.thing_description}</p>
                <address>{item.thing_address}</address>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;