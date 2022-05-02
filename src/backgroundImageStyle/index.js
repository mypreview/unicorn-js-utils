/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { invoke, isString, nth } from 'lodash';

/**
 * Generate inline background-image CSS style based on provided URL.
 *
 * @function
 * @since       1.0.0
 * @param       {string}    input    Background image URL or web address.
 * @return      {Object}             CSS style for the provided background image address.
 * @example
 *
 * backgroundImageStyle( 'https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png' );
 *
 * // => Object { backgroundImage: 'url(https://interactive-examples.mdn.mozilla.net/media/examples/lizard.png)' }
 */
export default ( input ) =>
	isString( input ) && nth( invoke( input, 'match', /\w+\.(jpg|jpeg|gif|png|tiff|bmp)(\?(.*))?$/ ) ) ? { backgroundImage: `url(${ input })` } : {};
