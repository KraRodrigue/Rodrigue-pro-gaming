const icon = document.querySelector('.search-button');
const searchBar = document.querySelector('.search-bar');
const searchButton = document.querySelector('.search-button1');
const Overlay = document.querySelector('.overlay');
    icon.onclick = function(){
        searchBar.classList.toggle('active');
        Overlay.classList.toggle('active1');
    };
    searchButton.onclick = function(){
        searchBar.classList.toggle('active');
        Overlay.classList.toggle('active1');
    };
    

const menuBeuger = document.querySelector('.menu-beuger');
const listePhone = document.querySelector('.liste-phone');
const menuClose = document.querySelector('.menu-close');
    
    menuBeuger.addEventListener('click', () => {
        listePhone.classList.toggle('beuger');
    });
    menuClose.addEventListener('click', () => {
        listePhone.classList.toggle('beuger');
    });
  

    

const Mobile = document.querySelector('.mobile');
const listScrol = document.querySelector('.mobile-scrol'); 
const Mobile1 = document.querySelector('.mobile1');
const Close = document.querySelector(".close")
     
    Mobile.addEventListener('click', () => {
        listScrol.classList.toggle('mobile-active');
    });

    Mobile1.addEventListener('click', () => {
        listScrol.classList.toggle('mobile-active');
    });
    Close.addEventListener('click', () => {
        listScrol.classList.toggle('mobile-active');
    });


const psp = document.querySelector('.psp');
const psp1 = document.querySelector('.psp1');
const pspScrol = document.querySelector('.psp-scrol');
const Close1 = document.querySelector(".close1")
  
    psp.addEventListener('click', () => {
        pspScrol.classList.toggle('psp-active');
    });
    psp1.addEventListener('click', () => {
        pspScrol.classList.toggle('psp-active');
    });
    Close1.addEventListener('click', () => {
        pspScrol.classList.toggle('psp-active');
    });



const Ps2 = document.querySelector('.ps2');
const Ps22 = document.querySelector('.ps22');
const ps2Scrol = document.querySelector('.ps2-scrol');
const Close2 = document.querySelector(".close2")
                       
    Ps2.addEventListener('click', () => {
        ps2Scrol.classList.toggle('ps2-active');
    });            
    Ps22.addEventListener('click', () => {
        ps2Scrol.classList.toggle('ps2-active');
    }); 
    Close2.addEventListener('click', () => {
        ps2Scrol.classList.toggle('ps2-active');
    }); 




const psVita = document.querySelector('.ps-vita');
const psVita1 = document.querySelector('.psvita1');
const psvitaScrol = document.querySelector('.psvita-scrol');
const Close3 = document.querySelector(".close3")
  
    psVita.addEventListener('click', () => {
        psvitaScrol.classList.toggle('psvita-active');
    });
    psVita1.addEventListener('click', () => {
        psvitaScrol.classList.toggle('psvita-active');
    });
    Close3.addEventListener('click', () => {
        psvitaScrol.classList.toggle('psvita-active');
    });

const Wii = document.querySelector('.wii');
const Wii1 = document.querySelector('.wii1');
const wiiScrol = document.querySelector('.wii-scrol');
const Close4 = document.querySelector(".close4")
      
    Wii.addEventListener('click', () => {
        wiiScrol.classList.toggle('wii-active');
    }); 
    Wii1.addEventListener('click', () => {
        wiiScrol.classList.toggle('wii-active');
    });
    Close4.addEventListener('click', () => {
        wiiScrol.classList.toggle('wii-active');
    });


        
const Ns = document.querySelector('.ns');
const Ns1 = document.querySelector('.ns1');
const nsScrol = document.querySelector('.ns-scrol');
const Close5 = document.querySelector(".close5")
          
    Ns.addEventListener('click', () => {
       nsScrol.classList.toggle('ns-active');
     });          
    Ns1.addEventListener('click', () => {
        nsScrol.classList.toggle('ns-active');
    });
    Close5.addEventListener('click', () => {
       nsScrol.classList.toggle('ns-active');
    });


const Pc = document.querySelector('.pc');
const Pc1 = document.querySelector('.pc1');
const pcScrol = document.querySelector('.pc-scrol');
const Close6 = document.querySelector(".close6")
               
    Pc.addEventListener('click', () => {
        pcScrol.classList.toggle('pc-active');
    }); 
    Pc1.addEventListener('click', () => {
        pcScrol.classList.toggle('pc-active');
    }); 
    Close6.addEventListener('click', () => {
        pcScrol.classList.toggle('pc-active');
    });



document.addEventListener("DOMContentLoaded", () => {
    const box = document.getElementById("box");
    const hasVisited = sessionStorage.getItem("visited");

    if (!hasVisited) {
        // Afficher la boîte par translation
        setTimeout(() => {
            box.classList.add("visible");
        }, 100);

        // Marquer la visite
        sessionStorage.setItem("visited", "true");
    } else {
        // La boîte reste à sa place finale
        box.classList.add("visible");
    }
});


