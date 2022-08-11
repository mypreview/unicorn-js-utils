/**
 * External dependencies
 *
 * @ignore
 */
import isArray from 'lodash/isArray';

/**
 * Check if value is classified as an array object and is not empty.
 *
 * @function
 * @since       1.0.0
 * @name        ifArray
 * @param  	    {Array}      input    The value to check.
 * @return 	    {boolean}             Whether the argument provided is a non-empty array.
 * @example
 *
 * ifArray( [] );
 *
 * // => boolean false
 */
export default ( input ) => isArray( input ) && !! input.length;
