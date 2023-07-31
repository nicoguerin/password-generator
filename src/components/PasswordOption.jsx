export default function PasswordOption({ children }) {
    return (
        <div className="flex justify-between items-center gap-4 w-full sm:w-[45%] md:w-[50%] text-sm sm:text-base">
            {children}
        </div>
    );
}