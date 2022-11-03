function $Dojo(id){
    this.objHTML = document.getElementById(id);
    
    this.click = (callback) => {
        this.objHTML.addEventListener("click", callback)
    }
    this.hover = (callback1, callback2) => {
        this.objHTML.addEventListener("mouseover", callback1)
        this.objHTML.addEventListener("mouseout", callback2)
    }

    return this
}

$Dojo("btn1").click(function() { console.log("Hiciste click sobre el boton!") });

let func1 = function() { console.log("Estas sobre el boton!") }
let func2 = function() { console.log("Ya no estas sobre el boton!") }

$Dojo("btn2").hover(func1,func2);