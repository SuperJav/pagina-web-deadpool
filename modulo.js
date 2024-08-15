

let buttonMenu=document.body.getElementsByClassName("container-icon-menu")[0]
let iconMenu=document.body.getElementsByClassName("icon-menu")[0]
let containerNav=document.body.getElementsByTagName("nav")[0]
let navlist=document.body.getElementsByTagName("li")
let containerInicio=document.body.getElementsByClassName("container-main-inicio")[0]
let containerSobreMi=document.body.getElementsByClassName("container-sobre-mi")[0]
let containerContact=document.body.getElementsByClassName("container-contacto")[0]
let buttonInicio=document.body.getElementsByClassName("buttom-nav")[0]
let buttonSobreMi=document.body.getElementsByClassName("buttom-nav")[1]
let buttonContact=document.body.getElementsByClassName("buttom-nav")[2]


function OpenAndCloseMenu() {

    let positionTopNavClose="45px"
    let positionTopNavOpen= "80px"

    if (screen.width <= 1025 && screen.width >=700) {
        
    }else if(screen.width <=699){
        positionTopNavClose="20px"
        positionTopNavOpen= "50px"
    }
    
    if (containerNav.style.top == positionTopNavClose) {

        containerNav.style.top=positionTopNavOpen
        iconMenu.style.background="#B1A7A6"
        document.body.getElementsByTagName("li")[0].style.opacity="1"
        document.body.getElementsByTagName("li")[1].style.opacity="1"
        document.body.getElementsByTagName("li")[2].style.opacity="1"
    }else{
        iconMenu.style.background="#f0e7e6"
        containerNav.style.top=positionTopNavClose
        document.body.getElementsByTagName("li")[0].style.opacity="0"
        document.body.getElementsByTagName("li")[1].style.opacity="0"
        document.body.getElementsByTagName("li")[2].style.opacity="0" 
    }
}


buttonInicio.addEventListener('click',()=>{
    containerInicio.style.display="flex"
    containerSobreMi.style.display="none"
    containerContact.style.display="none"
})

buttonSobreMi.addEventListener('click',()=>{
    containerInicio.style.display="none"
    containerSobreMi.style.display="flex"
    containerContact.style.display="none"
})

buttonContact.addEventListener('click',()=>{
    containerInicio.style.display="none"
    containerSobreMi.style.display="none"
    containerContact.style.display="flex"
})


buttonInicio
buttonMenu.addEventListener('click',OpenAndCloseMenu);