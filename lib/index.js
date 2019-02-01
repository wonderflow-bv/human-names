'use strict';

var nlp = require('compromise');
var uniq = require('lodash.uniq');

var uniqueRandomArray = require('unique-random-array');
var femaleHumanNamesEn = require('../data/female-human-names-en.json');
var maleHumanNamesEn = require('../data/male-human-names-en.json');
var allHumanNamesEn = [];

var femaleHumanNamesIt = require('../data/female-human-names-it.json');
var maleHumanNamesIt = require('../data/male-human-names-it.json');
var allHumanNamesIt = [];

var femaleHumanNamesFr = require('../data/female-human-names-fr.json');
var maleHumanNamesFr = require('../data/male-human-names-fr.json');
var allHumanNamesFr = [];

var femaleHumanNamesDe = require('../data/female-human-names-de.json');
var maleHumanNamesDe = require('../data/male-human-names-de.json');
var allHumanNamesDe = [];

var femaleHumanNamesEs = require('../data/female-human-names-es.json');
var maleHumanNamesEs = require('../data/male-human-names-es.json');
var allHumanNamesEs = [];

var femaleHumanNamesNl = require('../data/female-human-names-nl.json');
var maleHumanNamesNl = require('../data/male-human-names-nl.json');
var allHumanNamesNl = [];

var allNames = [];

var allHumanNamesEn = femaleHumanNamesEn.concat(maleHumanNamesEn);
var allHumanNamesIt = femaleHumanNamesIt.concat(maleHumanNamesIt);
var allHumanNamesFr = femaleHumanNamesFr.concat(maleHumanNamesFr);
var allHumanNamesDe = femaleHumanNamesDe.concat(maleHumanNamesDe);
var allHumanNamesEs = femaleHumanNamesEs.concat(maleHumanNamesEs);
var allHumanNamesNl = femaleHumanNamesNl.concat(maleHumanNamesNl);

allNames = allHumanNamesEn.concat(allHumanNamesIt).concat(allHumanNamesFr).concat(allHumanNamesDe).concat(allHumanNamesEs).concat(allHumanNamesNl);

// femaleHumanNamesEn.forEach(function (el, i) {
// 	if ((maleHumanNamesEn[i] != undefined) && (maleHumanNamesEn[i] != 'undefined')) {
// 		allHumanNamesEn.push(el, maleHumanNamesEn[i]);
// 	}
// });
//
// femaleHumanNamesIt.forEach(function (el, i) {
// 	if ((maleHumanNamesIt[i] != undefined) && (maleHumanNamesIt[i] != 'undefined')) {
// 		allHumanNamesIt.push(el, maleHumanNamesIt[i]);
// 	}
// });
//
// femaleHumanNamesFr.forEach(function (el, i) {
// 	if ((maleHumanNamesFr[i] != undefined) && (maleHumanNamesFr[i] != 'undefined')) {
// 		allHumanNamesFr.push(el, maleHumanNamesFr[i]);
// 	}
// });
//
// femaleHumanNamesDe.forEach(function (el, i) {
// 	if ((maleHumanNamesDe[i] != undefined) && (maleHumanNamesDe[i] != 'undefined')) {
// 		allHumanNamesDe.push(el, maleHumanNamesDe[i]);
// 	}
// });
//
// femaleHumanNamesEs.forEach(function (el, i) {
// 	if ((maleHumanNamesEs[i] != undefined) && (maleHumanNamesEs[i] != 'undefined')) {
// 		allHumanNamesEs.push(el, maleHumanNamesEs[i]);
// 	}
// });

exports.femaleEn = femaleHumanNamesEn;
exports.maleEn = maleHumanNamesEn;
exports.allEn = allHumanNamesEn;

exports.femaleIt = femaleHumanNamesIt;
exports.maleIt = maleHumanNamesIt;
exports.allIt = allHumanNamesIt;

exports.femaleFr = femaleHumanNamesFr;
exports.maleFr = maleHumanNamesFr;
exports.allFr = allHumanNamesFr;

exports.femaleDe = femaleHumanNamesDe;
exports.maleDe = maleHumanNamesDe;
exports.allDe = allHumanNamesDe;

exports.femaleEs = femaleHumanNamesEs;
exports.maleEs = maleHumanNamesEs;
exports.allEs = allHumanNamesEs;

exports.femaleNl = femaleHumanNamesNl;
exports.maleNl = maleHumanNamesNl;
exports.allNl = allHumanNamesNl;

exports.femaleRandomEn = uniqueRandomArray(femaleHumanNamesEn);
exports.maleRandomEn = uniqueRandomArray(maleHumanNamesEn);
exports.allRandomEn = uniqueRandomArray(allHumanNamesEn);

exports.femaleRandomIt = uniqueRandomArray(femaleHumanNamesIt);
exports.maleRandomIt = uniqueRandomArray(maleHumanNamesIt);
exports.allRandomIt = uniqueRandomArray(allHumanNamesIt);

exports.femaleRandomFr = uniqueRandomArray(femaleHumanNamesFr);
exports.maleRandomFr = uniqueRandomArray(maleHumanNamesFr);
exports.allRandomFr = uniqueRandomArray(allHumanNamesFr);

exports.femaleRandomDe = uniqueRandomArray(femaleHumanNamesDe);
exports.maleRandomDe = uniqueRandomArray(maleHumanNamesDe);
exports.allRandomDe = uniqueRandomArray(allHumanNamesDe);

exports.femaleRandomEs = uniqueRandomArray(femaleHumanNamesEs);
exports.maleRandomEs = uniqueRandomArray(maleHumanNamesEs);
exports.allRandomEs = uniqueRandomArray(allHumanNamesEs);

exports.femaleRandomNl = uniqueRandomArray(femaleHumanNamesNl);
exports.maleRandomNl = uniqueRandomArray(maleHumanNamesNl);
exports.allRandomNl = uniqueRandomArray(allHumanNamesNl);

/**
 * Returns the first English names that matches the provided name.
 * @param name
 * @returns {*}
 */
var isPersonName = function isPersonName(name) {

	var matchIndex = allNames.findIndex(function (x, index) {
		return name.toLowerCase() == x.toLowerCase();
	});

	return matchIndex != -1;
};

var tagsForEntity = ['TitleCase', 'Person'];

var parseNames = function parseNames(text) {

	var entities = nlp(text).terms().data().map(function (e) {
		return e.tags.some(function (t) {
			return tagsForEntity.includes(t);
		}) ? e.normal : null;
	}).filter(Boolean);

	console.log('entities', entities);

	entities = entities.map(function (x) {
		return toTitleCase(x.trim());
	});

	// Filter entities by known people names
	entities = uniq(entities.filter(function (x) {
		return isPersonName(x);
	}));

	// printJson(entities)

	return entities;
};

function printJson(what) {
	return console.log(JSON.stringify(what, null, '  '));
};

function toTitleCase(str) {
	return str.replace(/\w\S*/g, function (txt) {
		return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
	});
}

exports.isPersonName = isPersonName;
exports.parseNames = parseNames;