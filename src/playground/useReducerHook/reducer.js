export function counterReducer(state, action) {
    switch (action.type) {
        case 'increment':
            console.log(state)
            return { count: state.count + 1 };;
        case 'decrement':
            return { count: state.count - 1 };
        default:
            throw new Error();
    }
}
