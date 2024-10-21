
import * as readline from 'node:readline/promises';
import{stdin as input, stdout as output} from 'node:process';
import { get } from 'node:https';
import { log } from 'node:console';
const userInput = readline.createInterface({input, output});

let getallen = [
    2,4,4,1,9
]

let gemidelde = 0 ; 
getallen.forEach( n => gemidelde += n / getallen.length)
console.log(gemidelde)
process.exit()