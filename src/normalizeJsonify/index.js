/**
 * Determine whether the argument is a non empty array.
 *
 * @ignore
 */
import ifArray from '../ifArray';

/**
 * Parses a JSON string.
 *
 * @ignore
 */
import jsonify from '../jsonify';

/**
 * Validate and normalize JSON string to an array.
 *
 * @function
 * @since       1.0.0
 * @name        normalizeJsonify
 * @param  	    {string}    input    JSON string to be normalized to an array.
 * @return 	    {Array}              Constructed JavaScript object from the given JSON string.
 * @example
 *
 * const options = normalizeJsonify( '[\u0022Search Engine\u0022,\u0022Social Media\u0022]' );
 *
 * // => Array [ 'Search Engine', 'Social Media' ]
 */
export default ( input ) => {
	const jsonified = jsonify( input );
	return ! ifArray( jsonified ) ? [ '' ] : jsonified;
};
