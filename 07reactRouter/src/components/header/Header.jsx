
// now we import the link and navlink from react router link act as a <a> tag but link use karne se hamra page reload nahi hota hai bass jaha jaha dusra chiz chaiye woh badla jatha hai 
import { Link, NavLink } from 'react-router-dom';


export default function Header() {
    return (
        <header className="shadow sticky z-50 top-0">
            <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                    <Link 
                    to="/" 
                    className="flex items-center"
                    >
                        {/* so in link we use the to= for going to the link and any url // link is very diffrecnt from the <a> tag becaue it do not render the whole page and not refress the whole page  */}
                        <img
                            src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                            className="mr-3 h-12"
                            alt="Logo"
                        />
                    </Link>
                    {/* last section for login and get started  */}
                    <div className="flex items-center lg:order-2">
                        <Link
                            to="#"
                            className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Log in
                        </Link>
                        <Link
                            to="#"
                            className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                        >
                            Get started
                        </Link>
                    </div>
                    <div
                        className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                        id="mobile-menu-2"
                    >
                        <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                            <li>
                                {/* then we have this main navbar where all the home page about section appears and in the havlink we can render the It works like Link, but it can:
                                apply an active style/class when the current route matches
                                help show which page the user is on */}
                                <NavLink
                                // now we have to give the path where it goes if we click on it or it is being active 
                                // so we have the things called ? to jsime hame apna path denge ki abhi ham kaha hai usse kaha jana hai 
                                to="/"
                                // we jsut want to default
                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? " text-orange-700" : " text-gray-700 "}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    {/* so ham kis page pe active hai usee hisab se woh url me check kar ke css property ko chage kar sakta hai yaha pe ham isactive ka use kar rahe hai jisse pata kar sake ki ham abhi kis app pe hai aue ager ham abhi active pe hai toh uss ke relative me apne pe kya css rkahni hai  */}
                                    Home
                                </NavLink>
                            </li>
                            <li>
                               
                                <NavLink
                                to="/about"
                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? " text-orange-700" : " text-gray-700 "}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    
                                    About
                                </NavLink>
                            </li>
                            <li>
                                
                                <NavLink
                                to="/contactUs"
                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? " text-orange-700" : " text-gray-700 "}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                   
                                    Contact Us
                                </NavLink>
                            </li>
                            <li>
                                
                                <NavLink
                                to="/explore"
                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? " text-orange-700" : " text-gray-700 "}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    
                                    Explore
                                </NavLink>
                            </li>
                            <li>
                                
                                <NavLink
                                to="/github"
                                    className={({isActive}) => 
                                        `block py-2 pr-4 pl-3 duration-200  
                                        ${isActive ? " text-orange-700" : " text-gray-700 "}
                                        border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                    }
                                >
                                    
                                    Github
                                </NavLink>
                            </li>
                            
                            
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

