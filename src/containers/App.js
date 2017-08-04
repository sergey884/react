import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/Page';
import * as actions from '../actions/actions';

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		this.props.actions.getItems();
	}
	
	render() {
		console.log(this.props);
		const {page : { items }, actions : {deletePageItem} } = this.props;
		return (<div>
					<Page items={items} deletePageItem={deletePageItem} />
				</div>);
		}
}

const mapStateToProps = (state, ownProps) => {
	return {
		page  : state.page,
		ownProps
	};
}

const mapDispatchToProps = (dispatch) => {
	return {
		actions : bindActionCreators(actions, dispatch)
	}
}

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

App.propTypes = {
	items : PropTypes.array,
	deletePageItem : PropTypes.func
};