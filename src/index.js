import React    from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            lat: null,
            errorMsg: 'Could not establish your location',
            month: null
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => {
                this.setState({lat: 'NOT ESTABLISHED'})
                alert(this.state.errorMsg);
            }
        );

        this.setState({month: new Date().getMonth()});
    }

    render () {
        return (
            <SeasonDisplay lat={this.state.lat} month={this.state.month}/>
        )
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
