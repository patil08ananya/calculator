let calciArr = [];
let operator = ["+", "-", "*", "/", "%"];
let result;
let str;

function updateScreen() {
  document.getElementById("calci-screen").innerHTML = calciArr.join("");
}

function resetArr() {
  calciArr = [];
}

function myFunction(num) {
  //document.getElementById("calci-screen").innerHTML = num;

  //final output
  if (num == "=") {
    str = calciArr.join("");
    try {
      result = eval(str);
      document.getElementById("calci-screen").innerHTML = result;
    } catch (error) {
      document.getElementById("error").innerHTML = error;
    }
    resetArr();
  } else if (num == "AC") {
    //All clear
    resetArr();
    document.getElementById("calci-screen").innerHTML = " ";
  } else if (num == "back") {
    //back
    calciArr.pop();
    updateScreen();
  } else if (
    operator.includes(num) &&
    operator.includes(calciArr[calciArr.length - 1])
  ) {
    calciArr.pop();
    calciArr.push(num);
    updateScreen();
  } else {
    //numbers and operators
    if (calciArr.length === 0 && operator.includes(num)) {
      return;
    } else {
      calciArr.push(num);
      updateScreen();
    }
  }
}
