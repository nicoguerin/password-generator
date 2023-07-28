import { useId } from "react";

export default function Selector({ value, setValue }) {
    const selectorId = useId();

    return (
        <div className="flex gap-5">
            <input
                type="checkbox"
                checked={value}
                id={selectorId}
                readOnly
                className="hidden"
            />
            <label
                htmlFor={selectorId}
                className={` w-14 h-7 rounded-full overflow-hidden p-1 flex items-center
                            ${value ? "bg-green-500" : "bg-red-500"} relative
                            transition-all`}
                onClick={() => setValue(!value)}
            >
                <div
                    className={`h-[80%] aspect-square rounded-full absolute 
                                ${value ? "bg-green-900 right-1" : "bg-red-900 left-1"}`}
                ></div>
            </label>
        </div>
    );
}