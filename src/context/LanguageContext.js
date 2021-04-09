import React, { useState, createContext } from 'react';

export const LanguageContext = createContext({});

function LanguageContextProvider({ children }) {
    const [language, toggleLanguage] = useState('nl')

    function setLanguageEs() {
        toggleLanguage('es')
    }

    function setLanguageNl() {
        toggleLanguage('nl')
    }

    const data = {
        activeLanguage: language,
        setEsFunction: setLanguageEs,
        setNlFunction: setLanguageNl,
    }


    return (
        <LanguageContext.Provider value={data}>
            {children}
        </LanguageContext.Provider>
    );
}

export default LanguageContextProvider;