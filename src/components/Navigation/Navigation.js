import "./Navigation.scss";
import {Link, NavLink, Outlet} from "react-router-dom";
import React, {useContext} from "react";

function Navigation() {
    return (
        <div>
            <nav className="nav-bar">
                <div className="home-link">
                    <Link to="/">
                        <p>
                            <b>Home</b>
                        </p>
                    </Link>
                </div>

                <div className="nav-links">
                    <Link to="/signup">
                        <p>
                            <b>
                                Sign up
                            </b>
                        </p>
                    </Link>


                    <Link to="/login">
                        <p>
                            <b>
                                Log in
                            </b>

                        </p>
                        </Link>

                </div>
            </nav>

            <Outlet/>
        </div>
    );
}

export default Navigation;
