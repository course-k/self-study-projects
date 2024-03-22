/** コンソール出力 */
// console.log('hello world');

/** ファイル出力 */
// const fs = require('fs');
// fs.writeFileSync(`${__dirname}/test.txt`, 'hello world');

/** パス操作 */
// const path = require('path');
// const resolvedPath = path.resolve('..', '/', 'node-training');
// console.log(resolvedPath);

/** CommonJSのエクスポート、インポート */
// const { print1 } = require('./exportsExample');
// const { print2 } = require('./moduleExportsExample');
// print1();
// print2();

import { print } from './esmoduleExample.cjs';
print();