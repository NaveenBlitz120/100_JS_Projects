const TextField = document.getElementById('message');
const submitBtn = document.getElementById('submitBtn');
const lastMessage = document.querySelector('.message-content');

function MessageDelivery(){

    submitBtn.addEventListener('click', function(e){
        e.preventDefault();
        if(TextField.value.length != 0)
        {
            lastMessage.textContent = TextField.value;
            TextField.value = '';
            console.log('if');
        }
        else
        {
            
            lastMessage.textContent = 'Empty String Provided';
            lastMessage.classList.add('alert');
            lastMessage.classList.add('alert-danger');

            setTimeout( function(){
                lastMessage.classList.remove('alert');
                lastMessage.classList.remove('alert-danger');
            },2000);

            console.log('else');
        }    
    });
}

MessageDelivery();
