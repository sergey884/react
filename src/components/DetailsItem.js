'use strict';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class DetailsItem extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        const { id, name } = this.props;
        return (
            <li key={id} >{id}, {name}</li>
        );
    }
}

DetailsItem.propTypes = {
    id : PropTypes.number.isRequired,
    name : PropTypes.string.isRequired
};

export default DetailsItem;