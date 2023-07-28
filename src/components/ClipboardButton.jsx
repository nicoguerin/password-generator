import clipboardIcon from "../icons/clipboard.svg"
import usePassword from "../hooks/usePassword";

export default function ClipboardButton() {
    const { handleCopyPassword } = usePassword();

    return (
        <button onClick={handleCopyPassword}>
            <img
                src={clipboardIcon}
                alt="Clipboard icon"
                width={32}
                height={32}
                className="w-7"
            />
        </button>
    );
}