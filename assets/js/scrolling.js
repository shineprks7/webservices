(function()
{
const windowclientX = 0;

const windowclientY = 0;




function debounce(funct, delay)
{
     let timer;

     return function(...args){
        clearTimeout(timer);

        timer = setTimeout(() => {
            funct.apply(this.args);

        },delay)
     }
}

function throttle(funct, delay)
{
    let lastCall = 0;
     return function(...args)
     {
        const now = Date.now();

        if((now - lastCall) >= delay)
        {
            lastCall = now;
            funct.apply(this,args);


        }
     }
}



function handleScroll(event)
{

    




    const servicesHeadlineParts = document.querySelectorAll(".services-section-accounting-content .services-headline-part");
    
    const servicesHeadlinePartsTax = document.querySelectorAll(".services-section-tax-content .services-headline-part");

    const servicesListHighlight = document.querySelectorAll(".services-grid-column");

    const taxBenefitsItems = document.querySelectorAll(".tax-benefits-item");


        const scrollRevealByOpacity = document.querySelectorAll(".scroll-reveal-opac");
        const scrollRevealByPopUp = document.querySelectorAll(".scroll-reveal-popup");

        const boxShadowScrollReveal = document.querySelectorAll(".scroll-reveal-box-shadow");

        const boxShadowScrollRevealAbout = document.querySelectorAll(".about-section .outset-box-shadow");

        const ctaSectionAccountingTax = document.querySelectorAll(".services-section-accounting-tax-service-list");


        
        


    let viewPortHeight = window.innerHeight;

    const viewPortWidth = window.innerWidth;


    scrollRevealByOpacity.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent > 30 )
            {
                el.style.opacity = 1;

            }
            else
            {
     
            }
            

         }
         else
         {
         }

     });
     
      boxShadowScrollReveal.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent > 20 )
            {
              el.classList.add("trigger-box-shadow-reveal");


            }
            else
            {
                   el.classList.remove("trigger-box-shadow-reveal");

            }
            

         }
         else
         {
                            el.classList.remove("trigger-box-shadow-reveal");

         }

     });

     boxShadowScrollRevealAbout.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight)
         {

            let diff = viewPortHeight - currentPosition;

            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent > 30 )
            {
              el.classList.add("reveal");


            }
            else
            {
                  //  el.classList.remove("trigger-box-shadow-reveal");

            }
            

         }
         else
         {
                            // el.classList.remove("trigger-box-shadow-reveal");

         }

     });
    
   

     

    
     servicesHeadlineParts.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight )
         {


            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 80 && pointToPercent > 40)
            {
                  el.classList.add("highlighted");


                
            }
            else
            {
                el.classList.remove("highlighted");

            }
            
            

         }
         else
         {
                            el.classList.remove("highlighted");

         }
         

     });

      servicesHeadlinePartsTax.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight )
         {


            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 80 &&  pointToPercent > 45)
            {
                  el.classList.add("highlighted");


                
            }
            else
            {
                el.classList.remove("highlighted");

            }
            
            

         }
         else
         {
                            el.classList.remove("highlighted");

         }
         

     });


     

       servicesListHighlight.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight )
         {


            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 80 &&  pointToPercent > 45)
            {
                  el.classList.add("highlighted");


                
            }
            else
            {
                el.classList.remove("highlighted");

            }
            
            

         }
         else
         {
                            el.classList.remove("highlighted");

         }
         

     });

     

     ctaSectionAccountingTax.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight )
         {


            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 100 &&  pointToPercent > 10)
            {
                  el.classList.add("highlighted");


                
            }
            else
            {
                el.classList.remove("highlighted");

            }
            
            

         }
         else
         {
                            el.classList.remove("highlighted");

         }
         

     });

     

      taxBenefitsItems.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight )
         {


            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 80 &&  pointToPercent > 45)
            {
                  el.classList.add("highlighted");


                
            }
            else
            {
                el.classList.remove("highlighted");

            }
            
            

         }
         else
         {
                            el.classList.remove("highlighted");

         }
         

     });

      scrollRevealByPopUp.forEach((el) => {


        let elPosition = el.getBoundingClientRect();

         let top = elPosition.top;

         let currentPosition = viewPortHeight-top;

           if(currentPosition > 0 && currentPosition < viewPortHeight )
         {


            let point = viewPortHeight/100;

            let pointToPercent = Math.round((currentPosition  / point ) ,0);

            console.log("pointToPercent"+pointToPercent);

            if(pointToPercent < 80 &&  pointToPercent > 45)
            {
                  el.classList.add("reveal");


                
            }
            else
            {


            }
            
            

         }
         else
         {

         }
         

     });

    //  aboutUsSectionScrollTriggers.forEach((el) => {


    //     let elPosition = el.getBoundingClientRect();

    //      let top = elPosition.top;

    //      let currentPosition = viewPortHeight-top;

    //        if(currentPosition > 0 && currentPosition < viewPortHeight )
    //      {


    //         let point = viewPortHeight/100;

    //         let pointToPercent = Math.round((currentPosition  / point ) ,0);

    //         console.log("pointToPercent"+pointToPercent);

    //         if(pointToPercent > 48)
    //         {
    //               el.classList.add("trigger-added");


                
    //         }
            
            

    //      }
         

    //  });




}

let debouncedHandleScroll = throttle(handleScroll,100);


window.addEventListener("scroll", debouncedHandleScroll);


})()