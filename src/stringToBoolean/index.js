/**
 * External dependencies
 *
 * @ignore
 */
import { isBoolean, isEqual } from 'lodash';

/**
 * Converts a string (e.g. 'yes' or 'no') to a bool.
 *
 * @function
 * @since       1.0.0
 * @name        stringToBoolean
 * @param  	    {string|number}    input    String to convert. If a bool is passed it will be returned as-is.
 * @return 	    {boolean}                   Converted value.
 * @example
 *
 * stringToBoolean( 'yes' );
 *
 * // => boolean true
 */
export default ( input ) =>
	isBoolean( input )
		? input
		: isEqual( 'yes', input ) || isEqual( 1, input ) || isEqual( 'true', input ) || isEqual( 'TRUE', input ) || isEqual( '1', input );
