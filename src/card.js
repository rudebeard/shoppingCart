let basket= JSON.parse(localStorage.getItem("data")) || [];

let calc = ()=>{
  let cartIcon = document.getElementById("cartAmount");
  cartIcon.innerHTML=basket.map((x)=>x.item).reduce((acc,it)=>acc+it,0)
  localStorage.setItem("data",JSON.stringify(basket))
}

calc();
