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

function GetWebPage() {
    return(
        <div>
            <img src="aquana-pic.png" width="40px" alt="sorry"/>
            <h1>Welcome to this Page</h1>
            <p>This is my first react app. I love it so much because:</p>
            <ul>
                <li>It is a hirable skill</li>
                <li>It is well maintained</li>
                <li>It's error handling is good.</li>
                <li>It is a great skill to learn</li>
            </ul>
        </div>
    )
}

ReactDOM.render(<GetWebPage/>, document.getElementById("root"))








 //this defines where one wants to render the constant defined i.e. the nav bar
