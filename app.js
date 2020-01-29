import { productsData } from './productsData.js';
import { productsArray } from './productsArray.js';

const resultDisplay = document.getElementById('results');
const submit1Button = document.getElementById('submit1Button');
const submit2Button = document.getElementById('submit2Button');
const submit3Button = document.getElementById('submit3Button');

//const product3Input = document.getElementById('product3Input');
const products = new productsArray(productsData);

//productResults = [];

let chosenProducts = 0;


const initializeNewProducts = () => {
    const newProduct1 = products.getRandomProduct();
    let newProduct2 = products.getRandomProduct();
    console.log(newProduct1);

    while (newProduct1.id === newProduct2.id){
        newProduct2 = products.getRandomProduct;
    }
    console.log(newProduct2);

    let newProduct3 = products.getRandomProduct();
    while (newProduct1.id === newProduct3.id || newProduct2.id === newProduct3.id){
        newProduct3 = products.getRandomProduct();
    }
    console.log(newProduct3);

    const product1Object = newProduct1;
    product1Object.textContent = product1Object.name;
    const product1Image = document.getElementById('product1Image');
    product1Image.src = product1Object.image;
    const product1Name = document.getElementById('product1Name');
    product1Name.textContent = product1Object.name;

    const product2Object = newProduct2;
    product2Object.textContent = product2Object.name;
    const product2Image = document.getElementById('product2Image');
    product2Image.src = product2Object.image;
    const product2Name = document.getElementById('product2Name');
    product2Name.textContent = product2Object.name;

    const product3Object = newProduct3;
    product3Object.textContent = product3Object.name;
    const product3Image = document.getElementById('product3Image');
    product3Image.src = product3Object.image;
    const product3Name = document.getElementById('product3Name');
    product3Name.textContent = product3Object.name;
};

initializeNewProducts();


submit1Button.addEventListener('click', () => {
    console.log(document.getElementById('chosenProduct'));
    initializeNewProducts();
    chosenProducts++;
    if (chosenProducts > 25){
        resultDisplay.style.visibility = 'visible';
        submit1Button.disabled = 'true';
    }
});
submit2Button.addEventListener('click', () => {
    console.log(document.getElementById('product2Name'));
    initializeNewProducts();
    chosenProducts++;
    if (chosenProducts > 25){
        resultDisplay.style.visibility = 'visible';
        submit2Button.disabled = 'true';
    }
});
submit3Button.addEventListener('click', () => {
    console.log(document.getElementById('product3Name'));
    initializeNewProducts();
    chosenProducts++;
    if (chosenProducts > 25){
        resultDisplay.style.visibility = 'visible';
        submit3Button.disabled = 'true';
    }
});

//'button:checked' returns 'null'
//on the 25th click 'getRandomProduct' breaks