const mobilemenu_button = document.querySelector('.mobile-hamburger-button')


mobilemenu_button.addEventListener('click', function( event ){


  const thibutton = event.currentTarget;


   const mobilemenu_button = document.querySelector('.mobile-menu-wrapper')


  const hasShowmenu =  mobilemenu_button.classList.contains('showmenu');

   
   if(hasShowmenu)
   {
      mobilemenu_button.classList.remove('showmenu');

      thibutton.classList.remove('showmenu');

   }
   else
   {
        mobilemenu_button.classList.add('showmenu');
      thibutton.classList.add('showmenu');

   }


});

const mobilemenu_link_button = document.querySelectorAll('.mobile-link-button')

mobilemenu_link_button.forEach((el) => {


   el.addEventListener('click', function( event ){


   const mobilemenu_button = document.querySelector('.mobile-hamburger-button')
 
 
    const mobilemenu_wrapper = document.querySelector('.mobile-menu-wrapper')
 
 
   const hasShowmenu =  mobilemenu_wrapper.classList.contains('showmenu');
 
    
    if(hasShowmenu)
    {
      mobilemenu_wrapper.classList.remove('showmenu');
 
      mobilemenu_button.classList.remove('showmenu');
 
    }
    else
    {
      mobilemenu_wrapper.classList.add('showmenu');
      mobilemenu_button.classList.add('showmenu');
 
    }
 
 
 });


});