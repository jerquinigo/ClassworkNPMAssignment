const chalk = require("chalk");

const helloBlue = str => {
  console.log(chalk.blue(str));
};
// console.log(helloBlue("helloWorld"));

const helloRed = str => {
  console.log(chalk.red(str));
};

// console.log(helloRed("helloWorld"));

const stringToColor = (str, color) => {
  console.log(chalk[color](str));
};

// console.log(stringToColor("ColoredString", "red"));

const evensBlueOddsYellow = str => {
  let newArr = str.split(" ");
  let output = [];
  console.log(newArr);
  newArr.forEach(el => {
    // console.log(el.length);
    if (el.length % 2) {
      console.log(chalk.yellow(el));
    } else {
      console.log(chalk.blue(el));
    }
  });
};

// console.log(evensBlueOddsYellow("this is a test"));

const angryText = (str) => {
let strCaps = str.toUpperCase()
console.log(chalk.red.underline(strCaps));
}
// console.log(angryText("i am angry"));

const backgroundCyan = (str) => {
console.log(chalk.white.bgCyan(str));
}

// console.log(backgroundCyan("colorful"));

const boldFirstUnderLineLast = (str) =>{
  let newArr = str.split(" ")

  for(let i = 0; i < newArr.length; i++){
    if(newArr[i] === newArr[0]){
      console.log(chalk.bold(newArr[0]));
    }else{
      console.log(chalk.underline(newArr[i]));
    }
  }
}

const commandLineChalk = (str) => {

}
