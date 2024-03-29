/**
 * External dependencies
 *
 * @ignore
 */
import { concat, first, get, keys, map, mapKeys, split } from 'lodash';
import renameKeys from 'rename-keys';

/**
 * Internal dependencies
 *
 * @ignore
 */
import optionNone from './none';
import { deepPick } from '../';

/**
 * Generates an array of objects to be passed to the `SelectControl` component.
 * SelectControl allow users to select from a single-option menu. It functions as a wrapper around the browser’s native `<select>` element.
 *
 * @function
 * @since       1.0.0
 * @name        selectOptions
 * @param  	    {Array}     posts    The response on the API call of array of post objects.
 * @param  	    {string}    paths    The property paths to pick.
 * @param  	    {Array}     none     Text to display for showing no options being selected.
 * @return 	    {Array}              An array of objects containing the label to be shown to the user, and value used to choose the selected value.
 * @example
 *
 * selectOptions( [ { id: 1, title: { rendered: 'sunt aut facere' } }, { id: 2, title: { rendered: 'qui est esse' } } ], { id: 'value', 'title.rendered': 'label' } );
 *
 * // => Array [ { value: 1, label: 'Hello world!' }, { value: 2, label: 'qui est esse' } ]
 */
export default ( posts, paths, none = optionNone ) =>
	concat(
		none,
		map(
			map( posts, ( post ) => deepPick( post, keys( paths ) ) ),
			( post ) =>
				mapKeys( post, ( value, key ) =>
					get(
						renameKeys( paths, ( path ) => first( split( path, '.' ) ) ),
						key
					)
				)
		)
	);
