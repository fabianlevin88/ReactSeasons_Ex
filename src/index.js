import React         from 'react';
import ReactDOM      from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner       from './Spinner';
import ErrorPage     from './ErrorPage';

class App extends React.Component {
    
    constructor(props) {
        super(props);

        this.state = { 
            lat: null,
            errorMsg: null,
            month: null
        };
    }

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState({lat: position.coords.latitude}),
            err => {
                this.setState({errorMsg: err.message})
            }
        );
        this.setState({month: new Date().getMonth()});
    }

    renderContent() {
        if(this.state.errorMsg && !this.state.lat) {
            return <ErrorPage errorMsg={this.state.errorMsg} />;
        }
        
        if(!this.state.errorMsg && this.state.lat) {
            return <SeasonDisplay lat={this.state.lat} month={this.state.month}/>;
        }
        
        return <Spinner message="Establishing location"/>
    }

    render () {
        return (
            <div>
                {this.renderContent()}    
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
