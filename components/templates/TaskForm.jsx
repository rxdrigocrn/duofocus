'use client';
import React, { useState } from "react";
import { Check } from "lucide-react";

const TaskForm = ({ type, onSubmit }) => {
    const [label, setLabel] = useState("");
    const [daily, setDaily] = useState(false);

    const isBody = type === "body";
    const icon = isBody ? <img src="bodyWhite.svg" className="text-white w-[36px]" /> : <img src="mindWhite.svg" className="text-white" />;
    const bgColor = isBody ? "bg-gradient-to-b from-[#FF6B6B] to-[#C86161]" : "bg-gradient-to-b from-[#4D96FF] to-[#3475D1]";
    const buttonTextColor = isBody ? "text-[#FF6B6B]" : "text-[#4D96FF]";

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!label.trim()) return;

        onSubmit({ label, daily });
        setLabel("");
        setDaily(false);
    };

    return (
        <div className="relative w-full p-4 max-w-[500px] mx-auto">
            <form
                onSubmit={handleSubmit}
                className={`relative rounded-xl p-4 md:p-8 h-auto md:h-[500px] lg:h-[500px] flex flex-col gap-4 md:gap-6 ${bgColor}`}
            >
                <div className="flex items-center gap-2 justify-center text-white text-xl md:text-2xl font-semibold">
                    {icon}
                    {isBody ? "Body" : "Mind"}
                </div>

                <input
                    type="text"
                    placeholder="Add a new task..."
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                    className="rounded-md border border-white bg-transparent text-white placeholder-white px-4 py-2 outline-none w-full"
                />

                <label className="flex items-center gap-2 text-white text-sm md:text-base">
                    <input
                        type="checkbox"
                        checked={daily}
                        onChange={() => setDaily(!daily)}
                        className="w-4 h-4 md:w-5 md:h-5 appearance-none border border-white rounded bg-transparent checked:bg-white checked:border-white checked:before:content-['✔'] checked:before:text-black checked:before:text-xs checked:before:flex checked:before:items-center checked:before:justify-center transition duration-300"
                    />
                    Daily task
                </label>

                <button
                    type="submit"
                    className="bg-white cursor-pointer mt-4 md:mt-0 md:absolute md:bottom-8 w-full md:w-auto md:left-1/2 md:-translate-x-1/2 text-center py-2 rounded-md font-medium flex items-center justify-center gap-2 px-4"
                >
                    <Check size={16} className={buttonTextColor} />
                    <span className={buttonTextColor}>Save task</span>
                </button>
            </form>
        </div>
    );
};

export default TaskForm;