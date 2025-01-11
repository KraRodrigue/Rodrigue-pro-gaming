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




// Premier carrousel
const displayedImage = document.getElementById('displayed-image');
const thumbnails = document.querySelectorAll('.thumbnail');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;
const images = ['Images/image1.png', 'Images/image2.png', 'Images/image3.png', 'Images/image4.png'];

// Fonction pour changer d'image
function updateImage(index) {
  currentIndex = index;
  displayedImage.src = images[currentIndex];
  thumbnails.forEach((thumbnail, i) => {
    thumbnail.classList.toggle('active', i === currentIndex);
  });
}

// Gestion des boutons
prevBtn.addEventListener('click', () => {
  const newIndex = (currentIndex - 1 + images.length) % images.length;
  updateImage(newIndex);
});

nextBtn.addEventListener('click', () => {
  const newIndex = (currentIndex + 1) % images.length;
  updateImage(newIndex);
});

// Gestion des miniatures
thumbnails.forEach((thumbnail, index) => {
  thumbnail.addEventListener('click', () => updateImage(index));
});

// Changement automatique toutes les 3 secondes
setInterval(() => {
  const newIndex = (currentIndex + 1) % images.length;
  updateImage(newIndex);
}, 3000);

// Initialisation
updateImage(0);


// deuxieme carrousel
const displayedImage1 = document.getElementById('displayed-image1');
const imageCaption1 = document.getElementById('image-caption1'); // Élément pour la légende
const thumbnails1 = document.querySelectorAll('.thumbnail1');
const prevBtn1 = document.getElementById('prev-btn1');
const nextBtn1 = document.getElementById('next-btn1');

let currentIndex1 = 0;

// Images et légendes
const images1 = [
  'Images/suyu emulateur.webp',
  'Images/emulateur  ps2 1.webp',
  'Images/emulateur  ps2 2.webp',
  'Images/emulateur  ps2 3.webp',
  'Images/emulateur ps vita .webp',
  'Images/emulateur wii u.jpeg',
  'Images/dolphine emulateur .jpeg',
  'Images/emulateur psp.webp',
  'Images/yusu emulateur.png',
  'Images/winlator emulateur.jpeg',
  'Images/skyline .jpeg',
  'Images/nyushu emulateur.jpeg'

];
const captions1 = [
  "Suyu: Suyu est un émulateur conçu pour les consoles portables Nintendo, offrant une expérience de jeu fluide et optimisée sur Android ",
  " PCSX2: PCSX2 est un émulateur PlayStation 2 performant, permettant de jouer à des jeux PS2 avec des graphismes améliorés et des fonctionnalités avancées.",
  "AetherSX2 (PS2): AetherSX2 est un émulateur PS2 optimisé pour Android, offrant une émulation rapide et des options graphiques avancées.",
  "DamonPS2 (PS2): DamonPS2 est un émulateur PlayStation 2 rapide pour Android, offrant une large compatibilité avec les jeux PS2.",
  "Vita3K (PS Vita): Vita3K est le premier émulateur PS Vita, permettant d'exécuter des jeux PS Vita sur PC et Android avec une compatibilité croissante.",
  " Cemu (Wii U): Cemu est un émulateur pour Nintendo Wii U, permettant de jouer aux jeux Wii U avec des options graphiques avancées et un support pour les manettes.",
  " Dolphin Emulator (GameCube/Wii): Dolphin est un émulateur pour Nintendo GameCube et Wii, offrant une compatibilité élevée et des graphismes améliorés.",
  "PPSSPP :PPSSPP est l'émulateur PSP le plus populaire, offrant une excellente qualité graphique et une compatibilité élevée pour les jeux PSP.",
  "Yuzu Emulator (Nintendo Switch) :Winlator est un émulateur PC conçu pour exécuter des jeux Windows sur Android de manière fluide.",
  "Winlator Emulator (PC): Winlator est un émulateur PC conçu pour exécuter des jeux Windows sur Android de manière fluide.",
  "Skyline Emulator (Nintendo Switch) :Skyline est un émulateur Nintendo Switch pour Android, offrant une compatibilité croissante et une performance fluide.",
  "Nyushu Emulator (Nintendo Switch) : Nyushu est un émulateur Nintendo Switch en développement, axé sur une émulation rapide et une large compatibilité des jeux Switch."
];

// Fonction pour changer l'image et la légende
function updateImage1(index) {
  currentIndex1 = index;
  displayedImage1.src = images1[currentIndex1];
  imageCaption1.textContent = captions1[currentIndex1]; // Met à jour la légende
  thumbnails1.forEach((thumbnail1, i) => {
    thumbnail1.classList.toggle('active', i === currentIndex1);
  });
}

// Gestion des boutons
prevBtn1.addEventListener('click', () => {
  const newIndex1 = (currentIndex1 - 1 + images1.length) % images1.length;
  updateImage1(newIndex1);
});

nextBtn1.addEventListener('click', () => {
  const newIndex1 = (currentIndex1 + 1) % images1.length;
  updateImage1(newIndex1);
});

// Gestion des miniatures
thumbnails1.forEach((thumbnail1, index) => {
  thumbnail1.addEventListener('click', () => updateImage1(index));
});

// Changement automatique toutes les 3 secondes
setInterval(() => {
  const newIndex1 = (currentIndex1 + 1) % images1.length;
  updateImage1(newIndex1);
}, 3000);

// Initialisation
updateImage1(0);




// Sélection des boutons et des sections
const buttons = document.querySelectorAll('.buttons button');
const sections = document.querySelectorAll('.game-section');

// Ajout d'un gestionnaire d'événements à chaque bouton
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        // Retirer la classe 'active' de tous les boutons
        buttons.forEach((btn) => btn.classList.remove('active'));

        // Ajouter la classe 'active' au bouton cliqué
        button.classList.add('active');

        // Afficher la section correspondante
        const target = button.id;
        sections.forEach((section) => {
            if (section.classList.contains(target)) {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    });
});





