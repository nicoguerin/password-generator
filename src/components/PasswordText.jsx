import usePassword from "../hooks/usePassword";

export default function PasswordText() {
    const { generatedPassword, formatPassword } = usePassword();

    return (
        <span className="w-full text-sm sm:text-base font-medium text-ellipsis whitespace-nowrap overflow-hidden flex items-center gap-3">
            {generatedPassword.length === 0 ? "Generate your new password" : formatPassword(generatedPassword)}
        </span>
    );
}