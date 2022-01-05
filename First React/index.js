const navbar = (<nav>
                    <h1 className="header">Aquana</h1>
                    <ul>
                        <li>Menu</li>
                        <li>About</li>
                        <li>Contact</li>
                    </ul>
                        <p>Welcome to React</p>
                    </nav>)

ReactDOM.render(navbar,
document.getElementById("root") //this defines where one wants to render the constant defined i.e. the nav bar
)
