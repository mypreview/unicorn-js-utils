/**
 * External dependencies
 *
 * @ignore
 */
import { invoke, nth, replace } from 'lodash';

/**
 * Extracts selected block style slug from the provided block specific CSS class names.
 *
 * @function
 * @since       1.0.0
 * @name        blockStyleSlug
 * @param       {string}    input    CSS class names assigned to the block.
 * @return      {string}             Style name associated or selected for this block.
 * @example
 *
 * blockStyleSlug( 'wp-block-prefix-spacer is-style-fancy test-class-name' );
 *
 * // => string 'fancy'
 */
export default ( input ) => replace( nth( invoke( input, 'match', /is-style-[^{\s]*/ ) ), /is-style-/, '' );
