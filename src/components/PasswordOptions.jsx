import OptionTitle from "./OptionTitle";
import Selector from "./Selector";
import usePassword from "../hooks/usePassword";
import { MAX_PASSWORD_LENGTH, MIN_PASSWORD_LENGTH } from "../constants";
import PasswordOption from "./PasswordOption";

export default function PasswordOptions() {
    const { passwordLength, handleChangePasswordLength, hasUppercase, setHasUppercase,
        hasLowercase, setHasLowercase, hasNumbers, setHasNumbers, hasSymbols, setHasSymbols } = usePassword();

    return (
        <>
            <PasswordOption>
                <label htmlFor="lengthInput">
                    <OptionTitle>Length</OptionTitle>
                </label>
                <input
                    id="lengthInput"
                    type="number"
                    value={passwordLength}
                    min={MIN_PASSWORD_LENGTH}
                    max={MAX_PASSWORD_LENGTH}
                    onChange={handleChangePasswordLength}
                    className="text-center rounded-md font-bold text-lg"

                />
            </PasswordOption>
            <PasswordOption>
                <OptionTitle>Uppercase </OptionTitle>
                <Selector
                    value={hasUppercase}
                    setValue={setHasUppercase}
                />
            </PasswordOption>
            <PasswordOption>
                <OptionTitle>Lowercase</OptionTitle>
                <Selector
                    value={hasLowercase}
                    setValue={setHasLowercase}
                />
            </PasswordOption>
            <PasswordOption>
                <OptionTitle>Numbers</OptionTitle>
                <Selector
                    value={hasNumbers}
                    setValue={setHasNumbers}
                />
            </PasswordOption>
            <PasswordOption>
                <OptionTitle>Symbols</OptionTitle>
                <Selector
                    value={hasSymbols}
                    setValue={setHasSymbols}
                />
            </PasswordOption>
        </>
    );
}