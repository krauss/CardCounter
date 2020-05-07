import React from 'react';
import { IonCard, IonButton } from '@ionic/react';
import './Card.css';


const Card = (props) => {

  return (
      <IonCard className="my_card">
        <IonButton className="my_button" onClick={props.onClick} size="large" fill="outline" color="dark" expand="block"><b>{props.card_value}</b></IonButton>
      </IonCard>    
  );
};

export default Card;
