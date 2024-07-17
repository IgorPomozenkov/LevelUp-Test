// Elements
const btnsEl = document.querySelectorAll('#order-btn');
const orderFormEl = document.getElementById('order-form');
const minutesEl = document.getElementById('timer-min');
const secondsEl = document.getElementById('timer-sec');
const timerAnimEl = document.getElementById('timer-anim');

// Swiper init

const swiper = new Swiper('.swiper', {
  loop: true,
  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

// Common

const time = 30;
const date = new Date();
const deadline = new Date(date.getFullYear(), date.getMonth(), date.getDate(), date.getHours(), date.getMinutes() + time, date.getSeconds() + 0);
let timerId = null;

function handleOrderBtn() {
  orderFormEl.scrollIntoView({behavior: "smooth", block: "end"});
};

btnsEl.forEach(btn => btn.addEventListener('click', handleOrderBtn));

function timer() {
  const diff = deadline - new Date();

  if (diff <= 100) {
    clearInterval(timerId);

    minutesEl.textContent = '00';
    secondsEl.textContent = '00';
    timerAnimEl.style.animation = 'none';

    return;
  }

  const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
  const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;

  minutesEl.textContent = minutes < 10 ? '0' + minutes : minutes;
  secondsEl.textContent = seconds < 10 ? '0' + seconds : seconds;
};

timer();
timerId = setInterval(timer, 1000);
