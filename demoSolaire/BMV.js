let pourcentageCharge = 0;
const etatcharge = document.getElementById('etatcharge');
const elem = document.getElementsByClassName("myProgress")[0];
//const tailletabBMV = Object.keys(tabBMV).length;
function recupererBMV() {

  let I = Math.floor(Math.random() * 161)-80;
  let PPV = Math.floor(Math.random() * 1001);
  let SOC = Math.floor(Math.random() * 101);
  // Faites quelque chose avec les données JSON
  gaugeCou.value = I
  gaugePui.value = PPV
  pourcentageCharge = SOC
  etatcharge.innerHTML = pourcentageCharge;

  elem.style.width = pourcentageCharge + "%";

  if (pourcentageCharge <= 60) {
    // rouge
    elem.style.backgroundColor = "#FF0033";
  } else if ((pourcentageCharge > 60) && (pourcentageCharge <= 70)) {
    // orange foncé
    elem.style.backgroundColor = "#FF9966";
  } else if ((pourcentageCharge > 70) && (pourcentageCharge <= 80)) {
    // orange moyen
    elem.style.backgroundColor = "#FFB74D";
  } else if ((pourcentageCharge > 80) && (pourcentageCharge <= 90)) {
    // orange clair
    elem.style.backgroundColor = "#FAD7A0";
  } else if ((pourcentageCharge > 90) && (pourcentageCharge <= 100)) {
    // vert
    elem.style.backgroundColor = "#58D68D";
  }

}