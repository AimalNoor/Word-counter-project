"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const inquirer_1 = __importDefault(require("inquirer"));
async function wordCounter() {
    let activate = await inquirer_1.default.prompt([
        {
            type: 'input',
            name: 'text',
            message: 'Enter some text:',
        }
    ]);
    let text = activate.text.trim();
    let words = text.split(/\s+/);
    let wordCount = words.length;
    console.log(`Word count: ${wordCount}`);
}
wordCounter();
