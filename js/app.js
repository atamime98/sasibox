let [right , left] =document.querySelectorAll(".btnarrow");

let sliderimg = document.querySelectorAll(  ".imgs" );
let slidertext = document.querySelectorAll( ".sliditem" );

sliderApp(sliderimg, 2000)
sliderApp(slidertext, 2000)





 function sliderApp(slider, duration) {
     setInterval(function(){
         let counter =0 ;
         if(counter !== slider.length-1){

             slider[counter].style.display="none";
             slider[counter+1].style.display="block";
             counter++;
         }
         else{
             slider[counter].style.display="none";
             slider[0].style.display="block";
             counter =0;

         }
     },duration)

}

let cards = document.querySelectorAll(".card")
for (let i=0 ; i<cards.length; i++){
cards[i].onmouseover = function () {
 for (let j=0 ; j<cards.length; j++)cards[j].classList.remove("active");
   cards[i].classList.add("active");
   }
}


let boxes = document.querySelectorAll('.show-of-3');
let btns = document.querySelectorAll('.active-button');
btns.forEach(function (el,key) {
    el.onclick=function () {
        boxes.forEach(function (box,key) {
            box.classList.remove('active-box');
        })
        boxes[key].classList.add('active-box');
    }

})




