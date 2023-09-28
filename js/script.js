// 1. Copio index e css dall'esercizio slider

/************ ELEMENTS ************/
const arrayImgs = [

  {
      image: 'img/01.webp',
      title: 'Marvel\'s Spiderman Miles Morale',
      text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
  },
  
  {
      image: 'img/02.webp',
      title: 'Ratchet & Clank: Rift Apart',
      text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
  },
  
  {
      image: 'img/03.webp',
      title: 'Fortnite',
      text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
  },
  
  {
      image: 'img/04.webp',
      title: 'Stray',
      text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
  },
  
  {
      image: 'img/05.webp',
      title: "Marvel's Avengers",
      text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
  }

];

const {createApp} = Vue;

createApp({
  data(){
    return {
      
    }
  },

  mounted(){
    // console.log('hello mounted')
  }

  
}).mount('#app-slider')






// const itemsCollector = document.querySelector('.items-wrapper');

// const thumbnails = document.querySelector('.thumbnails');

// const btnPrev = document.querySelector('.up');
// const btnNext = document.querySelector('.down');


// const btnInvertCarousel = document.querySelector('.invert');

// let counterImg = 0;


// arrayImgs.forEach((immagine) => {

//   itemsCollector.innerHTML += `
 
//   <div class="img-box item">

//     <img src="${immagine.image}">

//     <div class="text-box">
//       <h2 class="title">${immagine.title}</h2>

//       <p class="text">${immagine.text}</p>
//     </div>

//   </div>

//   `;

//   thumbnails.innerHTML += `

//   <div class="thumbnail">
//     <img src="${immagine.image}" class="item-thumb">
//   </div>
  
//   `;

//   //Rendo la prima immagine attiva 
//   if (arrayImgs[0]) document.querySelector('.img-box').classList.add('active');

//   if (arrayImgs[0]) document.querySelector('.item-thumb').classList.add('active');
  
// });


// const images = document.getElementsByClassName('item');
// const imagesThumbActive = document.getElementsByClassName('item-thumb');



// for (let i = 0; i < imagesThumbActive.length; i++) {

//   let imgThumb = imagesThumbActive[i];

//   imgThumb.addEventListener('click', function(){

//     console.log(this);

//     images[counterImg].classList.remove('active'); 
//     imagesThumbActive[counterImg].classList.remove('active');
  
//     counterImg = i;
    
//     images[counterImg].classList.add('active');
//     imagesThumbActive[counterImg].classList.add('active');

//   });

// };


// document.body.addEventListener('contextmenu', function(){
//   alert('Perché vuoi spiare il mio codice? Vabbè dai, per stavolta lascio correre');
// });

// btnNext.addEventListener('click', clickNext);

// btnPrev.addEventListener('click', clickPrev);

// let carouselSlideshowNext = setInterval(clickNext, 2500);

// let goPrev = false;

// btnInvertCarousel.addEventListener('click', function(){

//   if (goPrev == true) {

//     clearInterval(carouselSlideshowNext);

//     carouselSlideshowNext = setInterval(clickNext, 2500);

//     goPrev = false;

//   } else if (goPrev == false) {

//     clearInterval(carouselSlideshowNext);

//     carouselSlideshowNext = setInterval(clickPrev, 2500);

//     goPrev = true;

//   }

// });



// /************ FUNCTIONS ************/
// function clickPrev() {
//   console.log('indietro');

//   if (counterImg > 0) {

//     images[counterImg].classList.remove('active'); 
//     imagesThumbActive[counterImg].classList.remove('active');


//     counterImg--; //potevamo inserire l'if semplicemente dopo il counter, come verifica

//     images[counterImg].classList.add('active');
//     imagesThumbActive[counterImg].classList.add('active');


//   } else if (counterImg == 0 ) {

//     images[counterImg].classList.remove('active'); 
//     imagesThumbActive[counterImg].classList.remove('active');


//     counterImg = (arrayImgs.length - 1);

//     images[counterImg].classList.add('active');
//     imagesThumbActive[counterImg].classList.add('active');
    
//   }

// };

// function clickNext() {

//   console.log('avanti');

//   if (counterImg < (arrayImgs.length - 1)) {

//     images[counterImg].classList.remove('active'); 
//     imagesThumbActive[counterImg].classList.remove('active');
  
//     counterImg++;
    
//     images[counterImg].classList.add('active');
//     imagesThumbActive[counterImg].classList.add('active');


//   } else if (counterImg == (arrayImgs.length - 1)) {

//     images[counterImg].classList.remove('active'); 
//     imagesThumbActive[counterImg].classList.remove('active');

//     counterImg = 0;

//     images[counterImg].classList.add('active');
//     imagesThumbActive[counterImg].classList.add('active');

//   }

// };