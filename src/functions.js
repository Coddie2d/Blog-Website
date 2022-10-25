
 let burgerMenu = document.querySelector('.header__burger_menu');
 let navBody = document.querySelector('.navBody');
 let navLinks = document.querySelectorAll('.header__link');
 let headerNav = document.querySelector('.header__nav');
 function burgerClick(){
     
if(burgerMenu){
        
    burgerMenu.addEventListener('click',function(e){
            document.body.classList.toggle('lock');
            burgerMenu.classList.toggle('active');
            navBody.classList.toggle('active');
            
    
            
        })
    }
    navLinks.forEach(item =>{
            item.addEventListener('click',function(e){
                console.log(e.target.classList)
                if(e.target.classList.contains('header__link')){
                    document.body.classList.remove('lock');
                    burgerMenu.classList.remove('active');
                    navBody.classList.remove('active');
                    
                }
            })
        })
}

burgerMenu.addEventListener('click',burgerClick());
