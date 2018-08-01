import '../css/app.scss';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'font-awesome/css/font-awesome.css';

import Vue from 'vue';
import BootstrapVue from 'bootstrap-vue';

Vue.use(BootstrapVue);

import Example from './components/Example';

new Vue({
    el: '#app',
    components: {
        Example
    }
});
