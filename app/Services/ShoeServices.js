import { ProxyState } from "../AppState.js";
import { Shoe } from "../Models/Shoe.js";

class ShoeServices {
  createShoe(newshoe) {
    console.log(newshoe, "this is my new shoe from service");
    let realShoe = new Shoe(newshoe)
    console.log(realShoe, "this is working");

    ProxyState.shoes = [realShoe, ...ProxyState.shoes]
  }
}






export const shoeservices = new ShoeServices()