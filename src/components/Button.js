import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component {
    renderSubmit(value) {
        return value === 'en' ? 'Submit' : 'Tambah';
    }

    render() {
        return (
            <button className="ui button primary">
                <LanguageContext.Consumer>
                    {value => this.renderSubmit(value)}
                </LanguageContext.Consumer>
            </button>
        );
    }
}

export default Button;