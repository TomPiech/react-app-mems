import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { MemsWrapper } from './../components/MemItem'

export class Regular extends Component {
    render() {
        const items = this.props.memes.filter(m => m.upvotes - m.downvotes <= 5);
        return (
            <div>
                <MemsWrapper memes={items}
                    handleEventUp={this.props.handleEventUp}
                    handleEventDown={this.props.handleEventDown} />
            </div>
        );
    }
}

Regular.propTypes = {
    memes: PropTypes.array,
    handleEventUp: PropTypes.func,
    handleEventDown: PropTypes.func
};
