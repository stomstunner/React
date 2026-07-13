import React, { useState, useRef, useEffect } from 'react'
import { useId } from 'react';


function InputBox({
    // so we are making the input components where first of all i will take the props from the app.jsx and use that changable variable to my inpurt card like mai app.jsx me input me lable chage karunga then amount change karnunga
    // and we make the onamountchange mathod like jab bhi ammount change hoga toh hamra ui me call hog aur ammount change ho jayega 
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOption = [],
    currencyNames = {}, 
    selectCurrency = 'usd',
    amountDisable = false,
    currencyDisable = false,

    
    className = "",
    // ye classname hamre pass app.jsx se aaeyga ki maan lo kuch css hamre pass app.jsx se bhi aa sakti hai toh uso bhi inject kar lo
}) {
   
// now we make the the unique id for amount - becuse we have many data so it provide a vinque id to each data 
    const amountInputId = useId();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Dropdown ke bahar click karne par list automatically close karne ke liye
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className={`bg-neutral-950/40 backdrop-blur-xl border border-white/5 p-5 rounded-2xl shadow-[0_25px_50px_-12px_rgba(0,0,0,0.7)] flex items-center justify-between transition-all duration-300 hover:border-white/10 group ${className}`}>
            
            {/* Input Section */}
            <div className="w-3/5 flex flex-col justify-start">
                <label  
                htmlFor={amountInputId}
                className="text-neutral-400 font-bold text-[10px] uppercase tracking-widest mb-2 inline-block opacity-60 group-hover:opacity-100 transition-opacity">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1 text-white font-semibold text-2xl tracking-wide placeholder:text-neutral-700 transition-all font-sans truncate focus:text-blue-400"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    // now we apply the onchange event ki jise hi hamra input section change ho toh ham ek fucntion  call karnege jo ki hamre onAmountChange pe laga hoga aur uska vlaue ko aayega// but sometime woh hame string seta hai toh direct hi ham usko Number me pass kar denge 
                    // and the syntax ki ager hamre pass Onamountchange hai toh hi hamre onamountchange ko call karna aur uske ander se event .argrt .value kar ke jo string aaye usse Number me change kar dena
                    onChange={(event) => onAmountChange && onAmountChange(Number(event.target.value))}
                />
            </div>

            {/* Custom UI Dropdown Wrapper */}
            <div className="w-2/5 flex flex-col items-end text-right relative" ref={dropdownRef}>
                <p className="text-neutral-400 font-bold text-[10px] uppercase tracking-widest mb-2 w-full opacity-60">Currency</p>
                
                {/* Custom Trigger Button */}
                <button
                    type="button"
                    disabled={currencyDisable}
                    onClick={() => setIsOpen(!isOpen)}
                    className="rounded-xl px-4 py-2 bg-white/5 text-white font-bold text-sm cursor-pointer border border-white/10 outline-none backdrop-blur-md shadow-inner transition-all hover:bg-white/10 hover:border-white/20 focus:border-blue-500/50 flex items-center gap-2 min-w-[75px] justify-between"
                >
                    {selectCurrency.toUpperCase()}
                    <svg 
                        className={`w-3 h-3 text-neutral-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
                        fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                    </svg>
                </button>

                {/* 
                  UI UPDATED:
                  1. `[&::-webkit-scrollbar]:w-2` se width ko thoda broad kiya hai clear readability ke liye.
                  2. Track aur thumb dono me `rounded-full` inject kar diya hai jisse upar aur niche se fully curved pill effect milega.
                */}
                {isOpen && (
                    <div className="absolute left-full ml-12 top-1/2 -translate-y-1/2 z-50 w-65 h-[70vh] overflow-y-auto bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_30px_60px_rgba(0,0,0,0.8)] border-l-blue-500/30 pr-1 [&::-webkit-scrollbar]:w-3 [&::-webkit-scrollbar-track]:bg-neutral-950/40 [&::-webkit-scrollbar-track]:rounded-xl [&::-webkit-scrollbar-thumb]:bg-linear-to-b [&::-webkit-scrollbar-thumb]:from-blue-600 [&::-webkit-scrollbar-thumb]:to-indigo-600 [&::-webkit-scrollbar-thumb]:rounded-xl hover:[&::-webkit-scrollbar-thumb]:from-blue-500 hover:[&::-webkit-scrollbar-thumb]:to-indigo-500">
                        {/* now we make the loop for the otion // rememeber the loops in react // so ham value me currecy daal denge aur key  is like the ittration ka i so key me bhi currency  daal denge */}
                        {currencyOption.map((currency) => (
                            <button
                                key={currency}
                                type="button"
                                onClick={() => {
                                    if(onCurrencyChange) onCurrencyChange(currency);
                                    setIsOpen(false);
                                }}
                                className={`w-full text-left px-5 py-3 text-xs font-bold tracking-wider rounded-2xl uppercase transition-all duration-150 border-b border-white/[0.02] last:border-0 flex items-center justify-between gap-3 ${
                                    selectCurrency === currency 
                                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md' 
                                    : 'text-neutral-400 hover:bg-white/5 hover:text-white hover:pl-6'
                                }`}
                            >
                                {/* Left Side: Currency Code */}
                                <span className={selectCurrency === currency ? 'text-white' : 'text-blue-400'}>
                                    {currency}
                                </span>
                                
                                {/* Right Side: Country Full Name */}
                                <span className="text-[10px] text-neutral-500 truncate text-right max-w-[150px] font-medium normal-case group-hover:text-neutral-300">
                                    {currencyNames[currency] || "Loading..."}
                                </span>
                            </button>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default InputBox;