import React from "react";
// for header we need container logoutbtn and  logo
import { LogoutBtn, Logo, Container } from "../index";

// we need the link
import { Link } from "react-router-dom";
// we need selector kyuki ham usse hi dekh sakte hai ki user login hai ya nahi store se check karne ke liye
import { useSelector } from "react-redux";

// for naviate
import { useNavigate } from "react-router-dom";

function Header() {
  // lets make the varibel that chekc the auth status feom the store jo ki ham dehnge authslice se
  const authStatus = useSelector((state) => state.auth.status);

  // like we make the diapstch we use the naviagate for naviate
  const naviagate = useNavigate();

  // so we make a raay ki hame ager navigation baar me kuch butoon ko add akrna ho toh bass ham array ke ander ham object baana ke add kar denge // ye banane ke piche ye kaam hai ki ham bass ispe ittrate akr sakte hai

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signup",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  // so ham displacy ka system bana rahe hai ki ager hamra item active hai toh show karo nahi ahi toh nahi show akro 

  return (
    <header className="py-3 shadow bg-gray-500">
          {/* ab isi ke adner ham container banaynge jiske ander hi navbar hoga aur usi me ham loop laga ke list bana ke navitems ko dikha denge  */}

          <Container>
            <nav className="flex ">
              <div className="mr-4">
                {/* ab ham yaha pe logo lagayenge link ke ander  */}
                <Link to="/">
                  <Logo width="70px"/>
                </Link>
              </div>

              {/* ab ham ek unoudered list ke adner loop laga denge  */}
              <ul className="flex ml-auto ">

                {/* here we apply the lop on navitems, yaad rekhne ki ham loop langenge jo chiz repeat hogi use ki hamre navitem ki id name hogi */}

                {navItems.map( (item) => (
                  item.active ? 
                    <li
                      key={item.name}
                    >
                      {/* ab ham banayenge ek button jo sara navigation wala kaam karega, and we write some property for button ki ager onclick hota hai toh kya karenge, and on click pe ham naviagete ko call karnege jo ki bass , naviagete karege items ke slug ka jo naam hai uss pe   */}

                      <button
                      className="inline-block px-6 py-2 duration-200 hover:bg-blue-100 rounded-full"
                        onClick={()=> naviagate(item.slug)}
                      >

                      {item.name}
                      
                      </button>

                    </li>
                  : null
                ))}

                {/* now we want to show the authstatus ki ham usi hisab se apna logout button dikhayenge  // isme ham ek naya syntax dekhenge ki {authstatus && ()} // iska matlab hai ki ager hamara authstatus true hoga tabhi hamra && iske baad wla code chalega  */}

                {authStatus && (
                  <li>
                    <LogoutBtn/>
                  </li>
                )}

              </ul>
            </nav>
          </Container>

    </header>
  )
}

export default Header;
