const moreBtn = document.querySelector("#more");
const lessBtn = document.querySelector("#less");
const moreOptions = document.querySelector("#moreOptions");
const calcBtns = document.querySelectorAll(".calcBtn");
const converterBtns = document.querySelectorAll(".conBtn")
const converter = document.querySelector("#converter");
const calcDisplay = document.querySelector(".display");
const calcKeyboard = document.querySelector("#calculator-keyboard");
const converterContainer = document.querySelector(".converter-container");
const calculator = document.querySelector("#calculator");
const calcInput = document.querySelector("#input");
const backSpace = document.querySelector("#backspace");
const calcClear = document.querySelector("#calcClear");
const calcEqual = document.querySelector("#calcEqual");
const calcOutput = document.querySelector("#output");
const converterLengthBtn = document.querySelector("#length");
const lengthDisplay = document.querySelector(".length-display")
const converterKeyboard = document.querySelector("#converter-keyboard");


//dropdown buttons ---------------------------------------

moreBtn.addEventListener("click", function () {
    moreBtn.style.display = "none";
    lessBtn.style.display = "block";
    moreOptions.setAttribute("style", "display: flex");
    converterContainer.style.height = "526px"
    for (let allBtns of calcBtns) {
        allBtns.style.margin = "-1.6px 10px";
    }
    for (let allBtnsCon of converterBtns) {
        allBtnsCon.style.margin = "0.5px 10px";
    }
});

lessBtn.addEventListener("click", function () {
    moreBtn.style.display = "block";
    lessBtn.style.display = "none";
    moreOptions.style.display = "none";
    converterContainer.style.height = "596px"
    for (let allBtns of calcBtns) {
        allBtns.style.margin = "10px 10px";
    }
    for (let allBtnsCon of converterBtns) {
        allBtnsCon.style.margin = "9.2px 10px";
    }
})

//dropdown buttons ---------------------------------------

//calculator button ----------------------------------------

calculator.addEventListener("click", function () {
    calcKeyboard.style.display = "block";
    calcDisplay.style.display = "block";
    moreOptions.style.display = "none";
    lengthDisplay.style.display = "none";
    converterContainer.style.display = "none";
    converterKeyboard.style.display = "none";
    calculator.setAttribute("style", "color: rgb(0, 199, 136); border-color: rgb(0, 199, 136)");
    converter.setAttribute("style", "color: white; border-color: transparent");
    moreBtn.style.display = "block";
    lessBtn.style.display = "none";
    for (let allBtns of calcBtns) {
        allBtns.style.margin = "10px 10px";
    }
})
//calculator button ----------------------------------------

//calculator keyboard ----------------------------------


for (let calcNum of calcBtns) {
    calcNum.addEventListener('mousedown', function () {
        calcNum.setAttribute("style", "background-color: rgb(193, 255, 235); transition: all 300ms");
    })
    calcNum.addEventListener('mouseup', function () {
        calcNum.setAttribute("style", "background:transparent); transition: all 300ms");
    })
    calcNum.addEventListener("click", function () {

        calcInput.textContent += calcNum.value;
        // if(calcInput.textContent.includes("*") ||
        //    calcInput.textContent.includes("/") ||
        //    calcInput.textContent.includes("+") ||
        //    calcInput.textContent.includes("-")){
        //     calcOutput.textContent = eval(calcInput.textContent);
        //    }

        if (calcInput.textContent.length === 1 && (calcInput.textContent.substring(0, calcInput.textContent.length) == "/" ||
            calcInput.textContent.substring(0, calcInput.textContent.length) == "*" ||
            calcInput.textContent.substring(0, calcInput.textContent.length) == "+" ||
            calcInput.textContent.substring(0, calcInput.textContent.length) == "%")) {
            calcInput.textContent = "";
        }

        if (calcInput.textContent.length === 1 && calcInput.textContent.substring(0, calcInput.textContent.length) == ".") {
            calcInput.textContent = "0."
        }

        if ((calcInput.textContent.substring(calcInput.textContent.length - 2, calcInput.textContent.length - 1) == "/" ||
            calcInput.textContent.substring(calcInput.textContent.length - 2, calcInput.textContent.length - 1) == "*" ||
            calcInput.textContent.substring(calcInput.textContent.length - 2, calcInput.textContent.length - 1) == "+" ||
            calcInput.textContent.substring(calcInput.textContent.length - 2, calcInput.textContent.length - 1) == "." ||
            calcInput.textContent.substring(calcInput.textContent.length - 2, calcInput.textContent.length - 1) == "-" ||
            calcInput.textContent.substring(calcInput.textContent.length - 2, calcInput.textContent.length - 1) == "%") &&
            (calcInput.textContent.substring(calcInput.textContent.length - 1) == "/" ||
                calcInput.textContent.substring(calcInput.textContent.length - 1) == "*" ||
                calcInput.textContent.substring(calcInput.textContent.length - 1) == "." ||
                calcInput.textContent.substring(calcInput.textContent.length - 1) == "+" ||
                calcInput.textContent.substring(calcInput.textContent.length - 1) == "-" ||
                calcInput.textContent.substring(calcInput.textContent.length - 1) == "%")) {
            calcInput.textContent = calcInput.textContent.substring(0, calcInput.textContent.length - 2) +
                calcInput.textContent.substring(calcInput.textContent.length - 1);
        }
    })
};
//calculator keyboard ----------------------------------

//calculator clear button----------------------------------
calcClear.addEventListener("mousedown", function () {
    calcClear.setAttribute("style", "background-color: rgb(193, 255, 235); transition: all 300ms");
})
calcClear.addEventListener("mouseup", function () {
    calcClear.setAttribute("style", "background: transparent; transition: all 300ms");
})
calcClear.addEventListener("click", function () {

    calcOutput.textContent = "";
    calcInput.textContent = "";
})
//calculator clear button----------------------------------

// calculator backspace button ---------------------------
backSpace.addEventListener("mousedown", function () {
    backSpace.setAttribute("style", "background-color: rgb(193, 255, 235); transition: all 300ms");
})
backSpace.addEventListener("mouseup", function () {
    backSpace.setAttribute("style", "background: transparent; transition: all 300ms");
})
backSpace.addEventListener("click", function () {
    calcInput.textContent = calcInput.textContent.substring(0, calcInput.textContent.length - 1);
    calcInput.textContent = calcInput.textContent;
    calcOutput.textContent = eval(calcInput.textContent)
})
// calculator backspace button ---------------------------

//calculator equal button -------------------------------
calcEqual.addEventListener("mousedown", function () {
    calcEqual.setAttribute("style", "background-color: rgb(193, 255, 235); transition: all 300ms");
})
calcEqual.addEventListener("mouseup", function () {
    calcEqual.setAttribute("style", "background: transparent; transition: all 300ms");
})
calcEqual.addEventListener("click", function () {
    calcInput.textContent = eval(calcInput.textContent);
    calcOutput.textContent = "";
})
//calculator equal button -------------------------------

//converter button ----------------------------------------
converter.addEventListener("click", function () {
    calcDisplay.style.display = "none";
    moreOptions.style.display = "none";
    calcKeyboard.style.display = "none";
    lengthDisplay.style.display = "none";
    converterKeyboard.style.display = "none";
    lessBtn.style.display = "none";
    calculator.setAttribute("style", "color: white; border-color: transparent");
    converter.setAttribute("style", "color: rgb(0, 199, 136); border-color: rgb(0, 199, 136)");
    converterContainer.setAttribute("style", "display: block; height: 596px");
    moreBtn.style.display = "block";
})
//converter button ----------------------------------------

// converter length button ------------------------------
converterLengthBtn.addEventListener("click", function () {
    converterContainer.style.display = "none";
    moreOptions.style.display = "none";
    moreBtn.style.display = "block";
    lessBtn.style.display = "none";
    converterKeyboard.style.display = "block";
    lengthDisplay.style.display = "block";
    for (let allBtnsCon of converterBtns) {
        allBtnsCon.style.margin = "9.2px 10px";
    }
})
// converter length button ------------------------------



