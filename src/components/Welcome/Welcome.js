
import React from 'react'; 
import logo from '../../logo.svg'
import Btn from '../Button/Button'
import '../../App.css'

class Message extends React.Component{
    render(){
        return(
            <h3>No puedes, {this.props.text}</h3>
        )
    }
}

class Welcome extends React.Component {
    render(){
        return(
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>
                        Edit <code>src/App.js</code> and save to reload.
                    </p>
                    <div>
                        <Message text="Jajaja" />
                        <Message text="Jajajaja" />
                        <Message text="Jajajajaja" />
                    </div>
                    <Btn 
                        name="Learn more"
                        link="https://reactjs.org"
                    />
                </header>
            </div>
        );
    }
}

export default Welcome;