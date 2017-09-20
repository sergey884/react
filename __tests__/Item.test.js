import React, { Component } from "react";
import { shallow, render, mount } from "enzyme";
import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import Item from "<components>/Item";

let middleware = [ thunk ];
let mockStore = configureStore(middleware);

describe("Test App containers", () => {
	it("Simulate click in button", () => {
		const store = mockStore({});
		const myMock = jest.fn();
		let props = {
			item : {
				id : 1,
				name : "Test Item",
				short_name : "TI"
			},
			deletePageItem : myMock
		};
		let wrapper = shallow(<Item {...props} />);
		expect(wrapper.find('button').length).toEqual(1);
		wrapper.find('button').simulate('click');
		expect(myMock.mock.calls.length).toBe(1);
	});
});