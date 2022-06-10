const targetText = document.querySelector(".text");

const allWords = document.querySelector(".all-words");
const badWords = document.querySelector(".bad-words");
const goodWords = document.querySelector(".good-words");
const stopWords = document.querySelector(".stop-words");
const allWoStopWords = document.querySelector(".all-wo-stop-words");
const tonPlace = document.querySelector(".ton");
const tonPlaceNumber = document.querySelector(".ton-number");

const take_result = document.querySelector(".take_result");

const countAllWords = (str) => { //считаем все слова в тексте
    return str.trim().match(/\b\S+\b/gi);
};

const countWords = (str, vocabulary) => {
	const segments = Object.keys(vocabulary);
	const helperObject = segments.reduce((acc, value, idx) => ({...acc, [`counted_${idx + 1}`]: null}), {}) 
	const result = Object.keys(helperObject).map((key, idx) => [
		key,
		str.match(vocabulary[`vocabulary_${idx + 1}`]) === null
		? 0
		: str.match(vocabulary[`vocabulary_${idx + 1}`]).length,
	]);

	const arrayOfLengths = Object.values(Object.fromEntries(result));
	return arrayOfLengths.reduce((a, b) => a + b, 0);
}

const back = () => {
    take_result.innerText = "Посчитать";
};