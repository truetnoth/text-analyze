const targetText = document.querySelector(".text");

const allWords = document.querySelector(".all-words");
const badWords = document.querySelector(".bad-words");
const goodWords = document.querySelector(".good-words");
const tonPlace = document.querySelector(".ton");
const tonPlaceNumber = document.querySelector(".ton-number");

const take_result = document.querySelector(".take_result");

const countAllWords = (text) => { //считаем все слова в тексте
	return _.words(text)
		.filter(word => isNaN(word))
		.filter(word => word.length >= 2)
		.length;
};

const countWords = (text, vocabulary) => {
	const segments = Object.keys(vocabulary);
	const helperObject = segments.reduce((acc, value, idx) => ({...acc, [`counted_${idx + 1}`]: null}), {}) 
	const result = Object.keys(helperObject).map((key, idx) => [
		key,
		text.match(vocabulary[`vocabulary_${idx + 1}`]) === null
		? 0
		: text.match(vocabulary[`vocabulary_${idx + 1}`]).length,
	]);

	const arrayOfLengths = Object.values(Object.fromEntries(result));
	return arrayOfLengths.reduce((a, b) => a + b, 0);
}

const back = () => {
    take_result.innerText = "Посчитать";
};