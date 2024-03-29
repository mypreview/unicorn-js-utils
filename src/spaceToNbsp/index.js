/**
 * External dependencies
 *
 * @ignore
 */
import { join, split } from 'lodash';

/**
 * Converts empty spaces to its corresponsding HTML character entity (&nbsp;).
 * A non-breaking space is a space that will not break into a new line.
 * Two words separated by a non-breaking space will stick together (not break into a new line).
 * This method is handy when breaking the words might be disruptive.
 *
 * @function
 * @since       1.0.0
 * @name        spaceToNbsp
 * @param  	    {string}    input    String to convert.
 * @return 	    {string}             Converted value.
 * @example
 *
 * spaceToNbsp( 'Hello World! This is an example.' );
 *
 * // => string 'Hello&nbsp;World!&nbsp;This&nbsp;is&nbsp;an&nbsp;example.'
 */
export default ( input ) => join( split( input, /\s/g ), '&nbsp;' );
