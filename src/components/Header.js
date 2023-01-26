import React from "react";
import "./Header.css";


export default ({black}) => {
    return (
        <header className={black ? "black" : ""}>
            <div className="header--logo">
                <a href='/'>
                    <img src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg" alt="Netflix"></img>
                
                </a>
            </div>
            <div className="header--user">
                <a src='/'>
                    <img src="https://occ-0-1824-420.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABWdAPWT0Vb3Eth37phC9Wplk4PJYY04xKlrvLf6eD_pjXTNUMjeq7Q8DgqgYbj8qbJr-766Vmg-Z3YSsEOxObXKphMTFZd-A8g.png?r=bd7"></img>
                </a>
            </div>
        </header>
    )
}