sap.ui.require(
  ["sap/m/Text", "sap/ui/model/json/JSONModel"],
  function (Text, JSONModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      // Create a JSON model from an object literal
      var oModel = new JSONModel({
        greetingText: "Hi, my name is Harry Hawk",
      });

      // Assign this local model object to the entire SAPUI5 core, leading to all controls within the app can access it
      sap.ui.getCore().setModel(oModel);

      // sap.m.Text control's property text whose value set to {...}, binding to greetingText property at the root of the default model
      new Text({ text: "{/greetingText}" }).placeAt("content");
    });
  }
);
