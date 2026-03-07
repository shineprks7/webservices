const sliderIconPreviousAll = document.querySelectorAll('.direction-arrow-icon-previous');
const sliderIconNextAll = document.querySelectorAll('.direction-arrow-icon-next');

const superwrapperSliders = document.querySelectorAll(".slider-super-wrapper");

console.log("slider loaded");

sliderIconNextAll.forEach(sliderIconNext => {
    

sliderIconNext.addEventListener('click', function( event ){


    
    console.log("next icon clicked");


    const superwrapper = event.currentTarget.closest('.slider-super-wrapper');


    console.log(superwrapper);
    const leftbutton =  superwrapper.querySelector('.direction-arrow-icon-previous');
    const rightbutton =  superwrapper.querySelector('.direction-arrow-icon-next');


    const parentWrapper =  superwrapper.querySelector('.slider-parent-wrapper');

        console.log(parentWrapper);


       
    const scrollLeft = parentWrapper.scrollLeft;

    parentWrapper.scrollTo(
        {
            left:scrollLeft+360,
            behavior:'smooth',

        }
    );

    setTimeout(function(){

    updateButtonsScroll(parentWrapper,leftbutton,rightbutton);

    }, 300);





});

});


sliderIconPreviousAll.forEach(sliderIconPrevious => {


sliderIconPrevious.addEventListener('click', function( event ){


    const superwrapper = event.currentTarget.closest('.slider-super-wrapper');

    
     const leftbutton =  superwrapper.querySelector('.direction-arrow-icon-previous');
    const rightbutton =  superwrapper.querySelector('.direction-arrow-icon-next');


    const parentWrapper =  superwrapper.querySelector('.slider-parent-wrapper');


    const scrollWidth =  parentWrapper.scrollWidth;

    const clientWidth = parentWrapper.clientWidth;

    const maxScrollPoint = scrollWidth - clientWidth;

    const scrollLeft = parentWrapper.scrollLeft;

    parentWrapper.scrollTo(
        {
            left:(scrollLeft-360),
            behavior:'smooth',

        }
    );





    setTimeout(function(){

    updateButtonsScroll(parentWrapper,leftbutton,rightbutton);

    }, 300);



       





});

});




superwrapperSliders.forEach(slidersuperwrapper => {


     const leftbutton =  slidersuperwrapper.querySelector('.direction-arrow-icon-previous');
    const rightbutton =  slidersuperwrapper.querySelector('.direction-arrow-icon-next');


    const parentWrapper =  slidersuperwrapper.querySelector('.slider-parent-wrapper');

    updateButtonsScroll(parentWrapper,leftbutton, rightbutton);
    
    
});

superwrapperSliders.forEach(slidersuperwrapper => {

    const parentWrapper =  slidersuperwrapper.querySelector('.slider-parent-wrapper');

     const leftbutton =  slidersuperwrapper.querySelector('.direction-arrow-icon-previous');
       const rightbutton =  slidersuperwrapper.querySelector('.direction-arrow-icon-next');

      parentWrapper.addEventListener("scroll", function( event ){
     
      

        updateButtonsScroll(parentWrapper, leftbutton, rightbutton);

        
    
     });

});


function updateButtonsScroll(parentContainer,leftbutton, rightbutton)
    {
        // alert("I am updating");

        let checkleftScroll = parentContainer.scrollLeft === 0;
        let checkrightScroll = parentContainer.scrollLeft+1 > (parentContainer.scrollWidth - parentContainer.clientWidth)  ? true : false;
   
        console.log("scroll right 1 "+(parentContainer.scrollWidth - parentContainer.clientWidth));
        console.log("scroll right 2 "+parentContainer.scrollLeft);

         if(checkleftScroll)
         {
            leftbutton.classList.add('arrow-disabled')
         }
         else
         {
           leftbutton.classList.remove('arrow-disabled')

         }

         if(checkrightScroll)
         {
            rightbutton.classList.add('arrow-disabled')
         }
         else
         {

            rightbutton.classList.remove('arrow-disabled')

         }
    }


