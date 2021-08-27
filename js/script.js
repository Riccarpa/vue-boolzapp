Vue.config.devtools = true;

const root = new Vue({
    el: '#root',
    data: {
        data,
        visibilityIndex:0,
    },
    methods: {
        getMessageType(message){
            if(message.status==='sent'){
                return 'my-message'
            }
            else{
                return 'incoming-message'
            }
        },
        selectIndex(index){
            
           this.visibilityIndex = index;
           
        }
      

    },
})