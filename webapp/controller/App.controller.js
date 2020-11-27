sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
], function (Controller, MessageToast) {
	"use strict";

	return Controller.extend("sap.ui.demo.walkthrough.controller.App", {

		onInit: function () {
			this.getView().addStyleClass(this.getOwnerComponent().getContentDensityClass());
		},
		onOpenDialog : function () {
			this.getOwnerComponent().openHelloDialog();
		}
	});
});

// https://sapui5.hana.ondemand.com/#/topic/4cfa60872dca462cb87148ccd0d948ee