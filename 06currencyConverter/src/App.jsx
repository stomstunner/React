import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import bgImage from './assets/Gemini_Generated_Image_7pnzb17pnzb17pnz.png'
import useCurrencyNames from './hooks/useCurrencyNames';


function App() {

  // now we make the hooks 
  const [amount, setAmount] = useState(0)
  // now we make the state for from and to 
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  // now we make the state for converted amount 
  const [convertedAmount, setConvertedAmount] = useState(0)

  // now we store the all the currency information in a variable that has all the data and we use it from the custom hook
  const currencyInfo = useCurrencyInfo(from) // from me hamra desh ka naam hai 

  // then ham object ke keys ko ek variable me store kanrege 
  const options = Object.keys(currencyInfo)
  // ham currencty info me sare data ke adner se key ko options me shows kar denge 

  // now we make fucntion for swap of inr to usd and usd to inr 
  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  // now we make a fcntion that will work for convertion on currency jo ki to me likha hua hai aur jo amount user ne dala hai 

  const convert = ()=>{
    setConvertedAmount(amount * currencyInfo[to])
  }

  // 2. Yahan hook ko call karein
    const allCurrencyNames = useCurrencyNames();


  return (
    <div
        className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-center"
        style={{
            backgroundImage: `url(${bgImage})`,
        }}
    >
        <div className="w-full">
            {/* Main Outer Container: Glassmorphism Card Wrapper */}
            <div className="w-full max-w-md mx-auto border border-white/10 rounded-3xl p-6 backdrop-blur-2xl bg-neutral-950/40 shadow-[0_30px_100px_rgba(0,0,0,0.8)]">
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        convert();
                    }}
                >
                    {/* "From" Input Field */}
                    <div className="w-full mb-3">
                        <InputBox
                            label="From"
                            amount={amount}
                            currencyNames={allCurrencyNames}
                            currencyOption={options}
                            onCurrencyChange={(currency) => setFrom(currency)}
                            selectCurrency={from}
                            onAmountChange={(amount) => setAmount(amount === 0 ? "" : amount)}
                        />
                    </div>

                    {/* Highly Aesthetic Floating Swap Icon (Properly Layered on Top) */}
                    <div className="relative w-full h-0">
                        <button
                            type="button"
                            className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 border border-white/10 rounded-full bg-neutral-900/90 text-white p-3 shadow-[0_0_20px_rgba(59,130,246,0.3)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] hover:bg-neutral-800 hover:border-blue-500/40 active:scale-95 flex items-center justify-center group"
                            onClick={swap}
                            title="Swap Currencies"
                        >
                            {/* Premium Minimalistic Double Arrow Swap SVG Icon */}
                            <svg 
                                xmlns="http://www.w3.org/2000/svg" 
                                width="18" 
                                height="18" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2.5" 
                                strokeLinecap="round" 
                                strokeLinejoin="round" 
                                className="transition-transform duration-500 group-hover:rotate-180 text-blue-400"
                            >
                                <path d="m3 16 4 4 4-4"/>
                                <path d="M7 20V4"/>
                                <path d="m21 8-4-4-4 4"/>
                                <path d="M17 4v16"/>
                            </svg>
                        </button>
                    </div>

                    {/* "To" Input Field */}
                    <div className="w-full mt-3 mb-6">
                        <InputBox
                            label="To"
                            amount={convertedAmount}
                            currencyOption={options}
                            currencyNames={allCurrencyNames}
                            onCurrencyChange={(currency) => setTo(currency)}
                            selectCurrency={to}
                            amountDisable
                        />
                    </div>

                    {/* Premium Cyber Glow Convert Button (Password Generator Vibe) */}
                    <button 
                        type="submit" 
                        className="w-full relative group overflow-hidden bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-4 px-6 rounded-2xl font-bold uppercase tracking-widest text-xs shadow-[0_0_30px_rgba(79,70,229,0.3)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(79,70,229,0.6)] hover:brightness-110 active:scale-[0.98]"
                    >
                        {/* Shimmer/Reflective light effect on hover */}
                        <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]" />
                        
                        <span className="relative z-10 flex items-center justify-center gap-2">
                            Convert {from.toUpperCase()} → {to.toUpperCase()}
                        </span>
                    </button>
                </form>
            </div>
        </div>
    </div>
);
}

export default App
