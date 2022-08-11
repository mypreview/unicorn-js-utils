/**
 * External dependencies
 *
 * @ignore
 */
import attempt from 'lodash/attempt';

/**
 * Converts a JavaScript object or value to a JSON string.
 *
 * @function
 * @since       1.0.0
 * @name        stringify
 * @param  	    {Object}    input    The value to convert to a JSON object.
 * @return 	    {string}             Converted value to string.
 * @example
 *
 * stringify( [ { id: 1, title: 'sunt aut facere' }, { id: 2, title: 'qui est esse' } ] );
 *
 * // => string '[{"id":1,"title":"sunt aut facere"},{"id":2,"title":"qui est esse"}]'
 */
export default ( input ) => attempt( JSON.stringify, input );
