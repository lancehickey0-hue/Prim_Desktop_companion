import { getState } from "../input/state.js";
import { showBubble } from "../ui/dialogue.js";

let lastSpeak = 0;

// 🔥 THIS is the "trigger occasionally" function
function maybeSpeak(state) {
  const now = Date.now();

  // cooldown (8 seconds minimum between lines)
  if (now - lastSpeak < 8000) return;

  // small random chance to speak
  if (Math.random() < 0.02) {
    lastSpeak = now;

    const lines = {
      playful: ["You keep coming back… 😏", "I see what you're doing."],
      sleepy: ["Mmm… it’s quiet…", "Don’t leave me too long…"],
      affectionate: ["You’ve been here a while… I like that."],
      neutral: ["Hey…", "Still with me?"]
    };

    const pool = lines[state.mode] || lines.neutral;
    const text = pool[Math.floor(Math.random() * pool.length)];

    showBubble(text);
  }
}

// 🔥 THIS is your main personality loop
function applyPersonality() {
  if (!window.model) return;

  const state = getState();
  const core = window.model.internalModel.coreModel;

  // ---- behavior based on mood ----
  switch (state.mode) {
    case "sleepy":
      core.setParameterValueById("ParamEyeOpen", 0.4);
      core.setParameterValueById("ParamAngleY", -5);
      break;

    case "playful":
      core.setParameterValueById("ParamMouthForm", 0.4);
      core.setParameterValueById("ParamAngleZ", 5);
      break;

    case "focused":
      core.setParameterValueById("ParamEyeOpen", 1.1);
      break;

    case "affectionate":
      core.setParameterValueById("ParamCheek", 0.25);
      core.setParameterValueById("ParamMouthForm", 0.3);
      break;

    default:
      core.setParameterValueById("ParamMouthForm", 0.1);
      break;
  }

  // 🔥 THIS is where "inside your loop" goes
  maybeSpeak(state);
}

// 🔥 THIS runs the loop continuously
setInterval(applyPersonality, 100);
