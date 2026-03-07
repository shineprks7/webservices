(function()
{


     document.addEventListener('DOMContentLoaded', function(){


        console.log("content loaded");


        const companyservicesbtns = document.querySelectorAll('.company-services-list-item-wrapper');

                const servicebacktopagebtns = document.querySelectorAll('.services-back-to-page-btn');

                const servicecards = document.querySelectorAll('.company-services-list-item-card');



        const newinnerHTML = "<a class='services-back-to-page-btn-wrapper '> <button class = 'services-back-to-page-btn '> <img src='assets/images/icons/direction-icon-blue.svg' />  <span class=''> Back to Services</span> </button> </a> ";


           servicecards.forEach((servicecard) => 

    {

        
    
          servicecard.insertAdjacentHTML('beforeend', newinnerHTML);

           const servicebtn = servicecard.querySelector('.services-back-to-page-btn');


                servicebtn.addEventListener('click', function( event ){


           const thisbutton = event.currentTarget;



            const currentparent = thisbutton.closest('.company-page-core-services-list-grid-column');

           const superparent = thisbutton.closest('.company-page-core-services-list-grid');


           const siblings = superparent.querySelectorAll('.company-page-core-services-list-grid-column');

           const checkclass = currentparent.classList.contains('active');




           

           

            currentparent.classList.remove('active');

            document.body.style.overflow = "scroll";

            document.body.classList.remove('overflowhidden');

          







});

    });



         companyservicesbtns.forEach((servicebtn => 

    {

        servicebtn.addEventListener('click', function( event ){


           const thisbutton = event.currentTarget;



            const currentparent = thisbutton.closest('.company-page-core-services-list-grid-column');

           const superparent = thisbutton.closest('.company-page-core-services-list-grid');


           const siblings = superparent.querySelectorAll('.company-page-core-services-list-grid-column');

           const checkclass = currentparent.classList.contains('active');



           if(checkclass)
           {

           

           

            currentparent.classList.remove('active');

            document.body.style.overflow = "scroll";
            document.body.classList.remove('overflowhidden');

          }
          else
           {

            siblings.forEach(sibling => {

             sibling.classList.remove('active');

           });

            document.body.style.overflow = "hidden";

             currentparent.classList.add('active');
            document.body.classList.add('overflowhidden');

            //  setTimeout( ()=> 
            //  {

            //   currentparent.scrollIntoView(
            //   {
            //     behavior:"smooth",
            //     block:"start"
            //   }
            //  );

            //  },1000);





             
 
           }







});


    }
))

      servicebacktopagebtns.forEach((servicebtn => 

    {

        servicebtn.addEventListener('click', function( event ){


           const thisbutton = event.currentTarget;



            const currentparent = thisbutton.closest('.company-page-core-services-list-grid-column');

           const superparent = thisbutton.closest('.company-page-core-services-list-grid');


           const siblings = superparent.querySelectorAll('.company-page-core-services-list-grid-column');

           const checkclass = currentparent.classList.contains('active');




           

           

            currentparent.classList.remove('active');

            document.body.style.overflow = "scroll";
            document.body.classList.remove('overflowhidden');

          







});


    }
))







     })

    })();

