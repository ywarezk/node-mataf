import yarivsObject, { sayHello, myArray as numberArray } from './module-example';
// import {sayHello} from '../../hello/module-example';
import yarivPath from 'path';
// import {path} from 'path';

// require('path').resolve

// const {resolve} = require('path');
import {resolve} from 'path';

sayHello();

// what kind of module do we have? 

// 3 types of modules

// 1. your modules
// 2. built in modules shipped with node.js - non relative path
// 3. installed modules: npm install some-module

// print the current path of the file we are in
const fullPath = yarivPath.resolve(__dirname, 'import-example.ts') ;
console.log(fullPath);