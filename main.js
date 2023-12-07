// // const galleryItems = [
// //   {
// //     id: 1,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 2,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 3,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 4,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 5,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 6,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 7,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 8,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// //   {
// //     id: 9,
// //     src: "https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg",
// //     href:"https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546_1280.jpg",
// //     alt: "description",
// //   },
// // ];

// // function sd() {
// // let a = galleryItems.map() 

// // return
// // }



// const galleryItems = [
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 1' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//     { preview: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', original: 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg', description: 'Description 2' },
//   ];
  
//   const gallery = document.querySelector('.js-gallery');
//   const lightbox = document.querySelector('.lightbox');
//   const lightboxImage = document.querySelector('.lightbox__image');
//   const closeButton = document.querySelector('.lightbox__button');
  

//   function renderGallery() {
//     const galleryHTML = galleryItems.map(item => `
//       <li class="gallery__item">
//         <img class="gallery__image" src="${item.preview}" data-source="${item.original}" alt="${item.description}">
//       </li>
//     `).join('');
  
//     gallery.innerHTML = galleryHTML;
//   }
  
//   renderGallery();
  

//   gallery.addEventListener('click', GalleryClick);
  
//   function GalleryClick(event) {
//     if (event.target.nodeName === 'IMG') {
//       const imageUrl = event.target.dataset.source;
//       openLightbox(imageUrl);
//     }
//   }
  

//   function openLightbox(url) {
//     lightbox.classList.add('is-open');
//     lightboxImage.src = url;
//     lightboxImage.alt = 'Full-size Image';
//   }
  

//   function closeLightbox() {
//     lightbox.classList.remove('is-open');
//     lightboxImage.src = '';
//     lightboxImage.alt = '';
//   }

//   closeButton.addEventListener('click', closeLightbox);
  

//   lightbox.addEventListener('click', (event) => {
//     if (event.target === lightbox) {
//       closeLightbox();
//     }
//   });
  

//   window.addEventListener('keydown', (event) => {
//     if (event.key === 'Escape') {
//       closeLightbox();
//     }
//   });
  




// // let photo = document.createElement('img')
// // photo.src = 'https://cdn.pixabay.com/photo/2010/12/13/10/13/tulips-2546__340.jpg';
// // photo.width = '1000';
// // photo.height = '550';
// // photo.alt = 'description'

// // let div1 = document.createElement('div')
// // div1.append(photo)
// // document.body.append(div1)

// window.addEventListener(
//   'scroll',
//   _.throttle(() => {
//     console.log('Scroll event handler invocayion every 300ms');
//   },300),
// )

const sliderInput = document.querySelector('.slider__input');
const sliderImage = document.querySelector('.slider__image');

const sliderChange = _.debounce(() => {
  const sliderValue = sliderInput.value;
  const imageSize = 100 + sliderValue * 2; 
  sliderImage.style.width = `${imageSize}px`;
  console.log(sliderValue);
}, 300); 

sliderInput.addEventListener('input', sliderChange);

// const item = document.querySelector(".item");

// block.onmousemove = function (e){
// item.style.position = 'fixed';
// item.style.left = e.clientX + -20 + 'px';
// item.style.top = e.clientY + -20 + 'px';
// }

// function validationInput(text) {
//     return text.length >= 3; 
// }


// const validation = _.debounce(() => {
//     const inputLabel = document.getElementById('inputLabel');
//     const validationText = document.getElementById('text');

//     const isValid = validationInput(inputField.value);

//     if (isValid) {
//         validationText.textContent = inputLabel.value;
//     } else {
//         validationText.textContent = 'Text is not valid.';
//     }
// }, 500);