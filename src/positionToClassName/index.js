/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import get from 'lodash/get';

/**
 * Determine whether the content is center positioned.
 *
 * @ignore
 */
import isPositionCenter from '../isPositionCenter';

/**
 * Possible background position inputs.
 *
 * @ignore
 */
import positions from './positions';

/**
 * Generates content-position CSS class name based on provided input.
 *
 * @function
 * @since       1.0.0
 * @name        positionToClassName
 * @param  	    {string}    input    CSS position input.
 * @return 	    {string}             Corresponding CSS class name based on the provided position.
 * @example
 *
 * positionToClassName( 'center right' );
 *
 * // => string 'is-position-center-right'
 */
export default ( input ) => ( isPositionCenter( input ) ? '' : get( positions, input ) );
