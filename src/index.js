import React from 'react';
import ReactDOM from 'react-dom'
import './index.css'
import SessionDisplay from './SessionDisplay';
import Spinner from './Spinner';


class App extends React.Component {

    state = {
        lat: null,
        long: null,
        errorMessage: null
    }

    componentDidMount() {

        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                this.setState({
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                })
            },
            (error) => {
                this.setState({
                    errorMessage: error.message
                })
            }
        )
    }

    render() {

        if (this.state.errorMessage && (!this.state.lat || !this.state.long)) {
            return (
                <div className="ui negative message container">
                    <i className="close icon"></i>
                    <div className="header">
                        Error:
                    </div>
                    <p>{this.state.errorMessage}</p>
                </div>
            )
        }

        if (!this.state.errorMessage && this.state.lat && this.state.long) {

            return (
                <SessionDisplay lat={this.state.lat} long={this.state.long} />
            );
        }

        return (
            <Spinner />
        )
    }
}



ReactDOM.render(<App />, document.getElementById('root'));

