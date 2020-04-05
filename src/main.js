import Vue from 'vue';
import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';


Vue.config.productionTip = false

// const firebaseConfig = {
//   apiKey: "AIzaSyA4Ns-ASmlTRI8rfc70Wmb0lN_7A4UTT9E",
//   authDomain: "jam-sly.firebaseapp.com",
//   databaseURL: "https://jam-sly.firebaseio.com",
//   projectId: "jam-sly",
//   storageBucket: "jam-sly.appspot.com",
//   messagingSenderId: "254280382889",
//   appId: "1:254280382889:web:311b92dcf754e22f5e2cb8",
//   measurementId: "G-2EWHEZ93NX"
// };

// // Initialize Firebase
// firebase.initializeApp(firebaseConfig);
// firebase.analytics();

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
