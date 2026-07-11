## so here we see ki kaisse ham componets banate hai

// samjse pahel ham ek folder banayenge componets naam ka
// then ham usme ek .jsx kaam ka file banayenge aur uske ander simple
`import React from 'react'`
// then ham wohi simple sa return function banayenge then apne fucntion ko export kar denge

```jsx
import React from "react";

function Card() {
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Laptop" className="h-56 w-full object-cover" />

        <div className="p-6">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">React</span>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">Modern Card UI</h2>

          <p className="mt-2 text-gray-600">Build beautiful and responsive components using React and Tailwind CSS.</p>

          <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95">Explore</button>
        </div>
      </div>
    </>
  );
}

export default Card;
```


