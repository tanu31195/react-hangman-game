import React from 'react';
import useHint from "../hooks/useHint";

function Hint({selectedWord}) {
    const { hint } = useHint(selectedWord);
    return (
        <>
        <p>Meaning is {hint} </p>
        </>
    );
}

export default Hint;
