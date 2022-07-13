/* eslint-disable no-undef */

// Define gradients (optional)
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
const canvasHCenter = canvas.width / 2;
const canvasVCenter = canvas.height / 2;

const level1Gradient = ctx.createRadialGradient(
  canvasHCenter,
  canvasVCenter,
  50,
  canvasHCenter,
  canvasVCenter,
  250
);
level1Gradient.addColorStop(0, "#00d4ff");
level1Gradient.addColorStop(1, "#007894");
const level2Gradient = ctx.createRadialGradient(
  canvasHCenter,
  canvasVCenter,
  50,
  canvasHCenter,
  canvasVCenter,
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
    percent: 75,
    textColor: "#FFFFFF",
  },
  {
    bgColor: level2Gradient,
    percent: 25,
    textColor: "#FFFFFF",
  },
];

const audio = new Audio("/js/vendor/javascript-winwheel-2.8.0/tick.mp3");

const playSound = () => {
  audio.pause();
  audio.currentTime = 0;

  audio.play();
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
    text: `LEVEL\n${index + 1}`,
    textFillStyle: level.textColor,
  };
});
for (let i = 0; i < numWedgesPerLevel; i++) {
  segmentArray.push(...segments);
}

const theWheel = new Winwheel({
  animation: {
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
  const spinButton = document.getElementById("spinButton");
  theWheel.rotationAngle = 9;
  theWheel.draw();
  theWheel.startAnimation();
  spinButton.disabled = true;
  setTimeout(() => {
    spinButton.disabled = false;
  }, 5200);
};
