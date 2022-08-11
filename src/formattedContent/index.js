/**
 * External dependencies
 *
 * @ignore
 */
import trim from 'lodash/trim';

/**
 * WordPress dependencies
 *
 * @ignore
 */
import { decodeEntities } from '@wordpress/html-entities';

/**
 * Gets a formatted version of the post content provided.
 *
 * @function
 * @since       1.0.0
 * @name        formattedContent
 * @param  	    {string}    input    Post content.
 * @return 	    {string}             Formatted post content.
 * @example
 *
 * formattedContent( '<span class=\"amount\"><bdi><span class=\"currency\">&pound;<\/span>11.05<\/bdi><\/span>' );
 *
 * // => string '<span class="amount"><bdi><span class="currency">£</span>11.05</bdi></span>'
 */
export default ( input ) => decodeEntities( trim( input ) );
