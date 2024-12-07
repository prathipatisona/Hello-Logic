import React from "react";
import $ from 'jquery';
import "jquery-ui-dist/jquery-ui";
import { useEffect } from 'react';

const ViewCourses = () => {
 useEffect(()=>{
    $(".slidem").prepend($(".slidem > div:last").clone());
     $.fn.slidFadeToggle = function(speed,easing,callback) {
     return this.animate({opacity:'toggle',height: 'toggle'},speed,easing,callback);
     };
    var divS = $(".slidem > div"),
    sDiv = $(".slidem > div").length,
    n = 0;
    function slidethem() {
    $(divS).eq(n).slidFadeToggle(1000,"swing",n = n+1);
    $(divS).eq(n).show();
    }
    ( function slideit() {
    if(n === sDiv) {
    n = 0;
    $(divS).show();
    }
    slidethem();
    if(n === sDiv) {
    setTimeout(slideit,1);
    }
    else{
    setTimeout(slideit, 1000);
    }
    }
    )();
     },[])
     return(
    <div class="irotate mb-4 mt-4">
 <div style={{fontSize:"50px"}} class="thisis font-weight-bold pl-5 pr-2">See</div>
<div class="thisis slidem">
<div class="text-primary">Mern full stack</div>
<div class="text-success">UI Developer</div>
<div class="text-info">UI & UX Designer</div>
<div class="text-warning">Python full stack</div>
</div> 
</div>
)
};
 
export default ViewCourses;     