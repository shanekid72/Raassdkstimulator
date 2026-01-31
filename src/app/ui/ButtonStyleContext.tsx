import { createContext, useContext, ReactNode } from 'react';

interface ButtonStyleContextValue {
    skeuomorphic: boolean;
}

const ButtonStyleContext = createContext<ButtonStyleContextValue>({ skeuomorphic: false });

export function ButtonStyleProvider({ skeuomorphic, children }: { skeuomorphic: boolean; children: ReactNode }) {
    return (
        <ButtonStyleContext.Provider value={{ skeuomorphic }}>
            {children}
        </ButtonStyleContext.Provider>
    );
}

export function useButtonStyle() {
    return useContext(ButtonStyleContext);
}
