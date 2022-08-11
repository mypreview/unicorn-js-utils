/**
 * External dependencies
 *
 * @ignore
 */
import { flow, isArray, join, map, toString } from 'lodash';
import slug from 'slugify';
import striptags from 'striptags';

/**
 * Sanitizes the slug value.
 *
 * @private
 * @param      {string}    value     Slug value passed in request.
 * @return     {string}				 Sanitized value for the slug.
 */
const slugify = ( value ) =>
	slug( striptags( value ), {
		replacement: '-',
		remove: /[*_+~()'"!?\/\-—–−:@^|&#.,;%<>{}]/g,
		lower: true,
	} );

/**
 * Slugifies every string, even when it contains unicode!
 * Properly strips all HTML tags including script and style.
 *
 * @function
 * @since       1.0.0
 * @name        slugify
 * @param  	    {Array|string}    input    The value to slugify.
 * @return 	    {string}             	   Converted value to slug.
 * @example
 *
 * slugify( 'unicode is ♥' );
 *
 * // => string 'unicode-is-love'
 */
export default ( input ) => ( isArray( input ) ? join( map( input, flow( [ toString, slugify ] ) ), '-' ) : slugify( input ) );
