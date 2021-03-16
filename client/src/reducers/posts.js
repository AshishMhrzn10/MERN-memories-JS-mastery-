export default (posts = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return action.payload;

        case 'FETCH_ALL':
            return posts;

        default:
            return posts;
    }
}