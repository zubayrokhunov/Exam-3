"use strict";
// -------------------------- Functions --------------------------
function generateId() {
    const timestamp = new Date().getTime();
    const randomNum = Math.random();
    return `${timestamp}_${randomNum}`;
}


//  ----------------------------- Variables -----------------------------
  
const data = JSON.parse(localStorage.getItem('data')) || [];
const addCar = document.querySelector('#addCar');


addCar.addEventListener('submit', (e) => {
  e.preventDefault();
  const car = {
    id: generateId(),
    model: e.target[0].value,
    name: e.target[1].value,
    year: e.target[2].value,
    color: e.target[3].value,
    stock: e.target[4].value,
    price: e.target[5].value,
  }
  data.push(car);
  localStorage.setItem('data', JSON.stringify(data));
  e.target.reset(); 
})
