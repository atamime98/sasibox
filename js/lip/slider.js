let changheslider = function () {
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


}
setInterval(changheslider,1000)