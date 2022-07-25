import { translate, Uppload, } from "../src";
const uppload = new Uppload();
import xhr from "xhr-mock";
const customGlobal = global;
customGlobal.fetch = require("jest-fetch-mock");
customGlobal.fetchMock = customGlobal.fetch;
export const fetch = customGlobal.fetch;
const serviceTemplateParams = {
    uppload,
    translate,
};
const handlersParams = {
    upload: () => new Promise(() => { }),
    uploadMultiple: () => new Promise(() => { }),
    next: () => { },
    handle: () => { },
    showHelp: () => { },
    uppload,
    translate,
};
const effectTemplateParams = {
    file: { blob: new Blob() },
    translate,
};
export { xhr, serviceTemplateParams, handlersParams, effectTemplateParams };
//# sourceMappingURL=mocks.js.map