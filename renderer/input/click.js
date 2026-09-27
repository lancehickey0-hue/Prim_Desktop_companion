document.addEventListener("click", () => {
  if (!window.model) return;

  const core = window.model.internalModel.coreModel;

  core.setParameterValueById("ParamAngleX", 10);
  core.setParameterValueById("ParamMouthForm", 0.4);
  core.setParameterValueById("ParamEyeOpen", 1.2);

  setTimeout(() => {
    core.setParameterValueById("ParamAngleX", 0);
    core.setParameterValueById("ParamMouthForm", 0.1);
  }, 300);
});
