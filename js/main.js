const responsive = {
   
    960:{
        items:1
    }
}
$(document).ready(function(){
   
   

   //click to scroll up
   $(".move-up span").click(()=>{
       $("html, body").animate({
           scrollTop:0
       }, 10);
   });
   //anime on scroll
   AOS.init();
});



