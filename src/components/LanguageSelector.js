import React from 'react';

class LanguageSelector extends React.Component {
    render() {
        return (
            <div>
                Select language:
                <i onClick={() => { this.props.onLanguageChange('en') }} className="flag us"></i>
                <i onClick={() => { this.props.onLanguageChange('id') }} className="flag id"></i>
            </div>
        );
    }
}

export default LanguageSelector;