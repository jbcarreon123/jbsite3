<script>
	import { onMount } from 'svelte';

	const username = 'jbcarreon123'; // change the username!!!
	const posts_url = 'https://cafe.frizzbees.dev/get_posts/1?name=';
	const profile_url = 'https://social.nekoweb.org/profile/?view=';
	const post_url = 'https://social.nekoweb.org/post/?id=';

	// thanks max
	onMount(async () => {
		try {
			const request = await fetch(posts_url + username);
			let json = await request.json();
			json = json[0];

			let timestamp = json['timestamp'] * 1000;
			let time = new Date(timestamp).toUTCString();

			let div = document.getElementById('nekocafe-status');

			div.innerHTML = `
                <h1 id="nekocafe-poster"><a href="${profile_url + username}">Nekocafe</a></h1>
                <p id="nekocafe-time">${time}</p>
                <blockquote><p id="nekocafe-text"><a href="${post_url + json['id']}">${json['post']}</a></p></blockquote>
            `;
		} catch (error) {
			console.error(error);
		}
	});
</script>

<div id="nekocafe-status"></div>