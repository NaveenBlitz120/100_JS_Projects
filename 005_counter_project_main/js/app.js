// const lowerBtn = document.querySelector('.prevBtn');
// const upperBtn = document.querySelector('.nextBtn');
const buttons = document.querySelectorAll('.counterBtn')
const counter = document.getElementById('counter');

function counterChange(){

    buttons.forEach( function(button){

        button.addEventListener('click', function(){
            if(button.classList.contains('prevBtn'))
                counter.textContent--;
            else if(button.classList.contains('nextBtn'))
                counter.textContent++;
            
            let count = counter.textContent;
            if(count == 0)
                    counter.style.color = 'black';
                else if(count > 0)
                    counter.style.color = 'green';
                else
                    counter.style.color = 'red';
        });
    });

    // lowerBtn.addEventListener('click', function(){
    //     counter.textContent--;
    //     let count = counter.textContent;
    //     console.log(count);
    //     if(count == 0)
    //         counter.style.color = 'black';
    //     else if(count > 0)
    //         counter.style.color = 'green';
    //     else
    //         counter.style.color = 'red';
    // });
    // upperBtn.addEventListener('click', function(){
    //     counter.textContent++;
    //     let count = counter.textContent;
    //     console.log(count);
    //     if(count == 0)
    //         counter.style.color = 'black';
    //     else if(count > 0)
    //         counter.style.color = 'green';
    //     else    
    //         counter.style.color = 'red';
    // });

}

counterChange();