//Recovery of DOM elements

let calcBtn =  document.getElementById("calcBtn");
let resetBtn = document.getElementById("resetBtn");
let graphContainer = document.getElementById("graphContainer");

//Break-even and graph calculation function
function breakEventPoint() {

    //Recovery of DOM elements
    let caht =  document.getElementById("caht");
    let margeRate =  document.getElementById("margeRate");
    let cfAmount =  document.getElementById("cfAmount");
    let benefitView = document.getElementById("benefitView");
    let srView =  document.getElementById("srView");
    let variableCostView =  document.getElementById("variableCostView");

    /*ecovery of the graph in the DOM. If the graph exists, it will be deleted. 
    *I created this condition because with ChartJs you can't recreate a new chart, you have to delete it.
    */
    let element = document.querySelector(".graphSr");
    if(element !== null){
        element.remove(); 
    }


    // calculation of numerical data 
    mscv = caht.value*(margeRate.value/100);
    benefit = mscv - cfAmount.value;
    sr = cfAmount.value/(margeRate.value/100);

    variableCostView.value = caht.value - mscv;
    benefitView.value = benefit;
    srView.value = sr;

    // Graphical Data

    var canvasContainer = document.createElement('canvas');
    canvasContainer.className = 'graphSr'
    graphContainer.appendChild(canvasContainer);

    let canvas = document.querySelector(".graphSr");
    let context = canvas.getContext('2d');
    graphContainer.classList.add('border');

    var data = {
        labels : ['0', caht.value*0.3333, caht.value*0.6666, caht.value, caht.value*1.3333, caht.value*1.6666],
        datasets : [{
            label : 'Marge sur Coût Variable',
            backgroundColor : 'green',
            borderColor : 'green',
            borderWidth : 5,
            data : ['0',mscv*0.3333, mscv*0.6666, mscv, mscv*1.3333, mscv*1.6666]
        },
        {
            label : 'Coûts Fixes',
            backgroundColor : 'red',
            borderColor : 'red',
            data : [ cfAmount.value, cfAmount.value, cfAmount.value, cfAmount.value, cfAmount.value, cfAmount.value]
        }
    ]
    }
    
    var options = {
        responsive : true,
    };
    
    var config = {
        type:'line',
        data : data,
        options : options,
    }

    graphSr = new Chart(context, config);
    
}

// Creation of the function click on the Calculate button!
calcBtn.addEventListener('click', function(){
    if (caht.value > 0) {
        breakEventPoint();
    } else {
        srView.value = "Vous n'avez pas saisie de CA HT";
        alert("Vous n'avez pas saisi de Chiffre d'Affaires !")
    }
    
})

// Creation function click for delete Data
resetBtn.addEventListener('click', function(){
    caht.value = "";
    margeRate.value = "";
    cfAmount.value = "";
    variableCostView.value = "";
    benefitView.value = "";
    srView.value = "";
    let element = document.querySelector(".graphSr");
    element.remove();
    graphContainer.classList.remove('border');
})

