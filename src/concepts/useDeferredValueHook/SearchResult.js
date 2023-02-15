import SearchItem from './SearchItem';

function SearchResult({ users }) {
    return users.map((user) => <SearchItem key={user.id} {...user} />);
}

export default SearchResult;
