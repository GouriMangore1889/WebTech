const inputText = document.querySelector('#input-text');
const outputText = document.querySelector('#output-text');
const buttonTranslate = document.querySelector('#btn-translate');
const sourceLang = document.querySelector('#source-lang');
const targetLang = document.querySelector('#target-lang');

const apiUrl = "https://api.mymemory.translated.net/get";

async function translateText() {
    const text = inputText.value.trim();

    if (!text) {
        alert("Enter text first");
        return;
    }

    const source = sourceLang.value;
    const target = targetLang.value;

    if (source === "auto") {
        alert("Auto detect not supported. Please select source language.");
        return;
    }

    try {
        const response = await fetch(
            `${apiUrl}?q=${encodeURIComponent(text)}&langpair=${source}|${target}`
        );

        const data = await response.json();

        if (!data.responseData) {
            throw new Error("Invalid response");
        }

        outputText.value = data.responseData.translatedText;

    } catch (error) {
        console.error("Translation error:", error);
        alert("API failed. Check console.");
    }
}

buttonTranslate.addEventListener("click", translateText);