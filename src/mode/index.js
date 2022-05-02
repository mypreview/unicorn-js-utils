/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { filter, last, sortBy } from 'lodash';

/**
 * Determines which element has the highest occurrence (mode) in the given array.
 *
 * @function
 * @since       1.0.0
 * @name        mode
 * @param  	    {Array}     input    The array to process.
 * @return 	    {string}             Mode element.
 * @example
 *
 * mode( ['pear', 'apple', 'orange', 'apple'] );
 *
 * // => string "apple"
 */
export default ( input ) => last( sortBy( input, ( a, b ) => filter( input, ( v ) => v === a ).length - filter( input, ( v ) => v === b ).length ) );
