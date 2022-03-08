let calcBtn =  document.getElementById("calcBtn");
let resetBtn = document.getElementById("resetBtn");

function breakEventPoint() {

    let caht =  document.getElementById("caht");
    let margeRate =  document.getElementById("margeRate");
    let cfAmount =  document.getElementById("cfAmount");
    let benefitView = document.getElementById("benefitView");
    let srView =  document.getElementById("srView");
    let variableCostView =  document.getElementById("variableCostView");


    
    mscv = caht.value*(margeRate.value/100);
    benefit = mscv - cfAmount.value;
    sr = cfAmount.value/(margeRate.value/100);

    variableCostView.value = caht.value - mscv;
    benefitView.value = benefit;
    srView.value = sr;

}

calcBtn.addEventListener('click', function(){
    if (caht.value > 0) {
        breakEventPoint();
    } else {
        srView.value = "Vous n'avez pas saisie de CA HT";
        alert("Vous n'avez pas saisi de Chiffre d'Affaires !")
    }
    
})

resetBtn.addEventListener('click', function(){
    caht.value = "";
    margeRate.value = "";
    cfAmount.value = "";
    variableCostView.value = "";
    benefitView.value = "";
    srView.value = "";
})