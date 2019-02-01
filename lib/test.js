'use strict';

var test = require('ava');
var humanNames = require('./');

// test(function (t) {
// 	t.assert(humanNames.femaleEn.length > 0);
// 	t.assert(humanNames.maleEn.length > 0);
// 	t.assert(humanNames.allEn.length > 0);
// 	t.assert(humanNames.femaleRandomEn());
// 	t.assert(humanNames.maleRandomEn());
// 	t.assert(humanNames.allRandomEn());
// 	t.assert(humanNames.allRandomEn() !== humanNames.allRandomEn());
// 	t.assert(humanNames.allEn[0] === 'Aaliyah');
// 	t.assert(humanNames.allEn[1] === 'Aaron');
//
// 	t.assert(humanNames.femaleIt.length > 0);
// 	t.assert(humanNames.maleIt.length > 0);
// 	t.assert(humanNames.allIt.length > 0);
// 	t.assert(humanNames.femaleRandomIt());
// 	t.assert(humanNames.maleRandomIt());
// 	t.assert(humanNames.allRandomIt());
// 	t.assert(humanNames.allRandomIt() !== humanNames.allRandomIt());
// 	t.assert(humanNames.allIt[0] === 'Alessandra');
// 	t.assert(humanNames.allIt[1] === 'Alberto');
//
// 	t.assert(humanNames.femaleFr.length > 0);
// 	t.assert(humanNames.maleFr.length > 0);
// 	t.assert(humanNames.allFr.length > 0);
// 	t.assert(humanNames.femaleRandomFr());
// 	t.assert(humanNames.maleRandomFr());
// 	t.assert(humanNames.allRandomFr());
// 	t.assert(humanNames.allRandomFr() !== humanNames.allRandomFr());
// 	t.assert(humanNames.allFr[0] === 'Aaliyah');
// 	t.assert(humanNames.allFr[1] === 'Aaron');
//
// 	t.assert(humanNames.femaleDe.length > 0);
// 	t.assert(humanNames.maleDe.length > 0);
// 	t.assert(humanNames.allDe.length > 0);
// 	t.assert(humanNames.femaleRandomDe());
// 	t.assert(humanNames.maleRandomDe());
// 	t.assert(humanNames.allRandomDe());
// 	t.assert(humanNames.allRandomDe() !== humanNames.allRandomDe());
// 	t.assert(humanNames.allDe[0] === 'Alina');
// 	t.assert(humanNames.allDe[1] === 'Alexander');
// 	t.end();
//
// 	t.assert(humanNames.femaleEs.length > 0);
// 	t.assert(humanNames.maleEs.length > 0);
// 	t.assert(humanNames.allEs.length > 0);
// 	t.assert(humanNames.femaleRandomEs());
// 	t.assert(humanNames.maleRandomEs());
// 	t.assert(humanNames.allRandomEs());
// 	t.assert(humanNames.allRandomEs() !== humanNames.allRandomEs());
// 	t.assert(humanNames.allEs[0] === 'Abigail');
// 	t.assert(humanNames.allEs[1] === 'Aarón');
// });

test(function (t) {
	t.assert(humanNames.isPersonName("Daniel") == true);
	t.assert(humanNames.isPersonName("Sam") == true);
	t.assert(humanNames.isPersonName("Corey") == true);
	t.assert(humanNames.isPersonName("Suzanna") == true);
	t.assert(humanNames.isPersonName("Shirley") == true);
	t.assert(humanNames.isPersonName("Jane") == true);
	t.assert(humanNames.isPersonName("JANE") == true);
	t.assert(humanNames.isPersonName("Jeroen") == true);
	// t.assert(humanNames.isPersonName("Marko") == true);
});

test(function (t) {

	var test1 = humanNames.parseNames("☎ ☎ Shirley TEL ☎ ☎ \n\n☎ ☎ 860 995 3542 ☎ ☎ \n** TEXT MESSAGE ONLY **\nHi, honey. Just send your address if you want me come to you now.\n\nOutcall special:\n\n$160 For 1 hour.\n$320 For 3 hour.\n$600 For Overnight.\n\n** NO BLOCKED CALLS ** \n** SERIOUS INQUIRIES ONLY ** \n\n** NO RAPIST **");
	console.log(test1);
	t.assert(test1.indexOf("Shirley") != -1);

	var test2 = humanNames.parseNames("Swing dancing special Jasmine wished Michael a happy birthday. Thanks Jasmine");
	console.log(test2);
	t.assert(test2.indexOf("Jasmine") != -1);
	t.assert(test2.indexOf("Michael") != -1);

	var test3 = humanNames.parseNames("Mario felt left out ever since he peaked early");
	console.log(test3);
	t.assert(test3.indexOf("Mario") != -1);

	var test4 = humanNames.parseNames("JANE from Maine!");
	console.log(test4);
	t.assert(test4.indexOf("Jane") != -1);

	var test5 = humanNames.parseNames("Jeroen is cool!");
	console.log(test5);
	t.assert(test5.indexOf("Jeroen") != -1);

	var test6 = humanNames.parseNames("Caroline, I am Paul");
	console.log(test6);
	t.assert(test6.indexOf("Caroline") != -1);
	t.assert(test6.indexOf("Paul") != -1);

	t.end();
});