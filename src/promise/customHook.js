import React, { useState } from "react";

async function apiFetch(lang, input, setPromiseInfoObject) { 
    let translate; 
    let weatherAndTimeAPI;
    let prayerTimesAPI; 
    if(lang === 'Farsi') {
        translate = await fetch(`https://api.mymemory.translated.net/get?q=${input}&langpair=fa|en`)
        translate = await translate.json();
        translate = translate.responseData.translatedText;
    }
    
    weatherAndTimeAPI = await fetch(`https://api.weatherapi.com/v1/current.json?key=cfc5f51acad248029ec185640232106&q=${translate ? translate : input}`);
    weatherAndTimeAPI = await weatherAndTimeAPI.json();
    
    prayerTimesAPI = await fetch(`https://api.aladhan.com/v1/timingsByAddress/22-08-2023?address=${translate ? translate : input}`);
    prayerTimesAPI = await prayerTimesAPI.json();
    console.log(prayerTimesAPI)

}


export function usePromiseInfo() {
    const [promiseInfoObj, setPromiseInfoObject] = useState({});
    const searchHandler = (e, input, lang) => {
        e.preventDefault();
        apiFetch(lang, input, setPromiseInfoObject);
    }

    return [promiseInfoObj, searchHandler]
}