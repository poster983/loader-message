# loader-message  
[![Build Status](https://travis-ci.org/poster983/loader-message.svg?branch=master)](https://travis-ci.org/poster983/loader-message)  

Lightweight NodeJS Module / Repository for delivering silly phrases to a loading screen near you  

## Install 

Run `npm install loader-message --save` to build the list.  

## Usage 

Require it in your code:
`var loaderMessage = require("loader-message");`

If you want a funny, creative phrase made by a human, use: 
`loaderMessage.phrase();`

If you want the module to generate a less creative phrase that sometimes doesn't make sense, use:
`loaderMessage.generate();`

## Contributing
`npm test`
### Phrases 
Please open a PR and add your loading phrase to `phrases/loading.txt` 
One phrase per line please.   

### Generation 
Please open a PR and add adjectives, plural nouns, and verbs ending in "ing" to `generation/adjective.js`, `generation/pluralNoun.js`, and `generation/verbING.js` respectively. 

## Licence 
MIT