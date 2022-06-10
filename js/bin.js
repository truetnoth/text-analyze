const targetText = document.querySelector(".text");

const allWords = document.querySelector(".all-words");
const badWords = document.querySelector(".bad-words");
const goodWords = document.querySelector(".good-words");
const stopWords = document.querySelector(".stop-words");
const allWoStopWords = document.querySelector(".all-wo-stop-words");
const tonPlace = document.querySelector(".ton");
const tonPlaceNumber = document.querySelector(".ton-number");

const take_result = document.querySelector(".take_result");

const countWords = (str) => { //считаем все слова в тексте
    return str.trim().match(/\b\S+\b/gi);
};

const countGoodWords = (str) => { // считаем все позитивные слова в тексте
    let goodWordsCounted_1 = str.match(goodWordsVocabulary);
    if(goodWordsCounted_1 === null) {
        goodWordsCounted_1 = [];
    }
    
    return goodWordsCounted_1.length
};

const countBadWords = (str) => { // считаем все негативные слова в тексте
    const badWords = {
		counted_1: null,
		counted_2: null,
		counted_3: null,
	  };
	
	const result = Object.entries(badWords).map(([key, value], idx) => [
		key,
		str.match(badWordsVocabulary[`vocabulary_${idx + 1}`]) === null
		  ? 0
		  : str.match(badWordsVocabulary[`vocabulary_${idx + 1}`]).length,
	]);
	
	const arrayOfLengths = Object.values(Object.fromEntries(result));
	return arrayOfLengths.reduce((a, b) => a + b, 0);
}

const countStopWords = (str) => {
	const stopWords = {
		counted_1: null,
		counted_2: null,
		counted_4: null,
		counted_5: null,
		counted_6: null,
		counted_7: null,
		counted_8: null,
		counted_9: null,
		counted_10: null,
	};

	const result = Object.entries(stopWords).map(([key, value], idx) => [
		key,
		str.match(stopWordsVocabulary[`vocabulary_${idx + 1}`]) === null
		? 0
		: str.match(stopWordsVocabulary[`vocabulary_${idx + 1}`]).length,
	]);

	const arrayOfLengths = Object.values(Object.fromEntries(result));
	return arrayOfLengths.reduce((a, b) => a + b, 0);
}

const back = () => {
    take_result.innerText = "Посчитать";
};