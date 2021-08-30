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
            this.data.contacts[index].messages.push({message:this.newMessage, status:'sent',date:dayjs().format('DD/MM/YY HH:mm')});
            
            setTimeout(() => {
                this.data.contacts[index].messages.push({message:'ok', status:'received',date:dayjs().format('DD/MM/YY HH:mm')});
            }, 1000);
            this.newMessage = '';
        },
        getLastMessageDate(){
           const messages = this.data.contacts[this.visibilityIndex].messages;
           const receivedMessage = messages.filter((item)=>item.status === 'received');
           const lastReceivedMessage = receivedMessage[receivedMessage.length -1];
           return lastReceivedMessage.date;
            
        }
      

    },
})