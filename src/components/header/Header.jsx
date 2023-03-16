import React from "react"
import "./Header.css"
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <div className="header">
            <div className="header-left">
                <Link to="/"><img className="header-icon" src="https://preview.redd.it/vm78azttqi291.png?width=606&format=png&auto=webp&v=enabled&s=dea60d668dc1299e9ea23e197bfbc3d223967a4d" /></Link>
                <Link to="/movies/popular" style={{textDecoration:"none"}}><span>Popular</span></Link>
                <Link to="/movies/top_rated" style={{textDecoration:"none"}}><span>Top Rated</span></Link>
                <Link to="/movies/upcoming" style={{textDecoration:"none"}}><span>Upcoming</span></Link>
            </div>
        </div>
    )
}

export default Header