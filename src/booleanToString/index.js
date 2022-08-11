/**
 * External dependencies
 *
 * @ignore
 */
import { isBoolean, isEqual } from 'lodash';

/**
 * Internal dependencies
 *
 * @ignore
 */
import { stringToBoolean } from '../';

/**
 * Converts a bool to a 'yes' or 'no'.
 *
 * @function
 * @since       1.0.0
 * @name        booleanToString
 * @param  	    {boolean|string}    input    Bool to convert. If a string is passed it will first be converted to a bool.
 * @return 	    {string}                     Converted value.
 * @example
 *
 * booleanToString( true );
 *
 * // => string 'yes'
 */
export default ( input ) => {
	if ( ! isBoolean( input ) ) {
		return stringToBoolean( input );
	}

	return isEqual( true, input ) ? 'yes' : 'no';
};
