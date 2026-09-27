let model;

async function loadModel() {
  const PIXI = require("pixi.js");
  const live2d = require("pixi-live2d-display");

  const app = new PIXI.Application({
    view: document.getElementById("live2d"),
    transparent: true,
    autoStart: true
  });

  model = await live2d.Live2DModel.from("../assets/model/model3.json");

  model.anchor.set(0.5, 0.5);
  model.scale.set(0.25);

  app.stage.addChild(model);

  window.model = model;
}

loadModel();
