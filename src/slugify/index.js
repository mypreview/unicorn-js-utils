/**
 * Slugifies every string, even when it contains unicode!
 *
 * @ignore
 */
import slug from 'slugify';

/**
 * An implementation of PHP's `strip_tags` in Node.js.
 *
 * @ignore
 */
import striptags from 'striptags';

/**
 * Slugifies every string, even when it contains unicode!
 * Properly strips all HTML tags including script and style.
 *
 * @function
 * @since       1.0.0
 * @name        slugify
 * @param  	    {string}    input    The value to slugify.
 * @return 	    {string}             Converted value to slug.
 * @example
 *
 * slugify( 'unicode is ♥' );
 *
 * // => string 'unicode-is-love'
 */
export default ( input ) =>
	slug( striptags( input ), {
		replacement: '-',
		remove: /[*_+~()'"!?\/\-—–−:@^|&#.,;%<>{}]/g,
		lower: true,
	} );
