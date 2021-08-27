Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        data,
        
    },
    methods: {
        getMessageType(message){
            if(message.status==='sent'){
                return 'my-message'
            }
            else{
                return 'incoming-message'
            }
        }
      

    },
})