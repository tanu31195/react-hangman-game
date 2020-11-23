import React from 'react';
// import {fetchDefinition} from "../helpers/helpers";

function Hint({selectedWord, wrongLetters}) {
    // const definition = fetchDefinition(selectedWord);
    const definition = 'def';
    const errors = wrongLetters.length;
    return (
        <>
        {errors > 3 && <p>Meaning of  {definition} </p>}
        </>
    );
}

export default Hint;
