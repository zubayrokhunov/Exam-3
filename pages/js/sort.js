"use strict";

const data = JSON.parse(localStorage.getItem("data")) || [];
const CarsProduct = document.querySelector("#wiew-product");

data.sort((a, b) => a.name - b.name);

function DeleteProduct(e){
    if(e.target.classList.contains('delete')){
        const deleteData = data.filter((item) => {
            return item.id!= e.target.id
        })
        localStorage.setItem('data', JSON.stringify(deleteData))
        window.location.reload()
    }
}

document.addEventListener('click', (e) => {
  DeleteProduct(e)
})

if (data.length > 0) {
  CarsProduct.innerHTML = "";
  data.forEach((element) => {
    const card = document.createElement("div");
    card.classList.add("car");
    card.innerHTML = `
            <img src='https://i.ndtvimg.com/i/2017-05/general-motors-cars-india-collage_827x510_51495973928.jpg' alt="img">
            <h3><span class="clr"> Model Auto:</span> ${element.model}</h3>
            <h3><span class="clr"> Name Auto:</span> ${element.name}</h3>
            <h3><span class="clr"> Year Auto:</span> ${element.year}</h3>
            <h3><span class="clr"> Color Auto:</span> ${element.color}</h3>
            <h3><span class="clr"> Price Auto:</span> ${element.price}</h3>
            <h3><span class="clr"> Stock Auto:</span> ${element.stock} </h3>
            <button id='${element.id}' class="delete">Delete</button>

        `;
        CarsProduct.appendChild(card);
  });
} else {
  CarsProduct.innerHTML("<h1>Afsuski bu yerda hech qanday malumot yoq</h1>");
}
