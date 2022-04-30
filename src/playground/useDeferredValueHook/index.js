import SearchInput from './SerachInput';
import SearchResult from './SearchResult';
import { useDeferredValue, useState } from 'react';
import users from '_mock-data/user1000.json';

function filterUsers(key, users) {
    return users.filter(
        ({ firstName, lastName }) => firstName?.toLowerCase().startsWith(key) || lastName?.toLowerCase().startsWith(key)
    );
}
export default function App() {
    const [key, setKey] = useState();

    const filteredUsers = filterUsers(key, users);
    const displayUsers = useDeferredValue(filteredUsers);

    return (
        <div className="container">
            <SearchInput value={key} onChange={setKey} />
            {key && <SearchResult users={displayUsers} />}
        </div>
    );
}
