const divs = document.querySelectorAll('#main .innerDiv');

function activate(i){
    divs[i].querySelector(".p1").classList.add("for-hover");
    divs[i].addEventListener("click", () => {
        divs[i].querySelector(".p1").classList.toggle("clickp1");
        divs[i].querySelector(".p1").classList.toggle("for-hover");
        divs[i].classList.toggle("clickDiv");
        divs[i].querySelector(".p2").classList.toggle("clickp2");
        divs[i].querySelector("img").classList.toggle("clickimg");
    })
}

for(var i = 0; i < divs.length; i++) {
    activate(i)  
}