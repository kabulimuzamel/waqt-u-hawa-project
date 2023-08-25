import React, { useState } from "react";
import { usePromiseInfo } from "../promise/customHook";

export function Input () {
    const [input, setInput] = useState();
    const [lang, setLang] = useState('English');
    const [promiseInfoObj, searchHandler] = usePromiseInfo();


    return (
        <div>
            <button onClick={(() => setLang('Farsi'))}>
                Farsi
            </button>
            <button onClick={(() => setLang('English'))}>
                English
            </button>
            <form>
                <input onChange={(e) => setInput(e.target.value)}/>
                <button onClick={e => searchHandler(e, input, lang)}>Search</button>
            </form>
            {/* <div>
                {Object.keys(promiseInfoObj).length && promiseInfoObj}
            </div> */}
        </div>
    )
}