import GIPHY, { GIPHYResult } from "../../../src/services/search/giphy";
import { minifyHTML } from "../../../src/helpers/utils";

const service = new GIPHY("API_KEY");

const giphyResult: GIPHYResult = {
  id: "1",
  title: "An image",
  url: "https://giphy.com/image.gif",
  images: {
    downsized_large: { url: "https://giphy.com/large.gif" },
    preview_gif: { url: "https://giphy.com/preview.gif" },
  },
  user: {
    avatar_url: "https://giphy.com/avatar.jpg",
    display_name: "Anand Chowdhary",
    profile_url: "https://giphy.com/anand",
  },
  username: "Anand Chowdhary",
};

test("popular endpoint", () =>
  expect(service.popularEndpoint).toBe(
    "https://api.giphy.com/v1/gifs/trending?api_key=API_KEY&limit=18&rating=G"
  ));

test("search endpoint", () =>
  expect(service.searchEndpoint("API_KEY", "QUERY")).toBe(
    "https://api.giphy.com/v1/gifs/search?api_key=API_KEY&q=QUERY&limit=18&offset=0&rating=G&lang=en"
  ));

test("gets search results", () =>
  expect(service.getSearchResults({ data: [giphyResult] })).toEqual([
    giphyResult,
  ]));

test("gets popular items", () =>
  expect(service.getPopularResults({ data: [giphyResult] })).toEqual([
    giphyResult,
  ]));

test("gets button HTML", () =>
  expect(minifyHTML(service.getButton(giphyResult))).toBe(
    `<div class="result"><button aria-label="An image" data-full-url="https://giphy.com/large.gif&uppload-output=gif" data-metadata="%7B%22caption%22%3A%22An%20image%22%2C%22alt%22%3A%22An%20image%22%2C%22author%22%3A%22Anand%20Chowdhary%22%2C%22link%22%3A%22https%3A%2F%2Fgiphy.com%2Fanand%22%7D" style="background-image: url('https://giphy.com/preview.gif')"></button></div>`
  ));
