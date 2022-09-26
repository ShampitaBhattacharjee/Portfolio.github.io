$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.NavBar').addClass("sticky");
        }else{
            $('.NavBar').removeClass("sticky");
        }
    })
});

var typed= new Typed(".typing",{
    strings:["Developer", "Programmer", "Singer"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
});