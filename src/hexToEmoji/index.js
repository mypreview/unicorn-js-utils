/**
 * External dependencies
 *
 * @ignore
 */
import { join, split, toLower } from 'lodash';

/**
 * Internal dependencies
 *
 * @ignore
 */
import { formattedContent } from '../';

/**
 * Converts a given hex-unicode into an Emoji icon.
 *
 * @function
 * @since       1.0.0
 * @name        hexToEmoji
 * @param  	    {string}    value    Emoji specific hex code.
 * @return 	    {any}                Rendered Emoji.
 * @example
 *
 * hexToEmoji( '1F603' );
 *
 * // => string 😃
 */
export default ( value ) => formattedContent( `&#x${ join( split( toLower( value ), ' ' ), '&#x' ) };` );
