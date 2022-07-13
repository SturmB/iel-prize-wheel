/* eslint-disable no-undef */

const t2Percent = 25;
const numWedgesPerTier = 5;

const audio = new Audio("/js/vendor/javascript-winwheel-2.8.0/tick.mp3");

const playSound = () => {
  audio.pause();
  audio.currentTime = 0;

  audio.play();
};

const t2Size = winwheelPercentToDegrees(t2Percent / numWedgesPerTier);
const segmentArray = [];
for (let i = 0; i < numWedgesPerTier; i++) {
  segmentArray.push({
    fillStyle: "#beff5a",
    text: "Tier 1"
  });
  segmentArray.push({
    fillStyle: "#37ff00",
    size: t2Size,
    text: "Tier 2"
  });
}

const theWheel = new Winwheel({
  animation: {
    callbackSound: playSound,
    duration: 5,
    soundTrigger: "pin",
    spins: 4,
    type: "spinToStop",
  },
  numSegments: numWedgesPerTier * 2,
  lineWidth: 3,
  outerRadius: 300,
  pins: {
    fillStyle: "silver",
    number: 40,
    outerRadius: 4,
  },
  rotationAngle: t2Size / 2,
  segments: segmentArray,
  textAlignment: "outer",
  textMargin: 50,
  textOrientation: "vertical",
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
