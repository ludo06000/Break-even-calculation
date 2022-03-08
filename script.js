let caht =  document.getElementById("caht");
let margeRate =  document.getElementById("margeRate");
let cfAmount =  document.getElementById("cfAmount");
let calcBtn =  document.getElementById("calcBtn");
let benefitView = document.getElementById("benefitView");

//let mscv = "";
//let benefit = "";

function breakEventPoint() {
    mscv = caht.value*(margeRate.value/100);
    benefit = mscv - cfAmount.value;
    sr = cfAmount.value/(margeRate.value/100);

    benefitView = benefit;



    console.log(mscv);
    console.log("bénéfice =", benefit)
    console.log("Seuil de rentabilité = ", sr  );
}

calcBtn.addEventListener('click', function(){
    breakEventPoint();
})