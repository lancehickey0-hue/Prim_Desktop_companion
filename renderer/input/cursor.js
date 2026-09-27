document.addEventListener("mousemove", (e) => {
  if (!window.model) return;

  const x = (e.clientX / window.innerWidth) * 2 - 1;
  const y = (e.clientY / window.innerHeight) * 2 - 1;

  const core = window.model.internalModel.coreModel;

  core.setParameterValueById("ParamAngleX", x * 18);
  core.setParameterValueById("ParamAngleY", -y * 10);

  core.setParameterValueById("ParamEyeBallX", x * 0.6);
  core.setParameterValueById("ParamEyeBallY", -y * 0.4);
});
