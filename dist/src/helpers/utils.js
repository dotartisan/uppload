/**
 * Minified a string of HTML
 * @param html - HTML string to minify
 * @returns Minified string
 */
export const minifyHTML = (html) => html.replace(/\n/g, "").replace(/  /g, "");
/**
 * Returns a formatted version of the bytes
 * @param bytes - The bytes to format
 * @param decimals - The number of decimals to show
 * @returns The formatted string
 */
export const formatBytes = (bytes, decimals = 2) => {
    if (bytes === 0) {
        return "0 Bytes";
    }
    const base = 1024;
    const dm = decimals < 0 ? 0 : decimals;
    const sizes = [
        "Bytes",
        "KB",
        "MB",
        "GB",
        "TB",
        "PB",
        "EB",
        "ZB",
        "YB",
    ];
    const index = Math.floor(Math.log(bytes) / Math.log(base));
    const size = sizes[index];
    return parseFloat((bytes / Math.pow(base, index)).toFixed(dm)) + " " + size;
};
//# sourceMappingURL=utils.js.map