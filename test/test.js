var chai = require('chai');
var assert = chai.assert;
var loadingPhrases = require("../phrases/loading.json");
var genAdj = require("../generation/adjective.js");
var genNoun = require("../generation/pluralNoun.js");
var genVerb = require("../generation/verbING.js");
var index = require("../index.js")


context("Preset", function() {
	context("Loading Phrases Array", function() {
		it("is an array", function(done) {
			assert.isArray(loadingPhrases);
			done()
		})
		it("is not empty", function(done) {
			assert.isNotEmpty(loadingPhrases);
			done();
		})
		context("each index position", function() {
			it("is an object", function(done) {
				for(var i = 0 ; i < loadingPhrases.length; i++) {
					assert.isObject(loadingPhrases[i]);
					if(i >= loadingPhrases.length -1) {
						done();
					}
				}
			})
			it("is not empty", function(done) {
				for(var i = 0 ; i < loadingPhrases.length; i++) {
					assert.isNotEmpty(loadingPhrases[i]);
					if(i >= loadingPhrases.length -1) {
						done();
					}
				}
			})
		})
	})
})

context("Generation", function() {
	context("Adjective Array", function(){
		it("is an array", function(done) {
			assert.isArray(genAdj);
			done()
		})
		it("is not empty", function(done) {
			assert.isNotEmpty(genAdj);
			done();
		})
		it("only has strings", function(done) {
			for(var i = 0 ; i < genAdj.length; i++) {
				assert.isString(genAdj[i]);
				if(i >= genAdj.length -1) {
					done();
				}
			}
		})
		it("does not have empty strings", function(done) {
			for(var i = 0 ; i < genAdj.length; i++) {
				assert.isNotEmpty(genAdj[i]);
				if(i >= genAdj.length -1) {
					done();
				}
			}
		})
	})
	context("Plural Noun Array", function(){
		it("is an array", function(done) {
			assert.isArray(genNoun);
			done()
		})
		it("is not empty", function(done) {
			assert.isNotEmpty(genNoun);
			done();
		})
		it("only has strings", function(done) {
			for(var i = 0 ; i < genNoun.length; i++) {
				assert.isString(genNoun[i]);
				if(i >= genNoun.length -1) {
					done();
				}
			}
		})
		it("does not have empty strings", function(done) {
			for(var i = 0 ; i < genNoun.length; i++) {
				assert.isNotEmpty(genNoun[i]);
				if(i >= genNoun.length -1) {
					done();
				}
			}
		})
	})
	context("VerbING Array", function(){
		it("is an array", function(done) {
			assert.isArray(genVerb);
			done()
		})
		it("is not empty", function(done) {
			assert.isNotEmpty(genVerb);
			done();
		})
		it("only has strings", function(done) {
			for(var i = 0 ; i < genVerb.length; i++) {
				assert.isString(genVerb[i]);
				if(i >= genVerb.length -1) {
					done();
				}
			}
		})
		it("does not have empty strings", function(done) {
			for(var i = 0 ; i < genVerb.length; i++) {
				assert.isNotEmpty(genVerb[i]);
				if(i >= genVerb.length -1) {
					done();
				}
			}
		})
	})
})

context("Main Module", function() {
	describe("Generation function", function() {
		it("returns a string", function(done) {
			assert.isString(index.generate());
			done();
		})
	})
	describe("Preset phrases function", function() {
		it("returns a string", function(done) {
			assert.isString(index.phrase());
			done();
		})
	})
})