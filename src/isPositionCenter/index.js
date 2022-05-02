/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import isEqual from 'lodash/isEqual';

/**
 * Determine whether the content is center positioned.
 *
 * @function
 * @since       1.0.0
 * @name        isPositionCenter
 * @param  	    {string}     input    The value to check.
 * @return 	    {boolean}             Return true if content is center positioned.
 * @example
 *
 * isPositionCenter( 'center' );
 *
 * // => boolean true
 */
export default ( input ) => isEqual( input, 'center center' ) || isEqual( input, 'center' );
