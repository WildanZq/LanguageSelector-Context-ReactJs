import React from 'react';
import UserCreate from './UserCreate';

class App extends React.Component {
    state = { language: 'en' };

    onLanguageChange = language => {
        this.setState({ language });
    };

    render() {
        return (
            <div className="ui container">
                <div>
                    Select language:
                    <i onClick={() => { this.onLanguageChange('en') }} className="flag us"></i>
                    <i onClick={() => { this.onLanguageChange('id') }} className="flag id"></i>
                </div>
                <UserCreate />
            </div>
        );
    }
}

export default App;