sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/library",
    "sap/ui/core/Locale",
    "sap/ui/core/LocaleData",
    "sap/ui/model/type/Currency",
  ],
  function (
    Controller,
    mobileLibrary,
    Locale,
    LocaleData,
    Currency,
    JSONModel
  ) {
    "use strict";

    return Controller.extend("binding.demo.controller.App", {
      formatMail: function (sFirstName, sLastName) {
        var oBundle = this.getView().getModel("i18n").getResourceBundle();
        return mobileLibrary.URLHelper.normalizeEmail(
          sFirstName + "." + sLastName + "@example.com",
          oBundle.getText("mailSubject", [sFirstName]),
          oBundle.getText("mailBody")
        );
      },
      formatStockValue: function (fUnitPrice, iStockLevel, sCurrCode) {
        var sBrowserLocale = sap.ui.getCore().getConfiguration().getLanguage();
        var oLocale = new Locale(sBrowserLocale);
        var oLocaleData = new LocaleData(oLocale);
        var oCurrency = new Currency();
        var oCurrency = new Currency(oLocaleData.mData.currencyFormat);
        return oCurrency.formatValue(
          [fUnitPrice * iStockLevel, sCurrCode],
          "string"
        );
      },
      // element binding
      onItemSelected: function (oEvent) {
        var oSelectedItem = oEvent.getSource();
        var oContext = oSelectedItem.getBindingContext("products");
        var sPath = oContext.getPath();
        var oProductDetailPanel = this.byId("productDetailsPanel");
        console.log(oProductDetailPanel);
        oProductDetailPanel.bindElement({ path: sPath, model: "products" });
      },
    });
  }
);
