import React from 'react';

class Image extends React.Component {
    render() {
        return < img src={this.props.url} alt={this.props.alternativeText} />;
    }
}

export default Image;