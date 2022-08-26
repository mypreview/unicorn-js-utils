/**
 * External dependencies
 *
 * @ignore
 */
import assign from 'lodash/assign';

/**
 * A reducer is a function accepting the previous state
 * and action as arguments and returns an updated state value.
 *
 * @function
 * @since       1.3.0
 * @name        reducer
 * @param       {Object}    state     The destination object.
 * @param       {Object}    action    The source objects.
 * @return      {Object} 			  Returns object.
 * @example
 *
 * const [ state, dispatch ] = useReducer( reducer, value );
 */
export default ( state, action ) => assign( {}, state, action );
