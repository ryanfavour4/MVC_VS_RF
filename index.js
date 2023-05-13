import { Controller } from "./controller.js";
import { Controller2 } from "./controller2.js";
import { Model } from "./model.js";

const countService = () => {
  const model = new Model();
  new Controller().initialize(model);
  new Controller2().initialize(model);
  return true;
};

countService();
