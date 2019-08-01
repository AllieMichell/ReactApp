import React from 'react'; 
import ReactDOM from 'react-dom'; 
import Button from '@material-ui/core/Button'

class Btn extends React.Component {
    render(){
        return (
            <Button variant="outlined" href={this.props.link} color="primary">
                {this.props.name}
            </Button>
        );
    }
}

export default Btn;