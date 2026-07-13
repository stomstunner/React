import { useEffect, useState } from "react";

function useCurrencyNames() {
    const [currencyNames, setCurrencyNames] = useState({});

    useEffect(() => {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies.json`)
            .then((response) => response.json())
            .then((response) => setCurrencyNames(response));
    }, []);

    return currencyNames;
}

export default useCurrencyNames;