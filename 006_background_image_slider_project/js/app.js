const buttons = document.querySelectorAll('.btn');
const imgContainer = document.querySelector('.img-container');
const pictures = [
    "contBcg-0",
    "contBcg-1",
    "contBcg-2",
    "contBcg-3",
    "contBcg-4",
];

function imageSlider(){
    let counter = 0;
    buttons.forEach( function (button) {
        button.addEventListener('click', function (e) {
            if(e.target.classList.contains('btn-right')){
                counter++;
                if(counter > pictures.length - 1)
                    counter = 0;
                console.log('inside right, counter : '+counter);
            }
            else if(e.target.classList.contains('btn-left')){
                counter--;
                if(counter < 0)
                    counter = pictures.length - 1;
                console.log('inside left, counter : '+counter);
            }
            imgContainer.style.backgroundImage = `url('./img/${pictures[counter]}.jpeg')`;
        });
    });

}

imageSlider();