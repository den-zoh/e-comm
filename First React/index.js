// const page = (<nav>
//                     <img src="aquana-pic.png" width="40px" />
//                     <h1 className="header">Aquana</h1>
//                     <ul>
//                         <li>Menu</li>
//                         <li>About</li>
//                         <li>Contact</li>
//                     </ul>
//                         <h2>We are happy you are using React JS.</h2>
//                         <p>Welcome to React</p>
//                     </nav>);

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
            <footer className="footer-text">
               <small> © 2022 Mespa Developers. All Rights Reserved.</small>
            </footer>
        </div>
    )
}

function Page(){
    return(
        <div>
        <Header/>
        <MainContent />
        <Footer/>
        </div>
    )
}

ReactDOM.render(<Page />,
    document.getElementById("root"))








 //this defines where one wants to render the constant defined i.e. the nav bar
