export function setParam(id, value, blend = 0.6) {
  if (!window.model) return;

  const core = window.model.internalModel.coreModel;
  const current = core.getParameterValueById(id);

  const next = current + (value - current) * blend;

  core.setParameterValueById(id, next);
}
