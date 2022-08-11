/**
 * External dependencies
 *
 * @ignore
 */
import { join, keys, map, values } from 'lodash';

/**
 * Stringify an array of objects into a query string.
 *
 * @function
 * @since       1.0.0
 * @name        stringifyQuery
 * @param  	    {Array}     input    The array of objects to query stringify.
 * @return 	    {string}             Returns a stringified query.
 * @example
 *
 * stringifyQuery( [ { product: '1885' }, { action: 'hook_name' } ] );
 *
 * // => string 'product=1885&action=hook_name'
 */
export default ( input ) =>
	join(
		map( input, ( item ) => `${ keys( item ) }=${ values( item ) }` ),
		'&'
	);
