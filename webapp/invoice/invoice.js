sap.ui.define(['sap/ui/core/XMLComposite'], function(XMLComposite) {
    "use strict";
    const oInvoice = XMLComposite.extend("sap.ui.demo.walkthrough.invoice.Invoice", {
        metadata: {
            properties: {
                data: { type: "string", defaultValue: "Enter name here..." },
            },
            events: {
                search: {
                    parameters: {
                        value: {type: "string"}
                    }
                }
            }
        },

        onAfterRendering: function(watkrijg) {
          // console.log(watkrijg);
          //   console.log("initializing");
          //  // morgen verder
          //   console.log(this.getModel().getProperty("invoice"));
          //   console.log(this.getProperty("data"));
        },

        handleSearch: function(oEvent) { // button was pressed, retrieve Input value + fire event
            console.log(oEvent);
            console.log(oEvent.getSource().data("data"));
         // console.log(this.getProperty("data"));
            var sSearchString = this.byId("innerInput").getValue();
            this.fireEvent("search", {value: sSearchString});
        },

        handleboxpress: function () {
            console.log("box is pressed")
        }
    });
    return oInvoice;
});