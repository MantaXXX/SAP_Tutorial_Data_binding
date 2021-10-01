sap.ui.require(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/BindingMode",
  ],
  function (JSONModel, XMLView, BindingMode) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      // Create a JSON model from an object literal
      var oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
        panelHeaderText: "Data Binding Basics",
      });

      // binding mode is set on the model itself, alter it with BindingMode dependency
      oModel.setDefaultBindingMode(BindingMode.OneWay);

      // Assign this local model object to the entire SAPUI5 core, leading to all controls within the app can access it
      sap.ui.getCore().setModel(oModel);

      // Display the XML view called "App"
      new XMLView({
        viewName: "binding.demo.view.App",
      }).placeAt("content");
    });
  }
);
