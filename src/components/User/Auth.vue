<template lang="html">
<v-layout justify-center align-center fill-height>
    <v-flex shrink>
        <v-card>
            <v-card-text  class="text-xs-center">
                <div class="mt-3 mb-3">
                    <span class="title">Login</span>
                </div>
                
                <div id="firebaseui-auth-container"></div>
            </v-card-text>
        </v-card>
        
    </v-flex>
</v-layout>
  
</template>

<script>
import firebase from "firebase";
import firebaseui from "firebaseui";

const uiConfig = {
  callbacks: {
    // Called when the user has been successfully signed in
    signInSuccessWithAuthResult(user, credential, redirectUrl) {
      return false;
    }
  },
  credentialHelper: firebaseui.auth.CredentialHelper.NONE,
  // Opens IDP Providers sign-in flow in a popup
  signInFlow: "popup",
  signInOptions: [
    // {
    //   provider: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    //   scopes: [
    //     "public_profile",
    //     "email"
    //     // 'user_likes',
    //     // 'user_friends'
    //   ]
    // },
    {
      provider: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      scopes: ["https://www.googleapis.com/auth/plus.login"]
    },
    {
      provider: firebase.auth.EmailAuthProvider.PROVIDER_ID,
      // Whether the display name should be displayed in Sign Up page.
      requireDisplayName: true
    }
  ]
  // Terms of service url.
  // tosUrl: 'https://www.google.com'
};

export default {
  name: "auth",
  mounted() {
    var ui = new firebaseui.auth.AuthUI(firebase.auth());
    ui.start("#firebaseui-auth-container", uiConfig);
  }
};
</script>

<style>
.v-card {
  margin-top: 25rem;
}
</style>