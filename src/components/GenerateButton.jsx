import usePassword from "../hooks/usePassword";

export default function GenerateButton() {
    const { generatePassword } = usePassword();

    return (
        <button
            onClick={generatePassword}
            className="bg-slate-200 p-2 rounded-lg font-semibold text-black"
        >
            Generate
        </button>
    );
}