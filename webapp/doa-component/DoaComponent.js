sap.ui.define(['sap/ui/core/XMLComposite'], function(XMLComposite) {
    "use strict";
    var oSearchField = XMLComposite.extend("sap.ui.demo.walkthrough.doa-component.DoaComponent", {
        metadata: {
            properties: {
                placeholder: { type: "object", defaultValue: "Enter Search Term..." },
                buttonText: { type: "string", defaultValue: "Search" }
            },
            events: {
                search: {
                    parameters: {
                        value: {type: "string"}
                    }
                }
            }
        },

        handleSearch: function() { // button was pressed, retrieve Input value + fire event
            var sSearchString = this.byId("innerInput").getValue();
            this.fireEvent("search", {value: sSearchString});
        }
    });
    return oSearchField;
});