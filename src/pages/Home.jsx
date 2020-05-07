import { 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar,
  IonGrid,
  IonRow,
  IonCol,
  IonItemDivider,
  IonLabel,
  IonButton,
  IonChip,
  IonIcon } from '@ionic/react';
import { checkmark, close, skull } from 'ionicons/icons';
import React from 'react';
import Card from '../components/Card';
import './Home.css';

class Home extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      count: 0,
      cards: 0
    }
  }

  handleClickInc(){
    this.setState({
      count: this.state.count + 1,
      cards: this.state.cards + 1
    })
  }

  handleClickDec(){
    this.setState({
      count: this.state.count - 1,
      cards: this.state.cards + 1
    })
  }

  render(){
    return (
      <IonPage>
        <IonHeader>
          <IonToolbar color="dark">
            <IonTitle className="ion-text-center"><IonIcon icon={skull} /><b>  BlackJack Card Counter  </b><IonIcon icon={skull} /></IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent color="light">
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>
            <IonItemDivider>
              <IonLabel className="ion-text-uppercase ion-padding-end ion-padding-start" color="dark">
                <b>Count:</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase ion-padding-end ion-padding-start"  color="dark">
                <b>{this.state.count}</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase  ion-padding-end ion-padding-start">
                <b>=</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase">
                { this.state.count > 0 ? (<IonChip color="success"><IonIcon icon={checkmark} /><IonLabel>Bet high</IonLabel></IonChip>) : (<IonChip color="danger"><IonIcon icon={close} /><IonLabel>Hold</IonLabel></IonChip>)}
              </IonLabel>
            </IonItemDivider>
            <IonItemDivider color="light">
              <IonLabel className="ion-text-uppercase ion-padding-start ion-padding-end" color="dark">
                <b>Cards:</b>
              </IonLabel>
              <IonLabel className="ion-text-uppercase ion-padding-start ion-padding-end"  color="dark">
                <b>{this.state.cards}</b>
              </IonLabel>
            </IonItemDivider >
            <IonGrid  className="ion-padding ion-margin-top ion-margin-bottom">
              <IonRow>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="2"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="3"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="4"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="5"/></IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="3"><Card onClick={() => this.handleClickInc()} card_value="6"/></IonCol>              
                <IonCol size="3"><Card onClick={() => this.setState({ cards: this.state.cards + 1})} card_value="7"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.setState({ cards: this.state.cards + 1})} card_value="8"/></IonCol>
                <IonCol size="3"><Card onClick={() => this.setState({ cards: this.state.cards + 1})} card_value="9"/></IonCol>
              </IonRow>

              <IonRow>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="10"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="J"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="Q"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="K"/></IonCol>
                <IonCol size="2.4"><Card onClick={() => this.handleClickDec()} card_value="A"/></IonCol>
              </IonRow>
            </IonGrid>
            <IonButton onClick={() => this.setState({ count: 0, cards: 0})} color="dark" className="ion-padding ion-margin" expand="block" size="large">Reset counter</IonButton>
        </IonContent>
      </IonPage>
    );
  }
};

export default Home;
