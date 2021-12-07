'use strict';

//your cart modal

const addToCart = document.querySelectorAll('.addToCart');
const buyNow = document.querySelectorAll('.buyNow');
const overLay = document.querySelector('#overlay');
const modalCart = document.querySelector('.modal-cart');
const closeBtn = document.querySelector('.close-modal');
const lookMoreBtn = document.querySelector('.lookMore-total')

const OpenModal = () => {
  overLay.classList.remove('hidden');
  modalCart.classList.remove('hidden');
};

addToCart.forEach((btn) => {
  btn.addEventListener('click', OpenModal);
});

const CloseModal = () => {
  overLay.classList.add('hidden');
  modalCart.classList.add('hidden');
};

closeBtn.addEventListener('click', CloseModal);
lookMoreBtn.addEventListener('click', CloseModal);

const watchQuantity = document.querySelector('#watch-quantity');
const priceValue = document.querySelector('.price-value');
const totalPrice = document.querySelector('.total-price');

console.log(totalPrice.textContent);

const Quantity = () => {
  const total = watchQuantity.value * priceValue.innerHTML
  totalPrice.innerHTML = Number(total).toFixed(2)
};

watchQuantity.addEventListener('change', Quantity);


//modal images and details

const watches = document.querySelectorAll('.watch');
const watchName = document.querySelector('.watch-name p');
const watchCompany = document.querySelector('.watch-company');
const watchImage = document.querySelector('.modal-watch-image');

let images;
let companyName;
let watchname;
let watchPrice;

const getWatchDetails = (e) => {
  images = e.currentTarget.querySelector('.image img');
  watchImage.src = images.src;
  companyName = e.currentTarget.querySelector('.details .company h4');
  watchCompany.innerHTML = companyName.innerHTML;
  watchname = e.currentTarget.querySelector('.details .name p');
  watchName.innerHTML = watchname.innerHTML;
  watchPrice = e.currentTarget.querySelector('.details .price span');
  priceValue.innerHTML = watchPrice.innerHTML;
  totalPrice.innerHTML = watchPrice.innerHTML;
};

watches.forEach((watch) => {
  watch.addEventListener('click', getWatchDetails);
});



