/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import invoke from 'lodash/invoke';

/**
 * Extracts email addresses from `mailto` href link.
 *
 * @function
 * @since       1.0.0
 * @param  	    {string}    input    The href attribute value.
 * @return 	    {Array}              Extracted email-addresses from the provided href value.
 * @example
 *
 * getMailTo( 'mailto:info@example.com,info@test.com' );
 *
 * // => Array '[ 'info@example.com', 'info@test.com' ]'
 */
export default ( input ) => invoke( input, 'match', /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9._-]+)/gi );
