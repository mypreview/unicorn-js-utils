/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { divide, isEqual, multiply, round } from 'lodash';

/**
 * Generate dim CSS class name based on the provided ratio or opacity.
 *
 * @function
 * @since       1.0.0
 * @param	    {number}    input    Dim ratio or opacity. [0-100]
 * @return 	    {string}             CSS class name generated from the ratio input.
 * @example
 *
 * dimRatioClassName( 30 );
 *
 * // => string 'has-background-dim-30'
 */
export default ( input ) =>
	isEqual( 0, input ) || isEqual( 50, input ) || ! input ? '' : `has-background-dim-${ multiply( 10, round( divide( input, 10 ) ) ) }`;
