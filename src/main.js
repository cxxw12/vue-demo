import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import lodash from 'lodash'
import Vant from 'vant';
import 'vant/lib/index.css';
import moment from 'moment'
import axios from 'axios'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import htmlToPdf from '@/util/htmlToPdf'
Vue.use(htmlToPdf)
// import Plugin from 'v-fit-columns';
Vue.prototype.$moment = moment;
Vue.config.devtools = true;
// Vue.use(Plugin);
Vue.use(ElementUI);

Vue.config.productionTip = false
Vue.prototype.lodash = lodash
Vue.prototype.EventBus = new Vue();
Vue.use(Vant);
axios.defaults.baseURL = '/api'
    // 引入mockjs
    // require('./mock.js')

new Vue({
    router,
    store,
    // lodash,
    render: h => h(App)
}).$mount('#app')