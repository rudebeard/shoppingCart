import { shopItemsData } from "./list.js"; 

console.log(shopItemsData)
const shop = document.querySelector('#shop');





let generateShop = ()=>{
  return (shop.innerHTML= shopItemsData.map((x)=>{
    let {id,name,price,desc,img} = x;
    console.log(x)
    return `
    <div id="${id}"  class="item">
    <img width="250" src=${img} alt="">
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2> $ ${price}</h2>
        <div class="buttons">
          <i class="bi bi-plus"></i>
          <div id = "${id}" class="quantity">0</div>
          <i class="bi bi-dash"></i>
        </div>
      </div>
    </div>
  </div>`
  }).join(""));
}
generateShop();