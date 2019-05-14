'use strict';

// I need to make global variables for total clicks and percentage of clicks
/////////////////GLOBAL VARIABLES//////////////////
var productPic = document.getElementById('products');
var productPic2 = document.getElementById('products2');
var productPic3 = document.getElementById('products3');

var totalClicksAcrossAllUsers = 0;
var percentageClicked = 0;
var productArray = [];
var threePicArr = [];
// var productPic = document.getElementById(name.jpg);

// i need to build a constructor function that builds out instances of all the products
////////CONSTRUCTOR///////////////////

function DisplayProduct(name){
  this.name = name;
  this.filepath = `img/${name}.jpg`;
  this.timesShown = 0;
  this.votes = 0;
  productArray.push(this);
}


/////////////INSTANCES////////////////

new DisplayProduct('banana');
new DisplayProduct('bathroom');
new DisplayProduct('boots');
new DisplayProduct('breakfast');
new DisplayProduct('bubblegum');
new DisplayProduct('chair');
new DisplayProduct('cthulhu');
new DisplayProduct('dog-duck');
new DisplayProduct('dragon');
new DisplayProduct('pen');
new DisplayProduct('pet-sweep');
new DisplayProduct('scissors');
new DisplayProduct('shark');
new DisplayProduct('sweep');
new DisplayProduct('tauntaun');
new DisplayProduct('unicorn');
new DisplayProduct('usb');
new DisplayProduct('water-can');
new DisplayProduct('wine-glass');
new DisplayProduct('bag');

//////////////////SHOW A RANDOM IMAGE//////////////


// Show a random imager
function showARandomProduct(){
  // var threePicArr = [];
  var randomIndex = Math.floor(Math.random() * productArray.length);
  productPic.src= productArray[randomIndex].filepath;
  productPic.alt=productArray[randomIndex].name;
  productPic.title=productArray[randomIndex].name;
  threePicArr.push(this);

  // productArray[randomIndex].timesShown++;
  // threePicArr[0] = [randomIndex];
}
function showARandomProduct2(){
  var randomIndex = Math.floor(Math.random() * productArray.length);
  productPic2.src= productArray[randomIndex].filepath;
  productPic2.alt=productArray[randomIndex].name;
  productPic2.title=productArray[randomIndex].name;
  threePicArr.push(this);
  // productArray[randomIndex1 !== randomIndex].timesShown++;
  // threePicArr[1] = [randomIndex1];
}
function showARandomProduct3(){
  var randomIndex = Math.floor(Math.random() * productArray.length);
  productPic3.src= productArray[randomIndex].filepath;
  productPic3.alt=productArray[randomIndex].name;
  productPic3.title=productArray[randomIndex].name;
  threePicArr.push(this);
  // productArray[randomIndex2 !== randomIndex ||  randomIndex3 !== randomIndex2].timesShown++;
  // threePicArr[2] = [randomIndex2];




}


// var threePicArr[] = showARandomProduct(){
//   for(var = i, i < 3, i++){
//     threePicArr[i];
//   }
// }
// for(var i = 0, i < 3, i++){
//   var threePicArr = [++showARandomProduct()];}}





// Event handler
// function handleGoatClick(event){
//   if(event.target.alt === 'sassy-goat'){
//     alert('BAAAAAAAAAAAAAA I AM SASSY');
//   }
//   showARandomGoat();
// }

// Stuff that runs on page load
// // Event listener
// products.addEventListener('click', handleProductClick);
// // Show the first goat
// console.log(productArray);
function threePicDisplay(){
  showARandomProduct();
  showARandomProduct2();
  showARandomProduct3();
  // var threePicArr = [showARandomProduct(showARandomProduct() !== showARandomProduct2()&& showARandomProduct() !== showARandomProduct3()), showARandomProduct2(showARandomProduct2() !== showARandomProduct3()), showARandomProduct3()];
console.log(threePicArr);


  var display = threePicArr;
}
// threePicArr
// console.log(threePicArr);
console.log(threePicArr);
console.log(productArray);
threePicDisplay();
//////////////this shows one product, and i want to show 3. I;m thinking I should populate an array of three random products.




