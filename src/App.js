import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectedAllUsers } from './features/userSlice';
import { addUser, removeUser, updateUsername } from './features/userSlice';
function App() {
	const [name, setName] = useState('');
	const [nick, setNick] = useState('');
	const [newNick, setNewNick] = useState('');
	const dispatch = useDispatch();
	const users = useSelector(selectedAllUsers);
	const onAddUser = () => {
		if (users.length !== 0) {
			dispatch(addUser({ id: users[users.length - 1].id + 1, name, nick }));
		} else if (users.length === 0) {
			dispatch(addUser({ id: 1, name, nick }));
		}
	};
	const onRemoveUser = () => {
		dispatch(removeUser({ id: users[users.length - 1].id + 1, name, nick }));
	};
	return (
		<div className="App">
			<div>
				<input type="text" placeholder="imie" onChange={e => setName(e.target.value)} />
				<input type="text" placeholder="nick" onChange={e => setNick(e.target.value)} />
				<button onClick={onAddUser}>Dodaj</button>
			</div>
			<div>
				{users.map(user => {
					return (
						<section key={user.id}>
							<article>
								<h1>{user.name}</h1>
								<h1>{user.nick}</h1>
							</article>
							<input type="test" placeholder="update" onChange={e => setNewNick(e.target.value)} />
							<button
								onClick={() => {
									dispatch(updateUsername({ id: user.id, nick: newNick }));
								}}
							>
								Update
							</button>
							<button onClick={onRemoveUser}>Delete that guy</button>
						</section>
					);
				})}
			</div>
		</div>
	);
}

export default App;
