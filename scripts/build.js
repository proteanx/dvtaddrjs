// https://github.com/bitcoincashjs/cashaddr
// Copyright (c) 2017 Emilio Almansi
// Distributed under the MIT software license, see the accompanying
// file LICENSE or http://www.opensource.org/licenses/mit-license.php.

const version = require('../package.json').version;

const shell = require('shelljs');
shell.config.fatal = true;

shell.exec('mkdir -p dist');

shell.exec('npx browserify src/cashaddr.js --s cashaddr', { silent:true })
  .to(`dist/dvtaddrjs-${version}.js`);
shell.echo(`Generated file: dist/dvtaddrjs-${version}.js.`);

shell.exec(`cp LICENSE.js dist/dvtaddrjs-${version}.min.js`);
shell.exec(`cat dist/dvtaddrjs-${version}.js`, { silent:true })
  .exec('npx uglifyjs -c', { silent:true })
  .toEnd(`dist/dvtaddrjs-${version}.min.js`);
shell.echo(`Generated file: dist/dvtaddrjs-${version}.min.js.`);
