let header = document.querySelector("header");
let headerAnchor = document.querySelectorAll("header ul li a");

window.addEventListener("scroll",() =>{
    if(window.pageYOffset != 0){
        header.style.background = "rgba(0,0,0,0.8)";
        header.style.color = "white";
        headerAnchor.forEach(a =>{
            a.style.color = "white";
        })
    }else{
        header.style = "";
        headerAnchor.forEach(a =>{
            a.style.color = "#09777D";
        })
    }
})