import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Page from '../components/Page';
import * as actions from '../actions/actions';
import * as detailActions from '../actions/detailActions';
import Details from '../components/Details';
import ui from 'redux-ui';

@ui({
    state : {
    }
})

class App extends Component {
	constructor(props) {
		super(props);
	}
	
	componentDidMount(){
		let url = 'https://davids-restaurant.herokuapp.com/categories.json';
		this.props.actions.getItems(url);
	}
	
	render() {
		console.log(this.props);
		const {
				page : { items }, 
				item : { menu_items },
				actions : {deletePageItem}, 
				detailActions : {getDetailsInfo},
				ownProps : { match : {params : { filter = '' }}},
				location : { query = {}}
		} = this.props;
		if (filter == 'details') {
			return (<Details short_name={query.short_name} 
							 id={query.id} 
								getDetailsInfo={getDetailsInfo} 
								menu_items={menu_items} />);
		}
		return (<div>
					<Page items={items} deletePageItem={deletePageItem} />
				</div>);
	}
}

const mapStateToProps = (state, ownProps) =>
	({
		page  : state.page,
		item  : state.item,
		ownProps
	})

const mapDispatchToProps = (dispatch) =>
	({
		actions : bindActionCreators(actions, dispatch),
		detailActions : bindActionCreators(detailActions, dispatch)
	})

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(App);

App.propTypes = {
	items : PropTypes.array,
	deletePageItem : PropTypes.func
};