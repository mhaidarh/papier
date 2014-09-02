/*global papier */
'use strict';

/**
 * Services that persists and retrieves TODOs from localStorage
*/
papier.factory('todoStorage', function () {
	var STORAGE_ID = 'todos-papier';

	return {
		get: function () {
			return JSON.parse(localStorage.getItem(STORAGE_ID) || '[]');
		},

		put: function (todos) {
			localStorage.setItem(STORAGE_ID, JSON.stringify(todos));
		}
	};
});

