# Unicorn JS Utils 

![npm](https://img.shields.io/npm/dy/@mypreview/unicorn-js-utils) 
![npm](https://img.shields.io/npm/v/@mypreview/unicorn-js-utils?label=version)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@mypreview/unicorn-js-utils)
![NPM](https://img.shields.io/npm/l/@mypreview/unicorn-js-utils)
![Snyk Vulnerabilities for npm package](https://img.shields.io/snyk/vulnerabilities/npm/@mypreview/unicorn-js-utils)

A collection of JavaScript utility methods delivering modularity, performance & extras.

## Installation

Install the module

```bash
npm install @mypreview/unicorn-js-utils --save
```

## Table of Content

| Method                      | Description                                                                                                       |
|-----------------------------|-------------------------------------------------------------------------------------------------------------------|
| [backgroundImageStyle](https://github.com/mypreview/unicorn-js-utils/blob/main/src/backgroundImageStyle/index.js)        | Generate inline background-image CSS style based on provided URL                                                  |
| [blockClassName](https://github.com/mypreview/unicorn-js-utils/blob/main/src/blockClassName/index.js)              | Extracts block specific CSS class name generated by Gutenberg editor                                              |
| [blockStyleSlug](https://github.com/mypreview/unicorn-js-utils/blob/main/src/blockStyleSlug/index.js)              | Extracts selected block style slug from the provided block specific CSS class names                               |
| [booleanToString](https://github.com/mypreview/unicorn-js-utils/blob/main/src/booleanToString/index.js)             | Converts a bool to a `yes` or `no`                                                                                |
| [deepPick](https://github.com/mypreview/unicorn-js-utils/blob/main/src/deepPick/index.js)                    | Creates an object composed of the (nested) picked object properties                                               |
| [dimRatioClassName](https://github.com/mypreview/unicorn-js-utils/blob/main/src/dimRatioClassName/index.js)           | Generate dim CSS class name based on the provided ratio or opacity                                                |
| [filterCollectionByPredicate](https://github.com/mypreview/unicorn-js-utils/blob/main/src/filterCollectionByPredicate/index.js) | Iterates over elements of `input` and returns all entries from `collection` for which `predicate` returns truthy. |
| [focalPointStyle](https://github.com/mypreview/unicorn-js-utils/blob/main/src/focalPointStyle/index.js)             | Generates corresponding CSS based on the provided focal point picker values                                       |
| [formattedContent](https://github.com/mypreview/unicorn-js-utils/blob/main/src/formattedContent/index.js)            | Gets a formatted version of the post content provided                                                             |
| [getMailTo](https://github.com/mypreview/unicorn-js-utils/blob/main/src/getMailTo/index.js)                   | Extracts email addresses from `mailto` href link                                                                  |
| [hexToEmoji](https://github.com/mypreview/unicorn-js-utils/blob/main/src/hexToEmoji/index.js)                  | Converts a given hex-unicode into an Emoji icon                                                                   |
| [ifArray](https://github.com/mypreview/unicorn-js-utils/blob/main/src/ifArray/index.js)                     | Check if value is classified as an array object and is not empty                                                  |
| [insertAtIndex](https://github.com/mypreview/unicorn-js-utils/blob/main/src/insertAtIndex/index.js)               | Insert an item into an array at a specific index                                                                  |
| [isPositionCenter](https://github.com/mypreview/unicorn-js-utils/blob/main/src/isPositionCenter/index.js)            | Determine whether the content is center positioned                                                                |
| [jsonify](https://github.com/mypreview/unicorn-js-utils/blob/main/src/jsonify/index.js)                     | Parses a JSON string, constructing the JavaScript value or object described by the string                         |
| [mode](https://github.com/mypreview/unicorn-js-utils/blob/main/src/mode/index.js)                        | Determines which element has the highest occurrence (mode) in the given array                                     |
| [normalizeJsonify](https://github.com/mypreview/unicorn-js-utils/blob/main/src/normalizeJsonify/index.js)            | Validate and normalize JSON string to an array                                                                    |
| [positionToClassName](https://github.com/mypreview/unicorn-js-utils/blob/main/src/positionToClassName/index.js)         | Generates content-position CSS class name based on provided input                                                 |
| [removeAtIndex](https://github.com/mypreview/unicorn-js-utils/blob/main/src/removeAtIndex/index.js)               | Removes an item from the array at a specific index                                                                |
| [sanitizeSlug](https://github.com/mypreview/unicorn-js-utils/blob/main/src/sanitizeSlug/index.js)               | Sanitizes the slug value                                       |
| [selectOptions](https://github.com/mypreview/unicorn-js-utils/blob/main/src/selectOptions/index.js)               | Generates an array of objects to be passed to the `SelectControl` component                                       |
| [shortcode](https://github.com/mypreview/unicorn-js-utils/blob/main/src/shortcode/index.js)                   | Generate shortcode                                                                                                |
| [slugify](https://github.com/mypreview/unicorn-js-utils/blob/main/src/slugify/index.js)                     | Slugifies every string, even when it contains unicode!                                                            |
| [spaceToNbsp](https://github.com/mypreview/unicorn-js-utils/blob/main/src/spaceToNbsp/index.js)                 | Converts empty spaces to its corresponsding HTML character entity `&nbsp;`                                             |
| [stringify](https://github.com/mypreview/unicorn-js-utils/blob/main/src/stringify/index.js)                   | Converts a JavaScript object or value to a JSON string                                                            |
| [stringifyQuery](https://github.com/mypreview/unicorn-js-utils/blob/main/src/stringifyQuery/index.js)              | Stringify an array of objects into a query string                                                                 |
| [stringToBoolean](https://github.com/mypreview/unicorn-js-utils/blob/main/src/stringToBoolean/index.js)             | Converts a string (e.g. 'yes' or 'no') to a bool                                                                  |
