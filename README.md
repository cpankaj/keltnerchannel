# keltnerchannel

[![Build Status](https://travis-ci.org/cpankaj/keltnerchannel.svg?branch=master)](https://travis-ci.org/cpankaj/keltnerchannel)

Keltner Channel technical indicator.

Other technical indicators

 - Simple Moving Average (SMA)
 - Exponential Moving Average (EMA)
 - Bollinger Bands


# Installation
```sh
$ npm install --save keltnerchannel
```

# Functions

## kc

Calculate Keltner Channel

```javascript
const kc = require('keltnerchannel').kc;

    let data = [
        {high: 21, low: 19, close: 19.5},
        {high: 20, low: 19.4, close: 19.8},
        {high: 23, low: 21.4, close: 22},
        {high: 22, low: 20, close: 21}
    ];

let out = kc(data, 2, 1.5, true); // { upper: [], mid: [], lower: []}
```

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

## boll

Calculate Bollinger Band

```javascript
const boll = require('keltnerchannel').boll;

let data = [2, 5, 6, 7, 5, 3];
let out = boll(data, 2, 2, true); // { upper: [], mid: [], lower: []}
```

# License
This node module is available as open source software under the terms of the [MIT License](http://opensource.org/licenses/MIT).
