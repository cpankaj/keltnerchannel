# keltnerchannel
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

# License
The node module is available as open source under the terms of the [MIT License](http://opensource.org/licenses/MIT).
