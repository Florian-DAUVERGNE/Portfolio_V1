
// Create Puissance instantanée Gauge
var gaugePui = new RadialGauge({
  renderTo: 'gauge-Puissance',
  width: 180,
  height: 180,
  units: "Puissance (W)",
  minValue: 0,
  maxValue: 1000,
  //morceau cadre au dessus de l'affichage
  colorValueBoxRect: "#CC66FF",
  //cadre affichage numérique
  colorValueBoxRectEnd: "#CC66FF",
  //fond affichage numérique
  colorValueBoxBackground: "#F3E5F5",
  //nb de chiffres avant la virgule
  valueInt: 2,
  //grandes graduations
  majorTicks: [
    "0",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "1000"
  ],
  //petites graduations
  minorTicks: 4,
  //bordure du compte tours
  strokeTicks: true,

  highlights: [
    { from: 0, to: 100, color: '#FF0033' },
    { from: 100, to: 200, color: '#FF0033' },
    { from: 200, to: 300, color: '#FF9966' },
    { from: 300, to: 400, color: '#FF9966' },
    { from: 400, to: 500, color: '#FFB74D' },
    { from: 500, to: 600, color: '#FFB74D' },
    { from: 600, to: 700, color: '#FAD7A0' },
    { from: 700, to: 800, color: '#FAD7A0' },
    { from: 800, to: 900, color: '#58D68D' },
    { from: 900, to: 1000, color: '#58D68D' }
  ],


  //couleur du cadran
  colorPlate: "#FFFFCC ",
  //bordure compte tours
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  /*couleur aiguille*/
  colorNeedle: "#3366FF",
  colorNeedleEnd: "#3366FF",
  //épaisseur aiguille
  needleWidth: 3,
  //diamètre du point
  needleCircleSize: 3,
  //couleur du point milieu
  colorNeedleCircleOuter: "#3366FF",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();

// Create Courant Gauge
var gaugeCou = new RadialGauge({
  renderTo: 'gauge-Courant',
  width: 180,
  height: 180,
  units: "Courant (A)",
  minValue: -80,
  maxValue: 80,
  //morceau cadre au dessus de l'affichage
  colorValueBoxRect: "#CC66FF",
  //cadre affichage numérique
  colorValueBoxRectEnd: "#CC66FF",
  //fond affichage numérique
  colorValueBoxBackground: "#F3E5F5",
  //nb de chiffres avant la virgule
  valueInt: 2,
  //grandes graduations
  majorTicks: [
    "-80",
    "-60",
    "-40",
    "-20",
    "0",
    "20",
    "40",
    "60",
    "80",

  ],
  //petites graduations
  minorTicks: 2,
  //bordure du compte tours
  strokeTicks: true,

  highlights: [
    { from: -80, to: -60, color: '#FF0033' },
    { from: -60, to: -40, color: '#FF9966' },
    { from: -40, to: -20, color: '#F8C471' },
    { from: -40, to: -20, color: '#FAD7A0' },
    { from: -20, to: 0, color: '#58D68D' },
    { from: 0, to: 10, color: '#FF9966' },
    { from: 10, to: 20, color: '#FAD7A0' },
    { from: 20, to: 30, color: '#58D68D' },
    { from: 30, to: 40, color: '#FF0033' },
    { from: 40, to: 60, color: '#FF0033' },
    { from: 60, to: 80, color: '#FF0033' },
  ],


  //couleur du cadran
  colorPlate: "#FFFFCC ",
  //bordure compte tours
  borderShadowWidth: 0,
  borders: false,
  needleType: "arrow",
  /*couleur aiguille*/
  colorNeedle: "#3366FF",
  colorNeedleEnd: "#3366FF",
  //épaisseur aiguille
  needleWidth: 3,
  //diamètre du point
  needleCircleSize: 3,
  //couleur du point milieu
  colorNeedleCircleOuter: "#3366FF",
  needleCircleOuter: true,
  needleCircleInner: false,
  animationDuration: 1500,
  animationRule: "linear"
}).draw();


window.onload = () => { recupererBMV() }

setInterval(recupererBMV, 2000);		 
