export const todoReducer = ( state = [], { type, payload } ) => {
    switch ( type ) {
        case 'add':
            return [ ...state, payload ];
        default:
            return state;
    };
}