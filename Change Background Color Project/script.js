const button = document.querySelector('.btn');
const body = document.querySelector('body');

function colorChanger(){
    button.addEventListener('click', ()=>{
        const randomColor = '#' + (Math.floor(Math.random() * 2 ** 24)).toString(16).padStart(0, 6);
        body.style.backgroundColor = randomColor;       
    });
};

colorChanger();