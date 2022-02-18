import { ShoesController } from "./Controllers/ShoesControllers.js";
import { ValuesController } from "./Controllers/ValuesController.js";

class App {
  shoesController = new ShoesController();

}

window["app"] = new App();
