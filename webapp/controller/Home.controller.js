sap.ui.define([
	"com/saphanadev/school-ui/controller/BaseController"
], function (
	BaseController
) {
	"use strict";

	return BaseController.extend("com.saphanadev.school-ui.controller.Home", {

		onNavToCourse: function () {
			this.getRouter().navTo("course");
		},

		onNavToClassRoom: function(){
			this.getRouter().navTo("classroom");
		},

		onNavToClass: function(){
			this.getRouter().navTo("class");
		}

	});
});