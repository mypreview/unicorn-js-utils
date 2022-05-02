/**
 * Utility for libraries from the `Lodash`.
 *
 * @ignore
 */
import { first, forEach, get, set, split } from 'lodash';

/**
 * Creates an object composed of the (nested) picked object properties.
 *
 * @function
 * @since       1.0.0
 * @name        deepPick
 * @param  	    {Object}    collection    The source object.
 * @param  	    {Array}     paths         The property paths to pick.
 * @return      {Object}                  Returns the new object.
 * @example
 *
 * deepPick( { id: 1, title: { rendered: 'Hello world!' } }, [ 'title.rendered' ] );
 *
 * // => Object { title: 'Hello world!' }
 */
export default ( collection, paths ) => {
	const picked = {};
	forEach( paths, ( path ) => set( picked, first( split( path, '.' ) ), get( collection, path ) ) );
	return picked;
};
