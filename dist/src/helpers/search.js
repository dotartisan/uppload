import { UpploadService } from "../service";
import { cachedFetch, imageUrlToBlob } from "../helpers/http";
import { safeListen } from "../helpers/elements";
import { colorSVG } from "./assets";
import { blobToUpploadFile } from "./files";
let params = undefined;
const generateFileName = (file, service, type, query) => {
    const ext = (type === null || type === void 0 ? void 0 : type.indexOf('image/gif')) == 0 ? 'gif' : 'jpg';
    file.name = `${query || `${service}-import`}-${Math.random()
        .toString(36)
        .slice(2)}.${ext}`;
    file.type = type ? type : "image/jpeg";
    return file;
};
export class SearchBaseClass extends UpploadService {
    constructor({ apiKey, name, icon, color, poweredByUrl, popularEndpoint, searchEndpoint, getButton, getPopularResults, getSearchResults, noRecolor, fetchSettings, }) {
        super();
        this.results = [];
        this.loading = false;
        this.noRecolor = false;
        this.template = ({ translate }) => {
            return `
      <div class="search-container"><form class="search-search-form">
      <div class="service-icon">${colorSVG(this.icon, this)}</div>
      <label><span>${translate(`services.${this.name}.label`) ||
                translate("services.search.label")}</span>
        <input class="search-search-input" type="search" placeholder="${translate(`services.search.placeholder`)}" required></label>
        <button type="submit" style="background: ${this.color}">${translate(`services.search.button`, translate(`services.${this.name}.title`))}</button>
      </form>
      <div class="search-images"></div>
      <p class="search-footer">${translate("services.search.imagesPoweredBy", `<a href="${this.poweredByUrl}" target="_blank">${translate(`services.${this.name}.title`)}</a>`)}</p></div>
      <button class="need-help-link"><span>${translate("needHelp")}</span aria-hidden="true"><span>?</span></button>
      <div class="uppload-loader search-loader">
        <div></div>
        <p>${translate("fetching", translate(`services.${this.name}.title`))}</p>
      </div>
    `;
        };
        this.handlers = (params) => {
            const form = params.uppload.container.querySelector(`.search-search-form`);
            if (form) {
                safeListen(form, "submit", (event) => {
                    const input = params.uppload.container.querySelector(`.search-search-input`);
                    if (input) {
                        const query = input.value;
                        cachedFetch(this.searchEndpoint(this.apiKey, query), this.fetchSettings)
                            .then((json) => {
                            this.results = this.getSearchResults(json);
                            this.update(params);
                        })
                            .catch(() => params.handle(new Error("errors.unable_to_search")));
                    }
                    event.preventDefault();
                    return false;
                });
            }
            this.updateImages(params);
            const imageButtons = params.uppload.container.querySelectorAll(".search-images button");
            imageButtons.forEach((image) => {
                safeListen(image, "click", () => {
                    const url = image.getAttribute("data-full-url");
                    this.loading = true;
                    this.update(params);
                    if (url) {
                        imageUrlToBlob(url).then((blob) => params.next(generateFileName(blobToUpploadFile(blob), this.name, blob.type, image.getAttribute("aria-label"))))
                            .catch((error) => params.handle("errors.response_not_ok"))
                            .then(() => (this.loading = false));
                    }
                });
            });
            const helpButton = params.uppload.container.querySelector(".need-help-link");
            if (helpButton)
                safeListen(helpButton, "click", () => params.showHelp(`/services/search/${this.name}`));
        };
        this.name = name;
        this.icon = icon;
        this.color = color;
        this.apiKey = apiKey;
        this.noRecolor = !!noRecolor;
        this.poweredByUrl = poweredByUrl;
        this.popularEndpoint = popularEndpoint(this.apiKey);
        this.searchEndpoint = searchEndpoint;
        this.getButton = getButton;
        this.getPopularResults = getPopularResults;
        this.getSearchResults = getSearchResults;
        if (fetchSettings)
            this.fetchSettings = fetchSettings(this.apiKey);
        if (this.popularEndpoint)
            cachedFetch(this.popularEndpoint, this.fetchSettings)
                .then((photos) => {
                this.results = this.getPopularResults(photos);
            })
                .catch(() => { });
    }
    updateImages(params) {
        const imagesContainer = params.uppload.container.querySelector(".search-images");
        if (imagesContainer) {
            imagesContainer.innerHTML = `
        ${this.results.map((result) => this.getButton(result)).join("\n")}
      `;
        }
    }
    update(params) {
        this.updateImages(params);
        if (params)
            this.handlers(params);
        const loader = params.uppload.container.querySelector(".search-loader");
        const container = params.uppload.container.querySelector(".search-container");
        if (container)
            container.style.display = this.loading ? "none" : "";
        if (loader)
            loader.style.display = this.loading ? "flex" : "none";
    }
}
//# sourceMappingURL=search.js.map