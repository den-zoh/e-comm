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
import Header from "./Header"
import MainContent from "./MainContent"
import Footer from "./Footer"


function App(){
    return(
        <div>
        <Header/>
        <MainContent />
        <Footer/>
        </div>
    )
}

ReactDOM.render(<App />,
    document.getElementById("root"))








 //this defines where one wants to render the constant defined i.e. the nav bar
