import React from 'react'; 

class Clock extends React.Component {
    constructor(props){
        super(props);
        this.state = {date: new Date()};
    }
    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            1000
        )
    }
    componentWillMount(){
        clearInterval(this.timerID):
    }
    tick(){
        this.setState({
            date: new Date()
        });
    }
    render(){
        return(
            <div>
                <h3>Time</h3>
                <h4>It this {this.state.date.toLocaleTimeString()}</h4>
            </div>
        );
    }
}

export default Clock;