/*
MIT License

Copyright (c) 2017 Joseph Hassell

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
*/

import noun from "./generation/pluralNoun";
import adjective from "./generation/adjective";
import verb from "./generation/verbING";
import loadingPhrases from "./phrases/loading.js";
const source = {noun, adjective, verb, phrases: loadingPhrases};
export {source};
/*const noun = require("./generation/pluralNoun");
const adjective = require("./generation/adjective");
const verb = require("./generation/verbING");
const phrases = require("./phrases/loading.json");*/
/**
 * Generates a phrase from a noun, adjective and verb
 * @returns {String}
 */
export const generate = () => {
	var nl = Math.floor(Math.random() * noun.length) + 0;
	var al = Math.floor(Math.random() * adjective.length) + 0;
	var vl = Math.floor(Math.random() * verb.length) + 0;
	return verb[vl] + " " + adjective[al] + " " + noun[nl];
};

/**
 * Picks a creative phrase from the phrases file
 * @param {Object} [options] 
 * @param {Boolean} [includePleaseWait=true] - If the loading message has "please wait", it will be included in the string
 * @returns {String}
 */
export const phrase = (options) => {
	var defaultOpt = {
		includePleaseWait: true, 
		includeNSFW: false
	}
	options = Object.assign({},defaultOpt, options);
	var returner = "";

	var lPl = Math.floor(Math.random() * loadingPhrases.length) + 0;
	if(options.includePleaseWait) {
		if(loadingPhrases[lPl].hasPleaseWait) {
			returner = returner + "Please Wait. "
		}
	}
	returner = returner + loadingPhrases[lPl].phrase;
	return returner;
};