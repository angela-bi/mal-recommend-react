import { useState } from 'react';
import './App.css';
import MainContent from './components/MainContent';
import Footer from './components/Footer'

function App() {

  const [search, SetSearch] = useState("");
  const [userFriends, SetUserFriends] = useState([]);

	const HandleSearch = e => {
		e.preventDefault();
		console.log("search",search);
		FetchUserFriends(search);
	}

	const FetchUserFriends = async (query) => {
		const fetchedUserFriends = await fetch(`https://api.jikan.moe/v4/users/${query}/friends`)
			.then(res => res.json());

			console.log("fetchedUserFriends",fetchedUserFriends);
			SetUserFriends(fetchedUserFriends.data);
			console.log("userFriends", userFriends);
	}

  return (
    <div className="App">
		<>
			<MainContent
					HandleSearch={HandleSearch}
					search={search}
					SetSearch={SetSearch}
					userFriends={userFriends} />
			<Footer/>
		</>
    </div>
  );
}

export default App;