import Unsplash from "../../../src/services/search/unsplash";
import { minifyHTML } from "../../../src/helpers/utils";
const service = new Unsplash("API_KEY");
const unsplashResult = {
    id: "1",
    description: "Tree",
    alt_description: "An image of a tree",
    urls: {
        regular: "https://unsplash.com/regular.jpg",
        thumb: "https://unsplash.com/thumb.jpg",
    },
    user: {
        name: "Anand Chowdhary",
        links: {
            html: "https://unsplash.com"
        },
        profile_image: {
            small: "https://unsplash.com/user.jpg",
        },
    },
};
test("popular endpoint", () => expect(service.popularEndpoint).toBe("https://api.unsplash.com/photos?client_id=API_KEY"));
test("search endpoint", () => expect(service.searchEndpoint("API_KEY", "QUERY")).toBe("https://api.unsplash.com/search/photos?client_id=API_KEY&page=1&query=QUERY"));
test("gets search results", () => expect(service.getSearchResults({ results: [unsplashResult] })).toEqual([
    unsplashResult,
]));
test("gets popular items", () => expect(service.getPopularResults([unsplashResult])).toEqual([
    unsplashResult,
]));
test("gets button HTML", () => expect(minifyHTML(service.getButton(unsplashResult))).toBe(`<div class="result"><button aria-label="An image of a tree" data-full-url="https://unsplash.com/regular.jpg" data-metadata="%7B%22caption%22%3A%22An%20image%20of%20a%20tree%22%2C%22alt%22%3A%22An%20image%20of%20a%20tree%22%2C%22author%22%3A%22Anand%20Chowdhary%22%2C%22link%22%3A%22https%3A%2F%2Funsplash.com%22%7D" style="background-image: url('https://unsplash.com/thumb.jpg')"></button><small class="author"><img alt="" src="https://unsplash.com/user.jpg"><span>Anand Chowdhary</span></small></div>`));
//# sourceMappingURL=unsplash.test.js.map