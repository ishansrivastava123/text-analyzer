// import { Link } from "react-router-dom";

export default function Navbar(props) {
    return(
        <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
            <div className="container-fluid">
                <a className="navbar-brand" href="/" style={{display: "flex", marginLeft: "30px", fontSize: "1.5rem", textShadow: "0 0 15px red"}}>{props.title}</a>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="/ToggleStyle">About</a>
                    </li>
                    </ul>
                </div>
            </div>
            <div className="form-check form-switch my-2" style={{display: "inline", marginRight: "50px", width: "200px"}}>
                <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode} />
                <label className={`form-check-label text-${props.mode === "light" ? "dark" : "light"}`} htmlFor="flexSwitchCheckDefault">Enable Dark Mode</label>
            </div>
        </nav>
    )
}