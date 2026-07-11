import React from "react";

function Card({companyname = "ZOHO", btnText = "Explore" }) {

  // but sometime i want ko maan lo koi aadmi props send kiya but woh props me jo value hai woh usne bass ek card me hi likha toh .. variable bass ek me hi inject kiya aur pass kar diya toh ham chahate hai ki koi aissa default value ho ho har card me show kare ager usse card me jsx varibale inject hai tab bhi 
  // first approach ki ham{iske ander hi varibale ka naam then || or ka symbol likh ke kar sakte hai }

  // {companyname || "India"}
  //  but ye readeable nahi hai 
  // toh isse accah ham jab props ko handle kar rahe honege tab hi ham kuch defualt vlaue de denge 

  // {companyname = "India"} in the fucntion 

  // so ham yaha props ki help se app.jsx me jo variable card me inject hue hai usko ham use akr sakte hai 
  // but ham destrusture ka bhi use kar sakte hai 
  // jaisee 

  // let user = {
  //   name: 'ujjwal',
  //   class : 'bca'
  // }
  // const {name, class} = user
  // isse ham dot ke bina hi sab kuch use kar sakte hai  jaisee ki hame dekha 

  //  console.log(props);
   // so yaha pe ham props ke jagah pe ham deconstructor ka use kar sakte hai   
  return (
    <>
      <div className="max-w-sm overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">
        <img src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97" alt="Laptop" className="h-56 w-full object-cover" />

        <div className="p-6">
          <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">React</span>

          <h2 className="mt-4 text-2xl font-bold text-gray-800">{companyname}</h2>
    {/* so just have to injec the varibale name in the place where we want to show the variable injection from the jsx element */}

          <p className="mt-2 text-gray-600">Build beautiful and responsive components using React and Tailwind CSS.</p>

          <button className="mt-6 w-full rounded-xl bg-blue-600 py-3 font-semibold text-white transition hover:bg-blue-700 active:scale-95">{btnText}</button>
        </div>
      </div>
    </>
  );
}

export default Card;
