import { getState } from "./state.js";
import { showBubble } from "../ui/dialogue.js";

function applyPersonality() {
  const state = getState();
  const core = window.model.internalModel.coreModel;

  if (state.mode === "sleepy") {
    core.setParameterValueById("ParamEyeOpen", 0.4);
    core.setParameterValueById("ParamAngleY", -5);
  }

  if (state.mode === "playful") {
    core.setParameterValueById("ParamMouthForm", 0.4);
    core.setParameterValueById("ParamAngleZ", 5);
  }

  if (state.mode === "focused") {
    core.setParameterValueById("ParamEyeOpen", 1.1);
  }

  if (state.mode === "affectionate") {
    core.setParameterValueById("ParamCheek", 0.25);
    core.setParameterValueById("ParamMouthForm", 0.3);
  }
}

setInterval(applyPersonality, 100);
