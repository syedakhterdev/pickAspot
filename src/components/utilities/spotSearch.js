import React, { Component } from 'react';
import { connect } from 'react-redux';

class SportSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            address: {}
        }
    }

    handleChange(e) {
        this.setState(
            { value: e.target.value }
        );
    }
    render() {
        const { handleSubmit, address } = this.props;
        return (
            <form className="search-spaot mt-5" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" className="form-control" placeholder={address ? address : "Type here to find your spot..."} onChange={(e) => this.handleChange(e)} />
                <button className="btn btn-primary" type="submit">Pick My Spot</button>
            </form>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        address: state.stateReserve.address
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(SportSearch);