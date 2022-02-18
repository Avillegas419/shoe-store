import { ProxyState } from "../AppState.js";
import { Shoe } from "../Models/Shoe.js";
import { shoeservices } from "../Services/ShoeServices.js";

function _draw() {
  let template = ""
  let shoes = ProxyState.shoes
  shoes.forEach(s => template += `
  <div class="col-4 p-4">
  <div class="card" style="width: 18rem;">
    <img
      src="${s.imgUrl}"
      class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${s.brand}</h5>
      <p class="card-text">${s.model}</p>
      <p class="card-text">${s.cost}</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</div>
  
  `)
  document.getElementById("shoes").innerHTML = template
}





export class ShoesController {
  constructor() {
    ProxyState.on("shoes", _draw)
  }

  createShoe(event) {
    event.preventDefault()
    let form = event.target
    let newshoe = {
      brand: form.brand.value,
      model: form.model.value,
      cost: form.cost.value,
      imgUrl: form.imgUrl.value
    }
    console.log(newshoe);
    shoeservices.createShoe(newshoe)
  }
}