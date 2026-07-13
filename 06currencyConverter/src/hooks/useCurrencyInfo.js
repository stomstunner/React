// here we make the custom hooks for our project because a hook is what a fucntion that return a array of a variable and a function 

import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
    const [data, setData] = useState({})
    // we passs the empty object to the use State me fetch nahi chalta hai toh bhi hamra system crash na kare 
    // so then key thing ki ham pahle tehn me toh ajson me convert kar rhae hai dusre then me ham json ko le ke uska data me set kar rhae hai based on the response me jo aaya hai aur uske currency // response ke baad dot ka bhi use kar sakte hai but ham ksi county ko select karte woh dikkate ho jata toh ham direct response aur jis currency ke liye call kiye the api ko usi curreny ka data likh denge 
    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`)
        .then((response)=> response.json() )
        .then(( response)=> setData(response[currency]))

    }, [currency])
    //use effect ko ham direct hi call kar denge isme 
    return data
}
export default useCurrencyInfo;

