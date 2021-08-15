export const todoReducer = ( state = [], { type, payload } ) => {
    switch ( type ) {
        case 'add':
            return [ ...state, payload ];
        case 'delete':
            return state.filter( todo => todo.id !== payload  );
        default:
            return state;
    };
}