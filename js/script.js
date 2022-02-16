// Тон сообщения = (Кол-во положительных слов − Кол-во негативых слов) * 100 / Общее кол-во слов в тексте(за вычетом исключенных слов)
// И если тон < 0, то будет надписиь «Тон текста отрицательный», а если тон сообщения > 0, то «Тон текста положителен»?

let targetText = document.querySelector(".text");

let allWords = document.querySelector(".all-words");
let badWords = document.querySelector(".bad-words");
let goodWords = document.querySelector(".good-words");
let stopWords = document.querySelector(".stop-words");
let allWoStopWords = document.querySelector(".all-wo-stop-words");
let tonPlace = document.querySelector(".ton");

let take_result = document.querySelector(".take_result");

let back = function () {
    take_result.innerText = "Посчитать";
};

take_result.addEventListener("click", function(){
    take_result.innerText = "👍🏻";
    setTimeout(back, 1000);

    let all_Words = countWords(targetText.value);
    let bad_Words = countBadWords(targetText.value);
    let good_Words = countGoodWords(targetText.value);
    let stop_Words = countStopWords(targetText.value);
    let all_Wo_Stop_Words = all_Words.length - stop_Words;
    let ton = ((good_Words - bad_Words) * 100) / all_Wo_Stop_Words;

    allWords.innerText = all_Words.length;
    badWords.innerText = bad_Words;
    goodWords.innerText = good_Words;
    stopWords.innerText = stop_Words;
    allWoStopWords.innerText = all_Wo_Stop_Words;

    if(ton > 0) {
        tonPlace.innerText = "Тон текста положителен";
    } else tonPlace.innerText = "Тон текста отрицателен";
});

function countWords(str) { //считаем все слова в тексте
    return str.trim().split(/\s+/gi);
};

function countBadWords(str) { // считаем все негативные слова в тексте
    let badWordsCounted_1 = str.match(badWordsVocabulary_1);
    let badWordsCounted_2 = str.match(badWordsVocabulary_2);
    let badWordsCounted_3 = str.match(badWordsVocabulary_3);

    if(badWordsCounted_1 === null) {
        badWordsCounted_1 = [];
    }
    if(badWordsCounted_2 === null) {
        badWordsCounted_2 = [];
    }
    if(badWordsCounted_3 === null) {
        badWordsCounted_3 = [];
    }

    return badWordsCounted_1.length + badWordsCounted_2.length + badWordsCounted_3.length;
}

function countGoodWords(str) { // считаем все позитивные слова в тексте
    let goodWordsCounted_1 = str.match(goodWordsVocabulary);
    if(goodWordsCounted_1 === null) {
        goodWordsCounted_1 = [];
    }
    
    return goodWordsCounted_1.length
};

function countStopWords(str) { // считаем все стоп-слова в тексте
    let stopWordsCounted_1 = str.match(stopWordsVocabulary_1);
    let stopWordsCounted_2 = str.match(stopWordsVocabulary_2);
    let stopWordsCounted_3 = str.match(stopWordsVocabulary_3);
    let stopWordsCounted_4 = str.match(stopWordsVocabulary_4);
    let stopWordsCounted_5 = str.match(stopWordsVocabulary_5);
    let stopWordsCounted_6 = str.match(stopWordsVocabulary_6);
    let stopWordsCounted_7 = str.match(stopWordsVocabulary_7);
    let stopWordsCounted_8 = str.match(stopWordsVocabulary_8);
    let stopWordsCounted_9 = str.match(stopWordsVocabulary_9);
    let stopWordsCounted_10 = str.match(stopWordsVocabulary_10);
    
    if(stopWordsCounted_1 === null) {
        stopWordsCounted_1 = [];
    }
    if(stopWordsCounted_2 === null) {
        stopWordsCounted_2 = [];
    }
    if(stopWordsCounted_3 === null) {
        stopWordsCounted_3 = [];
    }
    if(stopWordsCounted_4 === null) {
        stopWordsCounted_4 = [];
    }
    if(stopWordsCounted_5 === null) {
        stopWordsCounted_5 = [];
    }
    if(stopWordsCounted_6 === null) {
        stopWordsCounted_6 = [];
    }
    if(stopWordsCounted_7 === null) {
        stopWordsCounted_7 = [];
    }
    if(stopWordsCounted_8 === null) {
        stopWordsCounted_8 = [];
    }
    if(stopWordsCounted_9 === null) {
        stopWordsCounted_9 = [];
    }
    if(stopWordsCounted_10 === null) {
        stopWordsCounted_10 = [];
    }

    return stopWordsCounted_1.length + stopWordsCounted_2.length + stopWordsCounted_3.length + stopWordsCounted_4.length + stopWordsCounted_5.length + stopWordsCounted_6.length + stopWordsCounted_7.length + stopWordsCounted_8.length + stopWordsCounted_9.length + stopWordsCounted_10.length 
}

// локальное сохранение текста 
targetText.value = localStorage.getItem('targetText');

targetText.oninput = () => {
  localStorage.setItem("targetText", targetText.value);
};
