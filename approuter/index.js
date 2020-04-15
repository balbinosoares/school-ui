const approuter = require("@sap/approuter");
const config = require("./xs-app.json");

config.routes.forEach((oRoute) => {
    "use strict";

    // eslint-disable-next-line no-console
    if (oRoute.localDir && oRoute.localDir === "webapp") {
        oRoute.localDir = "../webapp";
    }
});
approuter().start({ xsappConfig: config });