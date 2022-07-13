/* eslint-disable no-undef */

// Define gradients (optional)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasCenter = canvas.width / 2;

const level1Gradient = ctx.createRadialGradient(
  canvasCenter,
  canvasCenter,
  50,
  canvasCenter,
  canvasCenter,
  250
);
level1Gradient.addColorStop(0, "#00d4ff");
level1Gradient.addColorStop(1, "#007894");
const level2Gradient = ctx.createRadialGradient(
  canvasCenter,
  canvasCenter,
  50,
  canvasCenter,
  canvasCenter,
  250
);
level2Gradient.addColorStop(0, "#d000ff");
level2Gradient.addColorStop(1, "#8f00af");

// Define wedges and levels
const numWedgesPerLevel = 5;
const strokeColor = "#4c005d";
const levels = [
  {
    bgColor: level1Gradient,
    color: "#007894",
    percent: 75,
    textColor: "#FFFFFF",
  },
  {
    bgColor: level2Gradient,
    color: "#8f00af",
    percent: 25,
    textColor: "#FFFFFF",
  },
];

const titleCase = (str) => {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => {
      return word.replace(word[0], word[0].toUpperCase());
    })
    .join(" ");
};

const audio = new Audio("/js/vendor/javascript-winwheel-2.8.0/tick.mp3");
const spinButton = document.getElementById("spinButton");
const historyElement = document.getElementById("history");
const resultsElement = document.getElementById("spinResults");

const playSound = () => {
  audio.pause();
  audio.currentTime = 0;
  audio.play();
};

const alertPrize = () => {
  const winningSegment = theWheel.getIndicatedSegment();
  const winningText = titleCase(winningSegment.text.replaceAll("\n", " "));
  const winningColor = levels[parseInt(winningText.slice(-1))-1].color;

  historyElement.classList.remove("hidden");
  const paragraph = document.createElement("p");
  const text = document.createTextNode(winningText);
  paragraph.classList.add(
    "border",
    "border-gray-400",
    "my-2",
    "py-1",
    "rounded",
    "text-lg",
    "text-white"
  );
  paragraph.style.backgroundColor = winningColor;
  paragraph.append(text);
  resultsElement.prepend(paragraph);
};

let highestLevelSize = 0;
const segmentArray = [];
const segments = levels.map((level, index) => {
  return {
    fillStyle: level.bgColor,
    ...(index !== 0 && {
      size: (highestLevelSize = winwheelPercentToDegrees(
        level.percent / numWedgesPerLevel
      )),
    }),
    strokeStyle: strokeColor,
    text: `PRIZE\nLEVEL\n${index + 1}`,
    textFillStyle: level.textColor,
    textFontFamily: "'Nova Mono'",
  };
});
for (let i = 0; i < numWedgesPerLevel; i++) {
  segmentArray.push(...segments);
}

const theWheel = new Winwheel({
  animation: {
    callbackFinished: alertPrize,
    callbackSound: playSound,
    duration: 5,
    soundTrigger: "pin",
    spins: 4,
    type: "spinToStop",
  },
  innerRadius: 100,
  lineWidth: 3,
  numSegments: numWedgesPerLevel * levels.length,
  outerRadius: 300,
  pins: {
    fillStyle: "silver",
    number: 40,
    outerRadius: 4,
  },
  rotationAngle: highestLevelSize / 2,
  segments: segmentArray,
  textAlignment: "outer",
  textMargin: 50,
  textOrientation: "curved",
});

// eslint-disable-next-line no-unused-vars
const spinTheWheel = () => {
  theWheel.rotationAngle = 9;
  theWheel.draw();
  theWheel.startAnimation();
  spinButton.disabled = true;
  setTimeout(() => {
    spinButton.disabled = false;
  }, 5200);
};
