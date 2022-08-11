/**
 * External dependencies
 *
 * @ignore
 */
import get from 'lodash/get';

/**
 * Internal dependencies
 *
 * @ignore
 */
import positions from './positions';
import { isPositionCenter } from '../';

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
