/**
 * External dependencies
 *
 * @ignore
 */
import replace from 'lodash/replace';

/**
 * Sanitizes the slug value.
 *
 * @function
 * @since       1.1.0
 * @name        sanitizeSlug
 * @param  	    {string}    input    String to sanitize.
 * @return 	    {string}             Sanitized value for the slug.
 * @example
 *
 * sanitizeSlug( 'k e__#y@234' );
 *
 * // => string k-e__-y-234
 */
export default ( input ) => replace( input, /[`~!@#$%^&*()\+=\[\]{};:'"\\|\/,.<>?\s]/g, '-' );
