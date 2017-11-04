import Vue from 'vue';
import Hello from './components/Hello';


new Vue({
  el: '#app',
  template: `<div><Hello /></div>`,
  components: { Hello }
})
