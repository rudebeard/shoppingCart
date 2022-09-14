
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


let basket= [];

let generateShop = ()=>{
  return (shop.innerHTML= shopItemsData.map((x)=>{
    let {id,name,price,desc,img} = x;
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
          <div id = "${id}" class="quantity">0</div>
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
  let sera = basket.find((x)=>x.id===selectedItem.id);
  if(sera===undefined){
    basket.push({
      id:selectedItem.id,
      item:1,
    });
  }else {
    sera.item++;
  }
  upgrade()
}

let decrement = (id) =>{
  let selectedItem= id;
  let sera = basket.find((x)=>x.id===selectedItem.id);

  if(sera.item===0) return;
   else {
    sera.item--;
  } 
  upgrade()
}

let upgrade = ()=>{
  console.log('upgrade function is working')
}











