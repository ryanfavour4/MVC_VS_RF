// Connect all our patterns to the app
import { model } from "./model.js";
import { Controller } from "./controller.js";

export let controllerConnect;

function connect() {
  controllerConnect = new Controller().initialize(model);
  
}

connect();
