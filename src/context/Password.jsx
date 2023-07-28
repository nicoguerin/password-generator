import { createContext, useState } from "react";
import { MIN_PASSWORD_LENGTH } from "../constants";

export const PasswordContext = createContext();

export default function PasswordProvider({ children }) {
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [passwordLength, setPasswordLength] = useState(MIN_PASSWORD_LENGTH);
    const [hasUppercase, setHasUppercase] = useState(true);
    const [hasLowercase, setHasLowercase] = useState(false);
    const [hasNumbers, setHasNumbers] = useState(false);
    const [hasSymbols, setHasSymbols] = useState(false);

    return (
        <PasswordContext.Provider value={{
            generatedPassword, setGeneratedPassword,
            passwordLength, setPasswordLength,
            hasUppercase, setHasUppercase,
            hasLowercase, setHasLowercase,
            hasNumbers, setHasNumbers,
            hasSymbols, setHasSymbols
        }}>
            {children}
        </PasswordContext.Provider>
    );
}