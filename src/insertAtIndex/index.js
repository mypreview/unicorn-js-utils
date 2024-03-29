/**
 * External dependencies
 *
 * @ignore
 */
import { add, concat, slice } from 'lodash';

/**
 * Insert an item into an array at a specific index.
 *
 * @function
 * @since       1.0.0
 * @name        insertAtIndex
 * @param  	    {Array}     input    The array to add to.
 * @param  	    {any}       value    The value to insert.
 * @param  	    {number}    index    Given array index to insert the value.
 * @return 	    {Array}              Returns the new updated array.
 * @example
 *
 * insertAtIndex( [ 'a', 'd', 'c' ], 'b', 1 );
 *
 * // => Array [ 'a', 'b', 'c' ]
 */
export default ( input, value, index ) => concat( slice( input, 0, index ), value, slice( input, add( index, 1 ) ) );
