sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator"
], function (Controller, JSONModel, formatter, Filter, FilterOperator) {
    "use strict";

    return Controller.extend("sap.ui.demo.walkthrough.controller.InvoiceList", {
        formatter: formatter,
        onInit : function () {
            var oViewModel = new JSONModel({
                currency: "EUR"
            });
            this.getView().setModel(oViewModel, "view");
        },

        onFilterInvoices : function (oEvent) {

            // build filter array
            const aFilter = [];
            const sQuery = oEvent.getParameter("query");
            if (sQuery) {
                aFilter.push(new Filter("ProductName", FilterOperator.Contains, sQuery));
            }

            // filter binding
            const oList = this.byId("invoiceList");
            const oBinding = oList.getBinding("items");
            oBinding.filter(aFilter);
        },

        onPress: function(oEvent) {
            const oItem = oEvent.getSource();
            console.log(oItem);
            const path = oItem.getBindingContext("invoice").getPath().substr(1);
            console.log(path);
            const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
            oRouter.navTo("detail", {
                invoicePath: window.encodeURIComponent(path)
            })
        }
    });
});