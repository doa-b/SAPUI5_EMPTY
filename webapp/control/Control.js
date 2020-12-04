sap.ui.define([
    "./FragmentControl"
], function(FragmentControl) {
    "use strict";

    /**
     * My class
     *
     * @public
     * @extends sap.ui.FragmentControl
     */
    var MyControl = FragmentControl.extend("sap.ui.demo.walkthrough.control.Control", {

        /**
         * @override
         */
        getFragmentContent: function() {
            return "<core:FragmentDefinition xmlns=\"sap.m\" xmlns:core=\"sap.ui.core\">\n" +
                "    <Text id=\"myText\"/>\n" +
                "    <Input change=\"onChange\"/>\n" +
                "</core:FragmentDefinition>";
        },

        /**
         * Handle the change event
         * @param {sap.ui.base.Event} oEvent - the change event
         */
        onChange: function(oEvent) {
            var sValue = oEvent.getParameter("value");
            var oText = this.byId("myText");
            oText.setText(sValue);
        }
    });

    return MyControl;
});