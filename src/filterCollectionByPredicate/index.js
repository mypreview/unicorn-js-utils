/**
 * Utility functions from `Lodash`.
 *
 * @ignore
 */
import { forEach, find, matchesProperty } from 'lodash';

/**
 * Creates a function that performs a partial deep comparison between the `id` of
 * a given object to the passed value. Returns true if the object value is equivalent,
 * otherwise false.
 *
 * This function is used as the default predicate for `filterCollectionByValues`.
 *
 * @private
 * @param      {any}         value    A value to check for.
 * @return     {Function}             Predicate comparison function.
 */
const matchId = ( value ) => matchesProperty( 'id', value );

/**
 * Iterates over elements of `input` and returns all entries from `collection`
 * for which `predicate` returns truthy.
 *
 * Notice that this function preserves the order of `input` in the result set
 * and is thus most useful if a collection must be filtered in an order that is
 * specified by another collection.
 *
 * @function
 * @since       1.0.0
 * @name        filterCollectionByPredicate
 * @param       {Array}       input         The input to search for.
 * @param       {Array}       collection    The collection to search elements in.
 * @param       {Function}    predicate     The predicate function to be applied in every iteration.
 * @return      {Array}                     All matching entries in collection.
 * @example
 *
 * filterCollectionByPredicate( [ 1, 3 ], [ { id: 1, content: {} }, { id: 2, content: {} }, { id: 3, content: {} } ] );
 *
 * // => Array [ { id: 1, content: {} }, { id: 3, content: {} } ]
 */
export default ( input, collection, predicate = matchId ) => {
	const existing = [];
	forEach( input, ( value ) => {
		const match = find( collection, predicate( value ) );
		if ( Boolean( match ) ) {
			existing.push( match );
		}
	} );
	return existing;
};
