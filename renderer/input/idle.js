let lastMove = Date.now();

document.addEventListener("mousemove", () => {
  lastMove = Date.now();
});

setInterval(() => {
  if (!window.model) return;

  const core = window.model.internalModel.coreModel;
  const idle = Date.now() - lastMove;

  const breath = 0.4 + Math.sin(Date.now() / 800) * 0.2;
  core.setParameterValueById("ParamBreath", breath);

  if (idle > 20000) {
    core.setParameterValueById("ParamEyeOpen", 0.5);
    core.setParameterValueById("ParamAngleY", -5);
  }

  if (idle > 60000) {
    core.setParameterValueById("ParamEyeOpen", 0.3);
  }
}, 100);
