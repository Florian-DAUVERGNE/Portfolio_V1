var mois = new Date().getMonth();

function CreerGraph(balise, label, data) {
  const ctx = document.getElementById(balise).children[0].getContext("2d");
  const myChart = new Chart(ctx, {
    type: "bar",
    data: {
      labels: [
        "Janvier",
        "Février",
        "Mars",
        "Avril",
        "Mai",
        "Juin",
        "Juillet",
        "Août",
        "Septembre",
        "Octobre",
        "Novembre",
        "Décembre",
      ],
      datasets: [
        {
          label: label,
          data: data,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(200, 69, 164, 0.2)",
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(255, 206, 86, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(153, 102, 255, 0.2)",
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)",
            "rgba(200, 69, 164, 1)",
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
          ],
          borderWidth: 1,
        },
      ],
    },
    options: {
      maintainAspectRatio: false,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
}

function RecupererHeure() {
  var Horaire = new Date();
  var heure = Horaire.getHours();
  var minute = Horaire.getMinutes();
  var seconde = Horaire.getSeconds();
  if (minute < 10) {
    minute = "0" + minute;
  }

  if (seconde < 10) {
    seconde = "0" + seconde;
  }

  $("main p").text(`${heure}:${minute}:${seconde}`);
}

function RecupererDate() {
  var date = new Date();
  var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  };
  $("nav").text(date.toLocaleDateString("fr-FR", options));
}
function FaireApparaitre(balise, temps) {
  $(balise).hide();
  $(balise).fadeIn(temps);
}

function RecupererTemperature() {
  let nombreAleatoire = Math.floor(Math.random() * 11) + 20;
  $("#temperature").text(`Température actuelle : ${nombreAleatoire}°C`);
}

function RecupererPuissanceinstantanee() {
  let nombreAleatoire = Math.floor(Math.random() * 11) + 200;
  $("#PI").text(`Puissance Instantanée :${nombreAleatoire}`);
}

var consoEau = [30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 80, 85, 0];

function RecupererConsoEau() {
  $("#content1").empty();
  $("#content1").append('<canvas width="250" height="250">');
  CreerGraph("content1", "Consommation d'eau en litres", consoEau);
  $("#content3").empty();
  $("#content3").append('<canvas width="250" height="250">');
  var canvas = document.getElementById("content3").children[0];
  var ctx = canvas.getContext("2d");
  ctx.font = "29px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "grey";
  ctx.fillText(
    (consoEau[mois] * 0.00489).toFixed(2) + " € d'eau",
    canvas.width / 2,
    canvas.height / 2
  );
}

var consoElec = [90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40, 35, 0];
function RecupererConsoElec() {
  $("#content2").empty();
  $("#content2").append('<canvas width="250" height="250">');
  CreerGraph("content2", "Consommation d'électricité en KiloWatt", consoElec);
  $("#content4").empty();
  $("#content4").append('<canvas width="250" height="250">');
  var canvas = document.getElementById("content4").children[0];
  var ctx = canvas.getContext("2d");
  ctx.font = "29px Arial";
  ctx.textAlign = "center";
  ctx.fillStyle = "grey";
  ctx.fillText(
    (consoElec[mois] * 0.198).toFixed(2) + " € d'électricité",
    canvas.width / 2,
    canvas.height / 2
  );
}
let etat = [0,0,0,0,0,0,0,0]
function ActiverRelai(Bouton) {
  let image = Bouton.parentNode.nextElementSibling;
  let IDSwitch = Bouton.parentNode.parentNode.id;
	

  switch (IDSwitch) {
    case "switch1":
      NumRelai = 1;
      break;
    case "switch2":
      NumRelai = 2;
      break;
    case "switch3":
      NumRelai = 3;
      break;
    case "switch4":
      NumRelai = 4;
      break;
    case "switch5":
      NumRelai = 5;
      break;
    case "switch6":
      NumRelai = 6;
      break;
    case "switch7":
      NumRelai = 7;
      break;
    case "switch8":
      NumRelai = 8;
      break;
  }

  if (IDSwitch == "switch1") {
		Bouton.checked = true;
		$(image).attr("src", "LedAllume.png");

    setTimeout(() => {
      Bouton.checked = false;
      $(image).attr("src", "LedEteinte.png");
    }, 3000);
  } else {
		etat[NumRelai]= !etat[NumRelai]
		if(etat[NumRelai] == 0){
			
      Bouton.checked = false;
      $(image).attr("src", "LedEteinte.png");
		}else{
			Bouton.checked = true;
			$(image).attr("src", "LedAllume.png");
		}
  }
}

function JourNuit(data) {

  let image = $("#JourNuit").children("img")[0];
  if (data == 1) {
    $(image).attr("src", "moon.png");
    $($("div input")[2]).attr("disabled", false);
    $($("div img")[2]).attr("src", "LedEteinte.png");
  } else {
    $(image).attr("src", "sun.png");
    $($("div input")[2]).attr("disabled", true);
    $($("div img")[2]).attr("src", "LedHS.png");
  }
}

$(document).ready(function () {
	var lumiereSvg = document.getElementById('JourNuit');
	let nuit = 0
	lumiereSvg.addEventListener('click', function() {
		nuit = !nuit
		JourNuit(nuit);
	});
  RecupererDate();
  RecupererHeure();
  RecupererTemperature();
  RecupererConsoEau();
  RecupererConsoElec();
  
  RecupererPuissanceinstantanee();

  setInterval(RecupererHeure, 1000);

  FaireApparaitre("#sidebar", 1000);
  FaireApparaitre("nav", 1000);
  FaireApparaitre("main", 1200);
  FaireApparaitre("#content1", 1400);
  FaireApparaitre("#content2", 1600);
  FaireApparaitre("#content3", 1800);
  FaireApparaitre("#content4", 2000);

  $("input").change(function () {
    ActiverRelai(this);
  });
});
