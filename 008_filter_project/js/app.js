const filterButtons = document.querySelectorAll('.filter-btn');
const searchBar = document.getElementById('search-item');
const storeItems = document.querySelectorAll('.store-item');

function buttonFilter(){
    filterButtons.forEach( function (button) {
        button.addEventListener('click', (e)=>{
            e.preventDefault();
            console.log(e.target.dataset.filter);
            const filter = e.target.dataset.filter;
            storeItems.forEach( function(item){
                if( filter === 'all' )
                {
                    item.style.display = 'block';
                }
                else
                {
                    if(item.classList.contains(filter))
                        item.style.display = 'block';
                    else
                        item.style.display = 'none';
                }
            });  
        });
    });
}

function searchFilter(){
    searchBar.addEventListener('keyup', function(e){
        e.preventDefault();
        console.log(searchBar.value);
        const filter = searchBar.value.toLowerCase().trim();
        storeItems.forEach( function(item){
            if(item.textContent.includes(filter))
                item.style.display = 'block';
            else
                item.style.display = 'none';
        });
    });
}

buttonFilter();
searchFilter();