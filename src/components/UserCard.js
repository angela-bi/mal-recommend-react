import React from 'react';
import { useState, useEffect } from 'react';
import './UserCard.css';
import axios from 'axios';


function UserCard({friend}) {
	const [animeList, SetAnimeList] = useState([]);
	const [form, setForm] = useState({
		name: "",
		animes: ""
	});

	useEffect(() => {
		const query = friend.user.username;

		const fetchData = async () => {
			const headers = {'X-MAL-CLIENT-ID': `${process.env.REACT_APP_CLIENT_ID}`}
			try {
				const response = await axios.get(`http://localhost:8080/api.myanimelist.net/v2/users/${query}/animelist?fields=list_status&sort=list_score`, { headers });
				console.log("response",response.data.data);
				SetAnimeList(response.data.data)
			  } catch (error) {
				console.error(error);
			  }
		}

		const postData = async () => {
			axios.post('http://localhost:8000/record/add', {"test":"test"})
            .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });

		}

		fetchData()
		postData()

		.catch(console.error);
	}, []);
	
	const FriendsSince = friend.friends_since.substring(0, 10).slice(0,4);

	return (
		<div className="user-card">
			<div className="user-card-info">
				<a 
					href={ friend.user.url }
					target="_blank"
					rel="noreferrer"
					className='username-link'>
					<h3>{ friend.user.username }</h3>
				</a>
				<img src={ friend.user.images.jpg.image_url } className="profile-img"/>
				<h3> Friends Since: { FriendsSince } </h3>
				<h3> Top Recommendations: </h3>
				{animeList.map((anime) => (
					<li>{anime.node.title}</li>
				))}
			</div>
		</div>
	)
}

export default UserCard