function Header() {
    return(
        <div>
            <header>
                <nav className="nav">
                    <img className="nav-logo" src="aquana-pic.png" alt="sorry" />
                    <ul className="nav-items">
                        <li>Pricing</li>
                        <li>About</li>
                        <li>Contact Us</li>
                    </ul>
                </nav>
            </header>
        </div>
    )
}


function MainContent(){
    return(
        <div className="content-body">
        <h1>Welcome to this Page</h1>
            <p>This is the Best Javascript Library</p>
            <ol>
                <li>It is a hirable skill</li>
                <li>It is well maintained</li>
                <li>It's error handling is good.</li>
                <li>It is a great skill to learn</li>
            </ol>
        </div>
    )
}

function Footer() {
    return(
        <div>
           <Header/>
            <MainContent />
            <footer className="footer-text">
               <small> © 2022 Mespa Developers. All Rights Reserved.</small>
            </footer>
        </div>
    )
}

ReactDOM.render(<Footer />,
    document.getElementById("root"))








 //this defines where one wants to render the constant defined i.e. the nav bar
