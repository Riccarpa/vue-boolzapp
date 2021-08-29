Vue.config.devtools = true;
dayjs.extend(dayjs_plugin_customParseFormat);
const root = new Vue({
    el: '#root',
    data: {
        data,
        visibilityIndex:0,
        newMessage:'',
        date: dayjs().format('DD/MM/YY HH:mm'),
        
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
           
        },
        newMessagePush(index){
            this.data.contacts[index].messages.push({message:this.newMessage, status:'sent',date:this.date});
            
            setTimeout(() => {
                this.data.contacts[index].messages.push({message:'ok', status:'received',date:dayjs().format('DD/MM/YY HH:mm')});
            }, 1000);
            this.newMessage = '';
        }
      

    },
})