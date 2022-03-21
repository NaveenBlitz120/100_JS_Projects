const buttons = document.querySelectorAll('.btn');
const imgSrc = document.getElementById('customer-img');
const nameSrc = document.getElementById('customer-name');
const quoteSrc = document.getElementById('customer-text');


function imageSlider(){

    let counter = 0;
    let customers = [];

    function Customer(img, name, Quote){
        this.img = img;
        this.name = name;
        this.Quote = Quote;
    }

    function createCustomer(img, name, Quote){
        let imgPath = `./img/customer-${img}.jpg`;
        let tempCustomer = new Customer(imgPath, name, Quote);

        customers.push(tempCustomer);
    }

    createCustomer(0, 'John', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis neque reprehenderit laborum, corporis explicabo assumenda. Porro impedit consectetur animi, reprehenderit recusandae sapiente at aliquam reiciendis modi ipsam rerum suscipit distinctio?')
    createCustomer(1, 'Sandy', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock')
    createCustomer(2, 'Amy', 'There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don\'t look even slightly believable.')
    createCustomer(3, 'Tyrell', 'If you are going to use a passage of Lorem Ipsum, you need to be sure there isn\'t anything embarrassing hidden in the middle of text.')
    createCustomer(4, 'Wanda', 'Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.')
    

    buttons.forEach( function (button) {
        button.addEventListener('click', function (e) {
            // console.log(imgSrc.src);
            if(e.target.parentNode.classList.contains('nextBtn')){
                counter++;
                if(counter > customers.length - 1)
                    counter = 0;
                // console.log('inside right, counter : '+counter);
            }
            else if(e.target.parentNode.classList.contains('prevBtn')){
                counter--;
                if(counter < 0)
                    counter = customers.length - 1;
                // console.log('inside left, counter : '+counter);
            }
            console.log('counter: '+counter);
            imgSrc.src = customers[counter].img;
            nameSrc.textContent = customers[counter].name;
            quoteSrc.textContent = customers[counter].Quote;
        });
    });

}

imageSlider();