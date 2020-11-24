import {useState, useEffect} from 'react';
import axios from "axios";

const url = 'https://api.urbandictionary.com/v0/define?term='

const useHint = (selectedWord) => {
    const [hint, setHint] = useState('');
    const fetchHint = async (selectedWord) => {
        const {data} = await axios.get(`${url}{${selectedWord}}`);
        let defs = data.list.filter(def => def.word.toLowerCase() === selectedWord || !def.definition.toString().includes(selectedWord));
        let hint = (defs[0].definition);
        setHint(hint);
    }
    // const definitions = data.list;
    // let definitions = data.list.filter(definition => definition.word.toLowerCase() === selectedWord);

    // definitions.forEach(definition => {
    //     meaning =definition.definition;
    // });
    useEffect(() => {
        fetchHint(selectedWord);
    });
    return {hint};
}

export default useHint;
