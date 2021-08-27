Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        data,
        
    },
    methods: {
      isVisible(contact){
         return contact.visible;
      },
      

    },
})