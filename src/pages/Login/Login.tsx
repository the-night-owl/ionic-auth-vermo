import React, { useState } from "react";
import {
  IonContent,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
} from "@ionic/react";

import "./Login.scss";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  return (
    <IonPage>
      <IonContent className="login-con ion-padding">
        <div className="logo-con">
          <img src="assets/images/logo.svg" alt="logo" />
          <h1>Vermo</h1>
        </div>

        <div className="social-media-login-con">
          <div className="social-media-login">
            <img src="assets/images/facebook.svg" alt="fb" />
            <p>Facebook</p>
          </div>
          <div className="social-media-login">
            <img src="assets/images/google.svg" alt="fb" />
            <p>Google</p>
          </div>
        </div>

        <div className="or">or</div>

        <form onSubmit={(e) => e.preventDefault()}>
          <IonList>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                onIonChange={(e) => setEmail(e.detail.value || "")}
                type="email"
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                onIonChange={(e) => setPassword(e.detail.value || "")}
                type="password"
              />
            </IonItem>
          </IonList>

          <div className="forgot-password">
            <Link to="/forgot-password">Forgot Password</Link>
          </div>

          <button
            className="btn btn-block"
            disabled={!(email && password)}
            type="submit"
          >
            Login
          </button>
        </form>

        <div className="register-link">
          Don’t have an account? <Link to="/register">Register Now </Link>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
