/*
MIT License

Copyright (c) 2017-2018 Joseph Hassell

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
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.loaderMessage = {})));
}(this, (function (exports) { 'use strict';

  var noun = [
  "goatherd",
  "post-processor",
  "star systems",
  "passports",
  "drivers",
  "quantum computers",
  "super heros",
  "teachers",
  "students",
  "calculators",
  "dog biscuits",
  "doughnuts",
  "mice",
  "moo moos",
  "penguins",
  "astronauts"
  ];

  var adjective = [
  "adorable",
  "nice",
  "fat",
  "radiant",
  "useless",
  "long",
  "dumb",
  "magical",
  "red",
  "ordinary"
  ];

  var verb = [
  "bringing",
  "making",
  "generating",
  "powering",
  "starting",
  "learning",
  "writing",
  "setting",
  "computing",
  "sending"
  ];

  var loadingPhrases = [
    {
      "phrase": "˙sıɥʇ pɐǝɹ oʇ ƃuıʎɹʇ ɹoɟ pɹǝu ǝʌıssɐɯ ɐ ǝɹɐ noʎ",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "2*2=null",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "640K ought to be enough for anybody",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "A few bits tried to escape, but we caught them",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "And dream of faster computers",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "And enjoy the elevator music",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Are your shoelaces tied?",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "As if you had any other choice",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "At least you're not on hold",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Brain the size of a planet and all you want me to do is recite a funny loading message...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Caching internet locally (this may take some time)",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Checking the gravitational constant in your locale",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Commencing infinite loop (this may take some time)",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Counting backwards from infinity",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Creating Time-Loop Inversion Field",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Creating Universe (this may take some time)",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Dig on the 'X' for buried treasure... ARRR!",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Do you suffer from ADHD? Me neith- oh look a bunny... What was I doing again? Oh, right. Here we go.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Doing something useful...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Don't think of purple hippos",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Exercise: enumerate your shopping list as quickly as possible",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Follow the white rabbit",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Go ahead -- hold your breath",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Hum something loud while others stare",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "I should have had a V8 this morning.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "It's still faster than you could draw it",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Loading ... Please Wait Attentively (which is what you agreed to in the Terms and Conditions)",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Loading completed. Press F13 to continue.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Loading humorous message ... Please Wait",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "My other load screen is much faster. You should try that one instead.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Pay no attention to the man behind the curtain",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Please count to 10...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Please don't move...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Press Alt+F4 for a quick IQ test",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "QUIET!!! I'm trying to think here!",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "RE-calibrating the internet...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Reconfiguring the office coffee machine...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Reticulating splines",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Rewinding Magnetic Tape",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Scanning your hard drive for credit card details. Please be patient...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Take a moment to sign up for our lovely prizes",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Testing data on Timmy... ... ... We're going to need another Timmy.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "The architects are still drafting",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "The bits are breeding",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "The bits are flowing slowly today",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "The internet is full... Please wait...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "The last time I tried this the monkey didn't survive. Let's hope it works better this time.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "The program should finish loading in six to eight weeks business weeks.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "The server is powered by a lemon and two electrodes",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "The version I have of this in testing has much funnier load screens.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Time is an illusion. Loading time doubly so.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Waiting for Godot...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Warming up Large Hadron Collider...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "We apologise for the fault in the subtitles. Those responsible have been sacked",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "We're testing your patience",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "While a larger software vendor in Seattle takes over the world",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "While the little elves draw your map",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "While the satellite moves into position",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Why don't you order a sandwich?",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Working... hey, come back here!",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Working... no, just kidding.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Working... So, how are you?",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Working... well... you know...",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "Would you like fries with that?",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Would you prefer chicken, steak, or tofu?",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Yes there really are magic elves with an abacus working frantically in here.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    },
    {
      "phrase": "You're not in Kansas any more",
      "tags": {
        "hasPleaseWait": true
      }
    },
    {
      "phrase": "Your underwear has conflicted our Database. Please change daily.",
      "tags": {
        "nsfw": false,
        "hasPleaseWait": false
      }
    }
  ];

  const source = {noun, adjective, verb, phrases: loadingPhrases};
  /*const noun = require("./generation/pluralNoun");
  const adjective = require("./generation/adjective");
  const verb = require("./generation/verbING");
  const phrases = require("./phrases/loading.json");*/
  /**
   * Generates a phrase from a noun, adjective and verb
   * @returns {String}
   */
  const generate = () => {
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
  const phrase = (options) => {
  	var defaultOpt = {
  		includePleaseWait: true, 
  		includeNSFW: false
  	};
  	options = Object.assign({},defaultOpt, options);
  	var returner = "";

  	var lPl = Math.floor(Math.random() * loadingPhrases.length) + 0;
  	if(options.includePleaseWait) {
  		if(loadingPhrases[lPl].tags.hasPleaseWait) {
  			returner = returner + "Please Wait. ";
  		}
  	}
  	returner = returner + loadingPhrases[lPl].phrase;
  	return returner;
  };

  exports.source = source;
  exports.generate = generate;
  exports.phrase = phrase;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
