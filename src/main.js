import Vue from 'vue';
import App from './App.vue';
import router from "./router/index.js";
import store from "./store/index.js";

Vue.config.productionTip = false;

new Vue({
    router,
    store, // 뷰 인스턴스의 store 속성에 연결
    render: h => h(App)
}).$mount("#app");