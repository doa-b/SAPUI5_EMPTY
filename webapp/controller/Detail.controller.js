sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/routing/History",
    "sap/m/MessageToast",
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
], function (Controller, History, MessageToast, UIComponent, JSONModel) {
    "use strict";
    return Controller.extend("sap.ui.demo.walkthrough.controller.Detail", {

        onInit: function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");

            // set data model for DoaComponent
            var oData = {
                placeholder: "Doa's placeholder ...",
                searchText: "Doa's button text ..."
            };
            var oModel = new JSONModel(oData);
            this.getView().setModel(oModel);


            const oRouter = UIComponent.getRouterFor(this);
            oRouter.getRoute("detail").attachPatternMatched(this._onObjectMatched, this);
        },
        _onObjectMatched: function (oEvent) {
            this.byId("rating").reset();
            this.getView().bindElement({
                path: "/" + window.decodeURIComponent(oEvent.getParameter("arguments").invoicePath),
                model: "invoice"
            });
        },
        onNavBack: function () {
            const oHistory = History.getInstance();
            const sPreviousHash = oHistory.getPreviousHash();

            if (sPreviousHash !== undefined) {
                window.history.go(-1);
            } else {
                const oRouter = UIComponent.getRouterFor(this);
                oRouter.navTo("overview", {}, true);
            }
        },

        onDoaSearch: function (oEvent) {
            var sValue = oEvent.getParameter("value") || "<empty search term>";
            MessageToast.show("Button pressed: " + sValue);
        },

        onRatingChange: function (oEvent) {
            const fValue = oEvent.getParameter("value");
            const oResourceBundle = this.getView().getModel("i18n").getResourceBundle();
            MessageToast.show(oResourceBundle.getText("ratingConfirmation", [fValue]));
        }
    })
});