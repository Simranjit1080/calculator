window.onload = () => {
  var input = document.getElementById("text");
  var AC = document.getElementById("AC");
  var cal = document.getElementById("cal");
  var opdiv = document.getElementById("opdiv");
  var opmul = document.getElementById("opmul");
  var opsub = document.getElementById("opsub");
  var opadd = document.getElementById("opadd");
  var a = 0;
  var b = 0;
  var operating = false;
  isDec = false;
  var operator = null;
  operating1 = false;
  cal.addEventListener("click", (e) => {
    if (e.target.classList[0] === "key") {
      console.log(e.target.innerHTML);
      if (e.target.innerHTML != "AC") {
        AC.innerHTML = "C";
      }
      if (e.target.classList[1] === "num" && !operating) {
        if (input.value === "0") {
          if (e.target.id == "dec") {
            input.value += e.target.innerHTML;
            isDec = !isDec;
          } else {
            input.value = e.target.innerHTML;
          }
        } else {
          if (e.target.id == "dec") {
            if (!isDec) {
              input.value += e.target.innerHTML;
              isDec = !isDec;
            }
          } else {
            input.value += e.target.innerHTML;
          }
        }
      } else if (e.target.classList[1] === "num" && operating) {
        operating = false;
        if (e.target.id == "dec") {
          input.value = 0 + e.target.innerHTML;
          isDec = !isDec;
        } else {
          input.value = e.target.innerHTML;
        }
      } else if (e.target.classList[1] === "op" && !operating1) {
        e.target.style.backgroundColor = "#4d4d4d";
        e.target.style.borderRadius = "10px";
        isDec = false;
        a = input.value;
        operating1 = true;
        operating = true;
        switch (e.target.innerHTML) {
          case "/":
            operator = "/";
            break;
          case "X":
            operator = "X";
            break;
          case "-":
            operator = "-";
            break;
          case "+":
            operator = "+";
            break;
          default:
            break;
        }
      } else if (
        e.target.classList[1] === "op" &&
        operating1 &&
        operator == e.target.innerHTML
      ) {
        operating1 = false;
        operating = false;
        e.target.style.backgroundColor = "#666666";
        e.target.style.borderRadius = "";
        operator = null;
        input.value = a;
      } else if (e.target.id === "opeq" && operator) {
        b = input.value;
        console.log(a + operator + b);
        switch (operator) {
          case "/":
            input.value = parseFloat(a) / parseFloat(b);
            operator = null;
            if (!input.value.toString().includes(".")) {
              isDec = false;
            }
            opdiv.style.backgroundColor = "#666666";
            opdiv.style.borderRadius = "";
            operating1 = false;
            operating = false;
            break;
          case "X":
            input.value = parseFloat(a) * parseFloat(b);
            operator = null;
            operating1 = false;
            if (!input.value.toString().includes(".")) {
              isDec = false;
            }
            opmul.style.backgroundColor = "#666666";
            opmul.style.borderRadius = "";
            operating = false;
            break;
          case "-":
            input.value = parseFloat(a) - parseFloat(b);
            operator = null;
            operating1 = false;
            if (!input.value.toString().includes(".")) {
              isDec = false;
            }
            opsub.style.backgroundColor = "#666666";
            opsub.style.borderRadius = "";
            operating = false;
            break;
          case "+":
            input.value = parseFloat(a) + parseFloat(b);
            operator = null;
            operating1 = false;
            if (!input.value.toString().includes(".")) {
              isDec = false;
            }
            opadd.style.backgroundColor = "#666666";
            opadd.style.borderRadius = "";
            operating = false;
            break;
          default:
            break;
        }
      } else if (e.target.innerHTML === "AC") {
        operator = null;
        operating1 = false;
        operating = false;
        isDec = false;
        input.value = "0";
        opdiv.style.backgroundColor = "#666666";
        opdiv.style.borderRadius = "";
        opmul.style.backgroundColor = "#666666";
        opmul.style.borderRadius = "";
        opsub.style.backgroundColor = "#666666";
        opsub.style.borderRadius = "";
        opadd.style.backgroundColor = "#666666";
        opadd.style.borderRadius = "";
      } else if (e.target.innerHTML === "C") {
        if (input.value.length == 1 || input.value == "Infinity") {
          input.value = "0";
          AC.innerHTML = "AC";
        } else {
          if (input.value[input.value.length - 1] == ".") {
            isDec = false;
          }
          input.value = input.value.slice(0, input.value.length - 1);
        }
      }
    }
  });
};
