'use strict';
module.exports = class Colorize extends console.Console {
  constructor() {
    super(process.stdout, process.stderr);
    this.styles = {
      reset: '\x1b[0m',
      bright: '\x1b[1m%s',
      dim: '\x1b[2m%s',
      underscore: '\x1b[4m%s',
      blink: '\x1b[5m%s',
      reverse: '\x1b[7m%s',
      hidden: '\x1b[8m%s',
      fgBlack: '\x1b[30m%s',
      fgRed: '\x1b[31m%s',
      fgGreen:  '\x1b[32m%s',
      fgYellow:  '\x1b[33m%s',
      fgBlue:  '\x1b[34m%s',
      fgMagenta:  '\x1b[35m%s',
      fgCyan:  '\x1b[36m%s',
      fgWhite:  '\x1b[37m%s',
      bgBlack:  '\x1b[40m%s',
      bgRed:  '\x1b[41m%s',
      bgGreen:  '\x1b[42m%s',
      bgYellow:  '\x1b[43m%s',
      bgBlue:  '\x1b[44m%s',
      bgMagenta:  '\x1b[45m%s',
      bgCyan:  '\x1b[46m%s',
      bgWhite: '\x1b[47m%s',
    };
  }

  styled(style, ...args) {
    args.push(this.styles.reset);
    super.log(style, ...args);
  }

  green(output) {
    this.styled(this.styles.fgGreen, output);
  }

  red(output) {
    this.styled(this.styles.fgRed, output);
  }

  yellow(output) {
    this.styled(this.styles.fgYellow, output);
  }

  blue(output) {
    this.styled(this.styles.fgBlue, output);
  }

  magenta(output) {
    this.styled(this.styles.fgMagenta, output);
  }

  cyan(output) {
    this.styled(this.styles.fgCyan, output);
  }

};
