// Тон сообщения = (Кол-во положительных слов − Кол-во негативых слов) * 100 / Общее кол-во слов в тексте(за вычетом исключенных слов)
// И если тон < 0, то будет надписиь «Тон текста отрицательный», а если тон сообщения > 0, то «Тон текста положителен»?

take_result.addEventListener("click", () => {
    take_result.innerText = "👍🏻";
    setTimeout(back, 1000);

    const all_Words = countAllWords(targetText.value);
    const bad_Words = countWords(targetText.value, badWordsVocabulary);
    const good_Words = countWords(targetText.value, goodWordsVocabulary);
    const stop_Words = countWords(targetText.value, stopWordsVocabulary);
    const all_Wo_Stop_Words = all_Words.length - stop_Words;
    const ton = ((good_Words - bad_Words) * 100) / all_Words;

    allWords.innerText = all_Words.length;
    badWords.innerText = bad_Words;
    goodWords.innerText = good_Words;
    stopWords.innerText = stop_Words;
    allWoStopWords.innerText = all_Wo_Stop_Words;
    tonPlaceNumber.innerText = "(" + (Math.round(ton * 100) / 100).toFixed(2) + ")";

    if (ton > 0) {
        tonPlace.innerText = "положительный";
    } else tonPlace.innerText = "отрицательный";
});

// локальное сохранение текста 
targetText.value = localStorage.getItem('targetText');

targetText.oninput = () => {
  localStorage.setItem("targetText", targetText.value);
};
