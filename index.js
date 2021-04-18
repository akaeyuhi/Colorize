'use strict';
module.exports = class Colorize extends console.Console {
  constructor() {
    super(process.stdout, process.stderr);
    this.styles = {
      fgBlack: '\x1b[30m',
      fgRed: '\x1b[31m',
      fgGreen:  '\x1b[32m',
      fgYellow:  '\x1b[33m',
      fgBlue:  '\x1b[34m',
      fgMagenta:  '\x1b[35m',
      fgCyan:  '\x1b[36m',
      fgWhite:  '\x1b[37m',
      reset: '\x1b[0m',
      bright: '\x1b[1m',
      dim: '\x1b[2m',
      underscore: '\x1b[4m',
      blink: '\x1b[5m',
      reverse: '\x1b[7m',
      hidden: '\x1b[8m',
      bgBlack:  '\x1b[40m',
      bgRed:  '\x1b[41m',
      bgGreen:  '\x1b[42m',
      bgYellow:  '\x1b[43m',
      bgBlue:  '\x1b[44m',
      bgMagenta:  '\x1b[45m',
      bgCyan:  '\x1b[46m',
      bgWhite: '\x1b[47m',
      [Symbol.iterator]: function* (){
        const keys = Object.keys(this);
        for (key of keys){
          yield this[key];
        }
        return true;
      },
      randomColor() {
        const keys = Object.keys(this);
        return this[keys[Math.floor(Math.random() * (keys.length - 1))]];
      },
    };
  }

  styled(style, ...args) {
    args.push(this.styles.reset);
    super.log(style + '%s', ...args);
  }

  green(string) {
    this.styled(this.styles.fgGreen, string);
  }

  red(string) {
    this.styled(this.styles.fgRed, string);
  }

  yellow(string) {
    this.styled(this.styles.fgYellow, string);
  }

  blue(string) {
    this.styled(this.styles.fgBlue, string);
  }

  magenta(string) {
    this.styled(this.styles.fgMagenta, string);
  }

  cyan(string) {
    this.styled(this.styles.fgCyan, string);
  }
  random(string) {
    this.styled(this.styles.randomColor(), string);
  }
  allColors(string) {
    const keys = Object.keys(this.styles);
    const newKeys = keys.filter(el => keys.indexOf(el) < 8);
    const letters = string.split('');
    let newStr = '';
    for(let letter of letters){
      letter = this.styles[newKeys[Math.floor(Math.random() * newKeys.length)]] + letter;
      newStr += letter
    }
    newStr += this.styles.reset;
    super.log(newStr);
  }
};
