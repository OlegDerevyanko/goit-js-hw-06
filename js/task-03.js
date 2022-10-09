const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=760&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=760&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=760&w=1260",
    alt: "Group of Horses Running",
  },
];



const list = document.querySelector('.gallery');
let markup = '';
images.forEach(img => {
  markup = images
    .map(
      img =>
        `<li class="gallery__item"><img class="gallery__img" src="${img.url}" alt="${img.alt}"></li>`
    )
    .join('');
});
list.insertAdjacentHTML('afterbegin', markup);