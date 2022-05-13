import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleLogin } from 'react-google-login';


const responseGoogle = (response) => {
  console.log(response);
}

ReactDOM.render(
  <GoogleLogin
    clientId="764646838817-p2ureou2svej79akvf8cmg3opii41vjs.apps.googleusercontent.com"
    buttonText="Login"
    onSuccess={responseGoogle}
    onFailure={responseGoogle}
    cookiePolicy={'single_host_origin'}
    isSignedIn={true}
  />,
  document.getElementById('googleButton')
);