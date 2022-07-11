/* eslint-disable no-undef */

const theWheel = new Winwheel({
  animation: {
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
