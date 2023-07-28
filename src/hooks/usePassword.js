import { useContext } from "react";
import { toast } from "react-hot-toast";
import { PasswordContext } from "../context/Password";
import { LOWERCASE, MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH, NUMBERS, SYMBOLS, UPPERCASE } from "../constants";

export default function usePassword() {
    const { generatedPassword, setGeneratedPassword, passwordLength, setPasswordLength,
        hasUppercase, setHasUppercase, hasLowercase, setHasLowercase, hasNumbers, setHasNumbers,
        hasSymbols, setHasSymbols } = useContext(PasswordContext);

    const handleCopyPassword = () => {
        if (generatedPassword.trim() === '') return toast.error("Error copying password to clipboard");

        window.navigator.clipboard.writeText(generatedPassword);
        toast.success("Password copied to clipboard");
    }

    const handleChangePasswordLength = (e) => {
        let newVal = e.target.value;
        if (newVal < MIN_PASSWORD_LENGTH) return;
        if (newVal > MAX_PASSWORD_LENGTH) return;
        setPasswordLength(newVal);
    }

    const generatePassword = (e) => {
        e.preventDefault();

        let possibleCharacters = "";
        if (hasUppercase) possibleCharacters += UPPERCASE;
        if (hasLowercase) possibleCharacters += LOWERCASE;
        if (hasNumbers) possibleCharacters += NUMBERS;
        if (hasSymbols) possibleCharacters += SYMBOLS;

        if (possibleCharacters.length === 0) return toast.error('Select at least 1 option')

        let newPassword = '';
        for (let i = 0; i < passwordLength; ++i) {
            let randomIndex = Math.round(Math.random() * (possibleCharacters.length - 1));
            newPassword += possibleCharacters[randomIndex];
        }
        setGeneratedPassword(newPassword);  
    }

    const formatPassword = (password) => {
        if (password.length<=15) return password;
        return password.slice(0, 15) + '...';
    }

    return {
        generatedPassword, passwordLength, hasUppercase, setHasUppercase,
        hasLowercase, setHasLowercase, hasNumbers, setHasNumbers,
        hasSymbols, setHasSymbols, handleCopyPassword, handleChangePasswordLength,
        generatePassword, formatPassword
    }
}