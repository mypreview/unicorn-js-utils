/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import attempt from 'lodash/attempt';

/**
 * Parses a JSON string, constructing the JavaScript value or object described by the string.
 *
 * @function
 * @since       1.0.0
 * @name        jsonify
 * @param  	    {string}    input    The string to parse as JSON.
 * @return 	    {Object}             Converted value to object.
 * @example
 *
 * jsonify( '[ { "id": 1, "title": "sunt aut facere" ,{ "id": 2, "title": "qui est esse" } ]' );
 *
 * // => Object [ { id: 1, title: 'sunt aut facere' }, { id: 2, title: 'qui est esse' } ]
 */
export default ( input ) => attempt( JSON.parse, input );
