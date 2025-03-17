"use client";

import { createContext, useState } from "react";

export const ValueContext = createContext(null);

export function ValueProvider({ children }){
    const [showValues, setShowValues] = useState(false);

    return (
        <ValueContext.Provider value={ {showValues, setShowValues} }>
            {children}
        </ValueContext.Provider>
    );
}