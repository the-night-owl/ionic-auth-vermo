import React from "react";
import {
  IonContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";
import { RouterProps } from "react-router";
import { chevronBackOutline } from "ionicons/icons";

import "./Register.scss";

interface Props extends RouterProps {}

const Register = (props: Props) => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonIcon
          onClick={() => props.history.goBack()}
          className="back"
          icon={chevronBackOutline}
        />
        <h1 className="page-title">Register to Vermo</h1>

        <form onSubmit={(e) => e.preventDefault()}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Full Name</IonLabel>
              <IonInput type="text" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput type="email" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Mobile Number</IonLabel>
              <IonInput type="number" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput type="password" />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Confirm Password</IonLabel>
              <IonInput type="password" />
            </IonItem>
          </IonList>

          <button className="btn btn-block" type="submit">
            Register
          </button>
        </form>

        <div className="disclaimer">
          <small>
            By registering you agree to{" "}
            <a href="//google.com" target="_blank" rel="noopener noreferrer">
              Terms & Conditions{" "}
            </a>
            and{" "}
            <a href="//google.com" target="_blank" rel="noopener noreferrer">
              Privacy Policy{" "}
            </a>
            of the Vermo
          </small>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Register;
