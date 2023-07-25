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

// import React from "react";
 
// // We use Route in order to define the different routes of our application
// import { Route, Routes } from "react-router-dom";
 
// // We import all the components we need in our app
// import Navbar from "./components/navbar";
// import RecordList from "./components/recordList";
// import Edit from "./components/connect/edit";
// import Create from "./components/connect/create";
 
// const App = () => {
//  return (
//    <div className="App">
//      <Navbar />
//      <Routes>
//        <Route exact path="/" element={<RecordList />} />
//        <Route path="/edit/:id" element={<Edit />} />
//        <Route path="/create" element={<Create />} />
//      </Routes>
//    </div>
//  );
// };
 
// export default App;