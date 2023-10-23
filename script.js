var menu=document.getElementById("menu");
var nav_bar = document.getElementById("nav-bar");
var bars=document.getElementById("bars");
window.addEventListener("scroll",()=>
{
    var scroll_value=window.scrollY;
    console.log(scroll_value);
    if(scroll_value>=160)
    {
        nav_bar.classList.add("bg-black");
    }
    else
    {
        nav_bar.classList.remove("bg-black");
    }
}
)
bars.addEventListener("click",()=>
{
    menu.classList.toggle("opacity-100");
    if (bars.classList.contains("fa-bars"))
    {
        bars.classList.replace("fa-bars","fa-times");
        menu.classList.replace("-top-64","top-12");
    }
    else
    {
        bars.classList.replace("fa-times","fa-bars");
        menu.classList.replace("top-12","-top-64");
    }
})
ScrollReveal().reveal('.reveal', {delay:0,easing:"ease-in",interval:50,scale:0.9,reset:true});