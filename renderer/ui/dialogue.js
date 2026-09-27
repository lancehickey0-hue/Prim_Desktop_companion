const lines = {
  playful: [
    "You’re clicking a lot… nervous? 😏",
    "Careful… I’m watching you."
  ],
  sleepy: [
    "Mmm… it’s kinda quiet…",
    "You still there…?"
  ],
  affectionate: [
    "You’ve been here a while… I like that.",
    "Stay with me a bit longer…"
  ]
};

export function speak(state) {
  const moodLines = lines[state.mode];
  if (!moodLines) return;

  const text = moodLines[Math.floor(Math.random() * moodLines.length)];

  showBubble(text);
};

export function showBubble(text) {
  const el = document.getElementById("bubble");
  if (!el) return;

  el.innerText = text;
  el.style.opacity = 1;

  setTimeout(() => {
    el.style.opacity = 0;
  }, 3000);
}
