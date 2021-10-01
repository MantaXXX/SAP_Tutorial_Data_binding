sap.ui.require(
  [
    "sap/ui/model/json/JSONModel",
    "sap/ui/core/mvc/XMLView",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (JSONModel, XMLView, ResourceModel) {
    "use strict";

    // Attach an anonymous function to the SAPUI5 'init' event
    sap.ui.getCore().attachInit(function () {
      // Create a JSON model from an object literal
      var oModel = new JSONModel({
        firstName: "Harry",
        lastName: "Hawk",
        enabled: true,
        panelHeaderText: "Data Binding Basics",
        address: {
          street: "Dietmar-Hopp-Allee 16",
          city: "Walldorf",
          zip: "69190",
          country: "Germany",
        },
      });

      // Create a resource bundle for language specific texts
      // "supportedLocales" represent the i18n files present: "" -> i18n/i18n.properties, "de" -> i18n/i18n_de.properties
      // "fallbackLocale" : represent one of these files: "" -> according to the fallback chain the root bundle is the last fallback.
      var oResourceModel = new ResourceModel({
        bundleName: "binding.demo.i18n.i18n",
        supportedLocales: ["", "de"],
        fallbackLocale: "",
      });

      // Assign the model object to the SAPUI5 core using the name "i18n"
      sap.ui.getCore().setModel(oResourceModel, "i18n");
      // Assign this local model object to the entire SAPUI5 core, leading to all controls within the app can access it
      sap.ui.getCore().setModel(oModel);

      // Display the XML view called "App"
      new XMLView({
        viewName: "binding.demo.view.App",
      }).placeAt("content");
    });
  }
);
