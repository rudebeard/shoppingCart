
const shop = document.querySelector('#shop');



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
  upgrade(selectedItem.id)
  localStorage.setItem("data",JSON.stringify(basket))
}

let decrement = (id) =>{
  let selectedItem= id;
  let search = basket.find((x)=>x.id===selectedItem.id);

  if(search===undefined)return;
  
  else if(search.item===0) return;
   else {
    search.item--;
  } 
  upgrade(selectedItem.id)
  basket=basket.filter((x)=>x.item !== 0)

  localStorage.setItem("data",JSON.stringify(basket));
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







