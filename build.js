//credit: NPM
var fs       = require("fs")
var infile   = __dirname + '/phrases/loading.txt'
var outfile_pre  = __dirname + '/phrases/loading'
var outfile_json = outfile_pre + '.json'
var outfile_txt = outfile_pre + '.txt'

function mergeJson(base, json) {
  return Object.assign({},base, json);  
}

var list = fs
  .readFileSync(infile, 'utf8')
  .split("\n") //make it an array
  .map(function(e) { //compile to json
    return {phrase: e, includePleaseWait: false, tags: {nsfw: false}} // Base Template 
    
  })
  .map(function(e) { //please wait Parce
    if(e.phrase.substring(0, 11).toLowerCase() == "please wait") { //Has Please Wait
      if(e.phrase.substring(11, 12) == ".") {
        return mergeJson(e, {phrase: e.phrase.substring(13), includePleaseWait: true});
      }
        return mergeJson(e, {phrase: e.phrase.substring(12), includePleaseWait: true});
    } else {
      return e;
    }
  })
  .map(function(e) {   //remove whitespace
    return mergeJson(e, {phrase: e.phrase.trim()})
  })
  .filter(function(e) { return (e.phrase.length > 0) }) //removes 
  .sort(function (a, b) {
    return a.phrase.toLowerCase().localeCompare(b.phrase.toLowerCase());
  })

fs.writeFileSync(outfile_json, JSON.stringify(list, null, 2))

/*
fs.writeFileSync(outfile_txt, list.reduce(
  function(p, c){
    return p + c + '\n'
  }, list.shift() + '\n')
)
*/