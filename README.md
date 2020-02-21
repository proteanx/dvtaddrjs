# CashAddr.js: The new DeVault address format for Node.js and web browsers.

[![Build Status](https://travis-ci.org/bitcoincashjs/dvtaddrjs.svg?branch=master)](https://travis-ci.org/bitcoincashjs/dvtaddrjs) [![Coverage Status](https://coveralls.io/repos/github/bitcoincashjs/dvtaddrjs/badge.svg?branch=master)](https://coveralls.io/github/bitcoincashjs/dvtaddrjs?branch=master)

[![NPM](https://nodei.co/npm/dvtaddrjs.png?downloads=true)](https://nodei.co/npm/dvtaddrjs/)

JavaScript implementation for the new CashAddr address format for DeVault.

Compliant with the original CashAddr [specification](https://github.com/Bitcoin-UAHF/spec/blob/master/cashaddr.md) which improves upon [BIP 173](https://github.com/bitcoin/bips/blob/master/bip-0173.mediawiki).

*Note:* This is a JavaScript implementation of the CashAddr format specification. If you are looking for a general purpose DeVault address translation library, check out the easy-to-use and well-tested [BchAddr.js](https://github.com/bitcoincashjs/bchaddrjs).

## Installation

### Using NPM

```bsh
$ npm install --save dvtaddrjs
```

### Using Bower

```bsh
$ bower install --save dvtaddrjs
```

### Manually

You may also download the distribution file manually and place it within your third-party scripts directory: [dist/dvtaddrjs-0.3.9.min.js](https://cdn.rawgit.com/bitcoincashjs/dvtaddrjs/master/dist/dvtaddrjs-0.3.9.min.js).

## Usage

### In Node.js

```javascript
const cashaddr = require('dvtaddrjs');
const address = 'devault:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a';
const { prefix, type, hash } = cashaddr.decode(address);
console.log(prefix); // 'bitcoincash'
console.log(type); // 'P2PKH'
console.log(hash); // Uint8Array [ 118, 160, ..., 115 ]
console.log(cashaddr.encode(prefix, type, hash)); // 'devault:qpm2qsznhks23z7629mms6s4cwef74vcwvy22gdx6a'
```

*Note:* This is a JavaScript implementation of the CashAddr format specification. If you are looking for an easy-to-use and well-tested library to translate between different formats, check out [BchAddr.js](https://github.com/bitcoincashjs/bchaddrjs).

### Browser

#### Script Tag

You may include a script tag in your HTML and the `cashaddr` module will be defined globally on subsequent scripts.

```html
<html>
  <head>
    ...
    <script src="https://cdn.rawgit.com/bitcoincashjs/dvtaddrjs/master/dist/dvtaddrjs-0.3.9.min.js"></script>
  </head>
  ...
</html>
```

## Documentation

### Generate and Browse Locally

```bsh
$ npm run docs
```

### Online

Browse automatically generated jsdocs [online](https://cdn.rawgit.com/bitcoincashjs/dvtaddrjs/master/docs/index.html).
