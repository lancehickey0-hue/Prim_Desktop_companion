const state = {
  mode: "neutral",
  energy: 0.6,
  attention: 0.8,
  affection: 0.5
};

export function updateState(event) {
  switch (event) {
    case "mousemove":
      state.attention = Math.min(1, state.attention + 0.05);
      state.energy += 0.02;
      break;

    case "idle":
      state.energy -= 0.01;
      state.attention -= 0.02;
      break;

    case "click":
      state.affection += 0.05;
      state.energy += 0.05;
      break;
  }

  // clamp
  state.energy = Math.max(0, Math.min(1, state.energy));
  state.attention = Math.max(0, Math.min(1, state.attention));
  state.affection = Math.max(0, Math.min(1, state.affection));

  updateMode();
}

function updateMode() {
  if (state.energy < 0.3) state.mode = "sleepy";
  else if (state.attention > 0.8) state.mode = "focused";
  else if (state.affection > 0.7) state.mode = "affectionate";
  else if (state.energy > 0.7) state.mode = "playful";
  else state.mode = "neutral";
}

export function getState() {
  return state;
}
