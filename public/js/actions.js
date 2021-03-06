/*-------------------------------------------------------------------------------------------------------------------*\
 |  Copyright (C) 2015 PayPal                                                                                          |
 |                                                                                                                     |
 |  Licensed under the Apache License, Version 2.0 (the "License"); you may not use this file except in compliance     |
 |  with the License.                                                                                                  |
 |                                                                                                                     |
 |  You may obtain a copy of the License at                                                                            |
 |                                                                                                                     |
 |       http://www.apache.org/licenses/LICENSE-2.0                                                                    |
 |                                                                                                                     |
 |  Unless required by applicable law or agreed to in writing, software distributed under the License is distributed   |
 |  on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the License for  |
 |  the specific language governing permissions and limitations under the License.                                     |
 \*-------------------------------------------------------------------------------------------------------------------*/

var Dispatcher = require('./dispatcher');
var Constants = require('./constants');
var Actions = {

	addProduct: function(product) {
		Dispatcher.dispatch({
			actionType: Constants.PRODUCT_CREATE,
			product: product
		});
	},
	deleteProduct: function(product) {
		Dispatcher.dispatch({
			actionType: Constants.PRODUCT_DELETE,
			product: product
		});
	},
	addToCart: function(product) {
		Dispatcher.dispatch({
			actionType: Constants.CART_ADD,
			product: product
		});
	},
	initiatePayment: function(payInfo) {
		Dispatcher.dispatch({
			actionType: Constants.PAYMENT_INITIATE,
			payInfo: payInfo
		});
	}

};

module.exports = Actions;