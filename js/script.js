Vue.config.devtools = true;
dayjs.extend(dayjs_plugin_customParseFormat);
const root = new Vue({
    el: '#root',
    data: {
        data,
        visibilityIndex:0,
        newMessage:'',
        date: dayjs().format('DD/MM/YY HH:mm'),
        contactSearch:'',
        isWriting:false,
        
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
        getMessageType2(message){
            if(message.status==='sent'){
                return 'arrow-right'
            }
            else{
                return 'arrow-left'
            }
        },
        selectIndex(index){
            
            this.visibilityIndex = index;
            
        },
        newMessagePush(index){
            this.data.contacts[index].messages.push({message:this.newMessage,hide:false, status:'sent',date:dayjs().format('DD/MM/YY HH:mm:ss')});
            this.isWriting = true;
            
            setTimeout(() => {
                this.isWriting=false;
                this.data.contacts[index].messages.push({message:'ok',hide:false, status:'received',date:dayjs().format('DD/MM/YY HH:mm:ss')});
            }, 1000);
            
            
            this.newMessage = '';
        },
        getLastMessageDate(index){
            if(!this.data.contacts[index]) return;
            
            const messages = this.data.contacts[index].messages;
            
            const receivedMessage = messages.filter((item)=>item.status === 'received');
            
            const lastReceivedMessage = receivedMessage[receivedMessage.length -1];
            return lastReceivedMessage.date;
            
        },
        getLastMessage(index){
            if(!this.data.contacts[index]) return;
            
            const messages = this.data.contacts[index].messages;
            const lastMessage = messages[messages.length -1 ].message;
            return lastMessage;
        },
        contactFilter(nome){
            if(!this.contactSearch || this.contactSearch === ''){
                return true;
            }
            const filter = this.contactSearch.trim().toLowerCase();
            const contact = nome.toLowerCase();
            return contact.includes(filter);
            
        },
        hideMessage(index){
        
            this.data.contacts[this.visibilityIndex].messages[index].hide=true;
           
            
        },
        
        
    },
})