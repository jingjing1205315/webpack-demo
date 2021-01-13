import Vue from 'vue';
import app from './index';

console.log(app);
function renderToast(text) {
    var Comp = Vue.extend({
        props: ['msg'],
        template: '<div>{{ msg }}</div>'
    })
      
    var vm = new Comp({
        propsData: {
            msg: 'hello'
        }
    })
}


export default renderToast;