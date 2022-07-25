"use strict";
const lib = jest.requireActual('tabbable');
const tabbable = Object.assign(Object.assign({}, lib), { tabbable: (node, options) => lib.tabbable(node, Object.assign(Object.assign({}, options), { displayCheck: 'none' })), focusable: (node, options) => lib.focusable(node, Object.assign(Object.assign({}, options), { displayCheck: 'none' })), isFocusable: (node, options) => lib.isFocusable(node, Object.assign(Object.assign({}, options), { displayCheck: 'none' })), isTabbable: (node, options) => lib.isTabbable(node, Object.assign(Object.assign({}, options), { displayCheck: 'none' })) });
module.exports = tabbable;
//# sourceMappingURL=tabbable.js.map