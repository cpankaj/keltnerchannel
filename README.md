# keltnerchannel

[![Build Status](https://travis-ci.org/cpankaj/keltnerchannel.svg?branch=master)](https://travis-ci.org/cpankaj/keltnerchannel)

Node JS module for Keltner Channel - technical indicator

# Installation
```sh
$ npm install --save keltnerchannel
```

# Functions

## sma

Calculate Simple Moving Average

```javascript
const sma = require('keltnerchannel').sma;

let arr = [2, 4, 4];
let ma = sma(arr, 2); // [3, 4]
```

## ema

Calculate Exponential Moving Average

```javascript
const ema = require('keltnerchannel').ema;

let arr = [2, 4, 6, 4];
let ma = ema(arr, 3); // [4, 4]
```

# License
The node module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
