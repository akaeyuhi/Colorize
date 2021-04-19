# Colorize
### Lighweight Node.Js library for colorized console output
#### Install
```sh
$ npm i node-colorize -g
```
### Usage
Import module by using 
```javascript
const Colorize = require('node-colorize');
```
Create new instanse of Colorize class: 
```javascript
const colored = new Colorize();
```
Output colored text in console by using color methods: 
```javascript
colored.green('Hello world');
```
Use random style from colored.styles: 
```javascript
colored.random('Hello world');
```
Every letter is colored in random color from colored.styles:
```javascript
colored.allColors('Hello world');
```
Also you can use custom escape sequense or style saved in colored.styles: 
```javascript
colored.styled(colored.styles.underline, 'Hello world');
```
