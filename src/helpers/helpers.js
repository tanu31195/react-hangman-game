import axios from "axios";

export function showNotification(setter) {
    setter(true);
    setTimeout(() => {
        setter(false);
    }, 2000);
}

export function checkWin(correct, wrong, word) {
    let status = 'win';

    word.split('').forEach(letter => {
        if (!correct.includes(letter)) {
            status = '';
        }
    });

    if (wrong.length === 6) status = 'lose';

    return status;
}

export function fetchDefinition(selectedWord) {
    const url = 'https://api.urbandictionary.com/v0/define?term='
    let meaning = '';
    // const fetch = async (selectedWord) => {
    //     const {data} = await axios.get(`${url}{${selectedWord}}`);
    //     console.log(data);
    // }
    // const definitions = data.list;
    // let definitions = data.list.filter(definition => definition.word.toLowerCase() === selectedWord);

    // definitions.forEach(definition => {
    //     meaning =definition.definition;
    // });
    return meaning;
}
