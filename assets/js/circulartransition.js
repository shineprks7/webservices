/* Mental Model for move along the circle */

/* 
The Formula 

 x = cx + r * cos(theta);

 y = cy + r  * sin(theta)


 cx, cy = center of the circle

 r  - the radius 

 theta = the angle in radians

 radians = degrees * (pi / 180);




 0 deg  = 3 o  clock 

 90 deg =  6 o clock

 180 deg = 9 o clock

 270 deg  = 12 o clock

*/





(function()
{

  



     document.addEventListener('DOMContentLoaded', function(){

      let card_circle_1 = document.querySelector('.section-about-us-circle-card-1');

      let card_circle_2 = document.querySelector('.section-about-us-circle-card-2');

      let card_circle_3 = document.querySelector('.section-about-us-circle-card-3');




      let screenSize = 1240;

      screenSize = window.innerWidth;


     window.addEventListener('resize', function(){


        screenSize = window.innerWidth;


     });



function setCardPositions(el, rdegree)
{


    let CARD_W =  el.offsetWidth;

    let  CARD_H = el.offsetHeight;

    let Radius = 360;



    console.log("Offset Width" + CARD_W);
        console.log("Offset Height" + CARD_H);

    let width  = 720;

    let height = 720;

    let radian = rdegree * (Math.PI / 180);



     let cx = width / 2;

     let cy = height / 2;


     let x = (cx + Radius * Math.cos(radian)) - 120 ;


     let y = (cy + Radius * Math.sin(radian))  - 120;


     let scale = 1;


     let rotateDeg = 0;



     el.style.top = `${x}px`;

     el.style.left = `${y}px`;


     el.setAttribute('data-current-angle', rdegree);



}
function setCardPositionsMobile(el, rdegree)
{


    let CARD_W =  el.offsetWidth;

    let  CARD_H = el.offsetHeight;

    let Radius = 360;



    console.log("Offset Width" + CARD_W);
        console.log("Offset Height" + CARD_H);

    let width  = 480;

    let height = 480;

    let radian = rdegree * (Math.PI / 180);



     let cx = width / 2;

     let cy = height / 2;


     let x = (cx + Radius * Math.cos(radian)) - 120 ;


     let y = (cy + Radius * Math.sin(radian))  - 120;


     let scale = 1;


     let rotateDeg = 0;



     el.style.top = `${x}px`;

     el.style.left = `${y}px`;


     el.setAttribute('data-current-angle', rdegree);



}

if(screenSize > 719)
{

setCardPositions(card_circle_1, 245);

setCardPositions(card_circle_2, 30);

setCardPositions(card_circle_3, 90);

}
else
{
  setCardPositionsMobile(card_circle_1, 225);

setCardPositionsMobile(card_circle_2, 5);

setCardPositionsMobile(card_circle_3, 90);


}




function getCardPositions(el, rdegree)
{


    let CARD_W =  el.offsetWidth;

    let  CARD_H = el.offsetHeight;

    let Radius = 360;



    console.log("Offset Width" + CARD_W);
        console.log("Offset Height" + CARD_H);

    let width  = 720;

    let height = 720;

    let radian = rdegree * (Math.PI / 180);



     let cx = width / 2;

     let cy = height / 2;


     let x = (cx + Radius * Math.cos(radian)) - 120 ;


     let y = (cy + Radius * Math.sin(radian))  - 120;


     let scale = 1;


     let rotateDeg = 0;



     return {x:x,y:y};




}

function travelCardPosition(el, angleslist, speed, opacitylist)
{
    let getDegree =      el.getAttribute('data-current-angle');


    console.log("getDegree"+ getDegree);



    let initialDegree = parseInt(getDegree);

    let findIndex = angleslist.findIndex(abc => abc == initialDegree);

    let destinationDegree  = 0 ;

    let opacityval = 0;


      if(findIndex > -1 )
      {

         if(findIndex == (angleslist.length -1 ))
         {
             
            destinationDegree = angleslist[0];
            
            opacityval = opacitylist[0];


         }
         else
         {
             destinationDegree = angleslist[findIndex+1];
            opacityval = opacitylist[findIndex+1];

         }
          
      }

     console.log("destination Degree "+ destinationDegree);


      let traveldegrees = (destinationDegree - initialDegree + 360) % 360;


      let travelled = 0;

      let currentAngle = initialDegree;

      let animId;



      function animate()
      {
         if(travelled >= traveldegrees)
         {

            let {x, y } = getCardPositions(el, currentAngle);


             el.style.top = `${x}px`;

              el.style.left = `${y}px`;

              cancelAnimationFrame(animId);

              return; 



         }

         currentAngle = (initialDegree + travelled) % 360;

      const {x, y} = getCardPositions(el, currentAngle);

       el.style.top = `${x}px`;

    el.style.left = `${y}px`;

    
     

       travelled = travelled + speed;

       animId = requestAnimationFrame(animate);


      }

      
       animId = requestAnimationFrame(animate);


      


            el.setAttribute('data-current-angle', destinationDegree);


            el.setAttribute('data-card-index',findIndex)

 
}


function getCardPositionsMobile(el, rdegree, adjustment)
{


    let CARD_W =  el.offsetWidth;

    let  CARD_H = el.offsetHeight;

    let Radius = 240;



    console.log("Offset Width" + CARD_W);
        console.log("Offset Height" + CARD_H);

    let width  = 480;

    let height = 480;

    el.setAttribute('data-card-parent-width',width);
             el.setAttribute('data-card-parent-height',height);


    let radian = rdegree * (Math.PI / 180);



     let cx = width / 2;

     let cy = height / 2;


     let x = (cx + Radius * Math.cos(radian)) - adjustment;


     let y = (cy + Radius * Math.sin(radian))  -  adjustment ;


     let scale = 1;


     let rotateDeg = 0;



     return {x:x,y:y};




}

function travelCardPositionMobile(el, angleslist, speed, opacitylist, adjustmentlist)
{
    let getDegree =      el.getAttribute('data-current-angle');


    console.log("getDegree"+ getDegree);



    let initialDegree = parseInt(getDegree);

    let findIndex = angleslist.findIndex(abc => abc == initialDegree);

    let destinationDegree  = 0 ;

    let opacityval = 0;


    let adjustment = 60;



      if(findIndex > -1 )
      {

         if(findIndex == (angleslist.length -1 ))
         {
             
            destinationDegree = angleslist[0];
            
            opacityval = opacitylist[0];

            adjustment = adjustmentlist[0]


         }
         else
         {
             destinationDegree = angleslist[findIndex+1];
            opacityval = opacitylist[findIndex+1];
            adjustment = adjustmentlist[findIndex+1];


         }
          
      }

     console.log("destination Degree "+ destinationDegree);


      let traveldegrees = (destinationDegree - initialDegree + 360) % 360;


      let travelled = 0;

      let currentAngle = initialDegree;

      let animIdMobile;



      function animateMobile()
      {
         if(travelled >= traveldegrees)
         {

            let {x, y } = getCardPositionsMobile(el, currentAngle, adjustment );


             el.style.top = `${x}px`;

              el.style.left = `${y}px`;

              cancelAnimationFrame(animIdMobile);

              return; 



         }

         currentAngle = (initialDegree + travelled) % 360;

      const {x, y} = getCardPositionsMobile(el, currentAngle ,adjustment);

       el.style.top = `${x}px`;

    el.style.left = `${y}px`;

    
     

       travelled = travelled + speed;

       animIdMobile = requestAnimationFrame(animateMobile);


      }

      
       animIdMobile = requestAnimationFrame(animateMobile);


      


            el.setAttribute('data-current-angle', destinationDegree);


            el.setAttribute('data-card-index',findIndex)

             
}


function autoSetCardPositions()
{

    let speed = 6;

     let angle1 = 245;

    let angle2 = 30;

    let angle3 = 120;

    let angles = [245, 30,90];
    let opacitylist = [1, 0.5,0.2];

    let adjustmentlist = [60, 60, 60];

    travelCardPosition(card_circle_1, angles, speed, opacitylist , adjustmentlist);

     travelCardPosition(card_circle_2, angles, speed , opacitylist , adjustmentlist);
     travelCardPosition(card_circle_3, angles, speed, opacitylist), adjustmentlist;










     
}


function autoSetCardPositionsMobile()
{

    let speed = 6;

     let angle1 = 245;

    let angle2 = 30;

    let angle3 = 120;

    let angles = [225, 5,90];
    let opacitylist = [1, 0.5,0.2];

    let adjustmentlist = [28, 60, 60];

    travelCardPositionMobile(card_circle_1, angles, speed, opacitylist , adjustmentlist );

     travelCardPositionMobile(card_circle_2, angles, speed , opacitylist, adjustmentlist);
     travelCardPositionMobile(card_circle_3, angles, speed, opacitylist , adjustmentlist);










     
}

setInterval(function(){

   if(screenSize > 719)
   {
    autoSetCardPositions();

   }
   else
   {
         autoSetCardPositionsMobile();


   }


},4000);



    });


})();










// Reference Code


const W = 800, H = 800, CX = W/2, CY = H/2;
const RADIUS = 290;          // orbit radius
const CARD_W = 200, CARD_H = 260;
// The 3 visible slots: center=0°(right), prev & next offset by ±SPREAD
const SPREAD_DEG = 58;       // angle between active and side cards (degrees)
const SPREAD = SPREAD_DEG * Math.PI / 180;
const ACTIVE_ANGLE = -Math.PI / 2;  // 12 o'clock = top

const SCALE_ACTIVE = 1.0;
const SCALE_SIDE   = 0.72;
const OPACITY_SIDE = 0.45;



function posForAngle(angle) {
  return {
    x: CX + RADIUS * Math.cos(angle),
    y: CY + RADIUS * Math.sin(angle),
  };
}


function applyCardTransform(el, angle, scale, opacity, zIndex, visible) {
  const pos = posForAngle(angle);
  // Translate so card center is on circle edge
  // Card is placed so its CENTER is at (pos.x, pos.y)
  // We rotate the card to face inward (tangent to circle)
  const rotateDeg = (angle * 180 / Math.PI) + 90; // face inward

  if (!visible) {
    el.style.opacity = '0';
    el.style.pointerEvents = 'none';
    el.style.zIndex = '0';
    // park it off-screen (no transform flash)
    el.style.transform =
      `translate(${pos.x - CARD_W/2}px, ${pos.y - CARD_H/2}px) rotate(${rotateDeg}deg) scale(${scale})`;
    return;
  }

  el.style.opacity = String(opacity);
  el.style.zIndex = String(zIndex);
  el.style.pointerEvents = opacity > 0.3 ? 'auto' : 'none';
  el.style.transform =
    `translate(${pos.x - CARD_W/2}px, ${pos.y - CARD_H/2}px) rotate(${rotateDeg}deg) scale(${scale})`;
}
