
const shop = document.querySelector('#shop');

const shopItemsData = [
  {
  id:'aga',
  name:'casual shirt',
  price:45,
  desc:"Lorem ipsum dolor sit amet.",
  img:"./images/img-1.jpg"
},

{ id:'sen',
name:'Official',
price:100,
desc:"Lorem ipsum dolor sit amet.",
img:"./images/img-2.jpg"},

{ id:'nereden',
name:'Daily shirt',
price:85,
desc:"Lorem ipsum dolor sit amet.",
img:"./images/img-3.jpg"},

{
  id:'ciktin',
  name:'Mans suit',
  price:300,
  desc:"Lorem ipsum dolor sit amet.",
  img:"./images/img-4.jpg"
}
];


let basket= JSON.parse(localStorage.getItem("data")) || [];

let generateShop = ()=>{
  return (shop.innerHTML= shopItemsData.map((x)=>{
    let {id,name,price,desc,img} = x;
    let search = basket.find((x)=>x.id===id) || [];
   
    return `
    <div id="${id}"  class="item">
    <img width="250" src=${img} alt="">
    <div class="details">
      <h3>${name}</h3>
      <p>${desc}</p>
      <div class="price-quantity">
        <h2> $ ${price}</h2>
        <div class="buttons">
          <i onclick="increment(${id})" class="bi bi-plus"></i>
          <div id = "${id}" class="quantity">${search.item===undefined?0:search.item}</div>
          <i onclick="decrement(${id})" class="bi bi-dash"></i>
        </div>
      </div>
    </div>
  </div>`
  }).join(""));
}
generateShop();

let increment = (id)=>{
  let selectedItem= id;
  let search = basket.find((x)=>x.id===selectedItem.id);
  if(search===undefined){
    basket.push({
      id:selectedItem.id,
      item:1,
    });
  }else {
    search.item++;
  }
  localStorage.setItem("data",JSON.stringify(basket))
  console.log(basket)
  upgrade(selectedItem.id)
}

let decrement = (id) =>{
  let selectedItem= id;
  let search = basket.find((x)=>x.id===selectedItem.id);

  if(search.item===0) return;
   else {
    search.item--;
  } 
  localStorage.setItem("data",JSON.stringify(basket))
  upgrade(selectedItem.id)
}

let upgrade = (id)=>{
  let search = basket.find((x)=>x.id===id)
  console.log(search.item)
  document.getElementById(id).innerHTML = search.item;
  calc();
}



let calc = ()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML=basket.map((x)=>x.item).reduce((acc,it)=>acc+it,0)
  localStorage.setItem("data",JSON.stringify(basket))
}

calc();







