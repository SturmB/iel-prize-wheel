/* eslint-disable no-undef */

const audio = new Audio("/js/vendor/javascript-winwheel-2.8.0/tick.mp3");

const playSound = () => {
  audio.pause();
  audio.currentTime = 0;

  audio.play();
};

const theWheel = new Winwheel({
  animation: {
    callbackSound: playSound,
    duration: 5,
    soundTrigger: "pin",
    spins: 4,
    type: "spinToStop",
  },
  numSegments: 10,
  lineWidth: 3,
  outerRadius: 300,
  pins: {
    fillStyle: "silver",
    number: 40,
    outerRadius: 4,
  },
  rotationAngle: 9,
  segments: [
    {
      fillStyle: "#beff5a",
      size: winwheelPercentToDegrees(75 / 5),
      text: "Tier 1",
    },
    {
      fillStyle: "#37ff00",
      size: winwheelPercentToDegrees(25 / 5),
      text: "Tier 2",
    },
    {
      fillStyle: "#beff5a",
      size: winwheelPercentToDegrees(75 / 5),
      text: "Tier 1",
    },
    {
      fillStyle: "#37ff00",
      size: winwheelPercentToDegrees(25 / 5),
      text: "Tier 2",
    },
    {
      fillStyle: "#beff5a",
      size: winwheelPercentToDegrees(75 / 5),
      text: "Tier 1",
    },
    {
      fillStyle: "#37ff00",
      size: winwheelPercentToDegrees(25 / 5),
      text: "Tier 2",
    },
    {
      fillStyle: "#beff5a",
      size: winwheelPercentToDegrees(75 / 5),
      text: "Tier 1",
    },
    {
      fillStyle: "#37ff00",
      size: winwheelPercentToDegrees(25 / 5),
      text: "Tier 2",
    },
    {
      fillStyle: "#beff5a",
      size: winwheelPercentToDegrees(75 / 5),
      text: "Tier 1",
    },
    {
      fillStyle: "#37ff00",
      size: winwheelPercentToDegrees(25 / 5),
      text: "Tier 2",
    },
  ],
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
