<script context="module">

	// export function preload({ params, query }) {
	//
	// 	console.log("params", params);
	//
	// 	console.log("query", query);
	//
	// 	let posts = [{ title: 'my title' }];
	//
	//
	//
	// 	return JSON.stringify(posts);
	// 	// return APP_CONFIGURATION.backendUrl + "/rest/EMS/view/articles?_format=json&langcode=en"
	//
	// 	// fetch(APP_CONFIGURATION.backendUrl + "/rest/EMS/view/articles?_format=json&langcode=en" +
	// 	// 		filter_query_string + "&page=" + page_number, {
	// 	// 	method: 'GET',
	// 	// })
	// 	// 		.then((response) => {
	// 	// 			if (!response.ok) { throw response }
	// 	// 			return response.json()
	// 	// 		})
	// 	// 		.then((response) => {
	// 	//
	// 	// 			//this.add_results_to_cache(filter_query_string, response.results);
	// 	//
	// 	// 			//this.update_count_of_articles_for_query(filter_query_string, parseInt(response.count, 10));
	// 	//
	// 	// 			//callback(true);
	// 	// 		})
	// 	// 		.catch((error) => {
	// 	//
	// 	// 			//const error_message = error_message_from_error(error);
	// 	//
	// 	// 			//Sentry.captureMessage(error_message);
	// 	//
	// 	// 			//callback(false);
	// 	// 			console.error(error);
	// 	// 		});
	//
	// 	// return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
	// 	// 	return { posts };
	// 	// });
	// }

	// FIXME fix page title
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>FIXME</title>
</svelte:head>

<h1>Recent posts</h1>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li>{post.title}</li>
	{/each}
</ul>

<!--<li><a rel='prefetch' href='article/{post.slug}'>{post.title}</a></li>-->
