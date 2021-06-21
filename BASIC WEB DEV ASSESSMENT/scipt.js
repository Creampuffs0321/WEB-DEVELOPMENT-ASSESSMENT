let addButton=document.getElementsByClassName("button");
console.log(addButton)
for (let i = 0; i < addButton.length; i++) {
let button =addButton[i]
button.addEventListener('click', addToCartButton)
}
function addToCartButton(event){
  let button=event.target
  let items=button.parentElement
  let imagesrc=items.getElementsByClassName('phone-image')[0].src
  console.log(imagesrc);
  alert ("added to cart");
}



  