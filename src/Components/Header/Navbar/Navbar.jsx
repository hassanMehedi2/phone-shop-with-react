import { NavLink } from "react-router-dom";
import Logo from "./Logo";


const Navbar = () => {
    return (
        <div>
            <nav>
                <div className="flex justify-between p-10 px-28">
                    <div>
                        <Logo></Logo>
                    </div>
                    <div>
                        <ul className="flex gap-8">
                            <li>
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-red-700" : ""
                                    }
                                > Home </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/favorite"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-red-700" : ""
                                    }
                                > Favorite </NavLink>
                            </li>
                            <li>
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "underline text-red-700" : ""
                                    }
                                > Login </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;