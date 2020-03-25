<script context="module">

	import { APP_CONFIGURATION } from '../../appConfiguration';
	import { titleToSlug } from '../../helpers/title_to_slug';

	//let articles;



	// export let articlesCount;
	//
	// export let topicForRestApi;

	export async function preload({ host, path, params, query }, session) {
		// the `slug` parameter is available because
		// this file is called [slug].svelte
		//const res = await this.fetch(`blog/${params.slug}.json`);
		//const data = await res.json();

		// console.log("params",params);
		// console.log("host",host);
		// console.log("path",path);
		// console.log("query",query);


		// FIXME session is generated on the server by the session option passed to sapper.middlewar

		// console.log("session",session);
		// params { slug: 'services' }
		// query {}


		//const data = { title: params.topic, html: "boh html" };

		let topicForRestApi = APP_CONFIGURATION.topicURL2topicLookupTable[params.topic];

		if (topicForRestApi === "Tech watch")
			topicForRestApi = "Talking about my experiences";

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${topicForRestApi}`);

		const jsonresponse = await res.json();

		const articles = jsonresponse.results;

		//articles.map(());

		// const articlesCount = jsonresponse.count;

		const dataBundle = { articles: articles,
			count: jsonresponse.count,
			topic: topicForRestApi,
			page: 0 };

		// FIXME do I need this return?
		return { dataBundle };


		// this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${topicForRestApi}`)
		// 	.then((response) => {
		// 		if (!response.ok) { throw response }
		//
		// 		return response.json()
		// 	})
		// 	.then((jsonresponse) => {
		//
		// 		const articles = jsonresponse.results;
		//
		// 		//articles.map(());
		//
		// 		// const articlesCount = jsonresponse.count;
		//
		// 		const dataBundle = { articles: articles,
		// 			count: jsonresponse.count,
		// 			topic: topicForRestApi,
		// 			page: 0 };
		//
		// 		console.log(dataBundle);
		//
		// 		// FIXME do I need this return?
		// 		return { dataBundle };
		//
		// 	})
		// 	.catch((error) => {
		//
		// 		//const error_message = error_message_from_error(error);
		//
		// 		//Sentry.captureMessage(error_message);
		//
		// 		//callback(false);
		//
		// 		console.error("Error in 7878fhsudhfusdhf");
		// 	});


		//const jsonresponse = await res.json();




		//return { post: data };



		// if (res.status === 200) {
		// 	return { post: data };
		// } else {
		// 	this.error(res.status, data.message);
		// }
	}



	// export async function preload({ params, query }) {
	// 	// the `slug` parameter is available because
	// 	// this file is called [slug].svelte
	// 	const res = await this.fetch(`blog/${params.slug}.json`);
	// 	const data = await res.json();
	//
	// 	if (res.status === 200) {
	// 		return { post: data };
	// 	} else {
	// 		this.error(res.status, data.message);
	// 	}
	// }
	//console.log(params);

	//console.log(query);

</script>

<script>

	import { onDestroy } from 'svelte';


	// import { setContext } from 'svelte';

	// FIXME it lookslike this prop cannot be modified
	export let dataBundle;

	let dynamicDataBundle = dataBundle;

	//let refreshCounter = 0;

	import { stores } from '@sapper/app';

	const { preloading, page, session } = stores();

	// console.log("preloading",preloading);
	// console.log("page",page);
	console.log("session top of script",session);

	console.log("dataBundle top of script",dataBundle);



	//session.set(dataBundle);

	//let currentSession;

	//let page = 0;

	const unsubscribe = session.subscribe(value => {
		console.log("session in subscribe value=", value);

		//currentSession = value;

		if (typeof value === "undefined") {

			session.set({ dataBundle: dynamicDataBundle });
		} else {

			// console.log("subscribe value.dataBundle.articles",value.dataBundle.articles);
			// console.log("subscribe dataBundle.articles",dataBundle.articles);

			if (value.dataBundle.articles.length !== dynamicDataBundle.articles.length) {
				dynamicDataBundle = value.dataBundle;
				console.log("assigned dynamicDataBundle in subscribe ");

			}
		}

		// let newvalue;
		// let updateRequired = false;
		//
		// if (typeof value === "undefined") {
		// 	newvalue = {};
		// 	updateRequired = true;
		// } else
		// 	newvalue = value;
		//
		// if (typeof newvalue.dataBundle === "undefined") {
		// 	newvalue.dataBundle = dataBundle;
		// 	updateRequired = true;
		// }
		//
		//
		//
		// if (updateRequired) {
		// 	session.set(newvalue);
		// 	console.log("Just set newvalue in subscribe", newvalue);
		// }
		//
		// if (!updateRequired && typeof dataBundle !== "undefined")
		// 	if (value.dataBundle.articles.length !== dataBundle.articles.length)
		// 	    dataBundle = value.dataBundle;
	});

	// FIXME need to add unsubscribe on ondestroy

	// const currentSession = session.get();

	// session.set({ dataBundle: dataBundle });


	//let previousArticles;

	//$: previousArticles = articles; articles = getMoreArticles(page);

	function handleClick() {

		// FIXME maybe a check that page 0 is actually there

		dynamicDataBundle.page++;

		// FIXME here  I have to check that page doen't get too large

		getMoreArticles(dynamicDataBundle.page);
	}

	async function getMoreArticles(page) {

		if (page === 0 || page === undefined) {
			// FIXME maybe error message
			return;
		}

		console.log("Running getMoreArticles page=" + page);
		console.log("dataBundle.articles before fetch", dataBundle.articles);

		const res = await fetch(`https://backend.emanuelesantanche.com/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${dataBundle.topic}&page=${page}`)

		const jsonresponse = await res.json();

		const additionalArticles = jsonresponse.results;

		let newDataBundle = {};

		// const dataBundle = { articles: articles,
		// 	count: jsonresponse.count,
		// 	topic: topicForRestApi,
		// 	page: 0 };
		//

		newDataBundle.count = dynamicDataBundle.count;
		newDataBundle.topic = dynamicDataBundle.topic;
		newDataBundle.page = dynamicDataBundle.page;

		newDataBundle.articles = [...dynamicDataBundle.articles, ...additionalArticles];

		console.log("in getMoreArticles jsonresponse dataBundle.articles.length", dynamicDataBundle.articles.length);

		dynamicDataBundle.articles = [...newDataBundle.articles];

		//refreshCounter++;

		session.set({ dataBundle: dynamicDataBundle });



	// .then((response) => {
	// 			if (!response.ok) { throw response }
	//
	// 			return response.json();
	// 		})
	// 		.then((jsonresponse) => {
	//
	// 			// const articles = jsonresponse.results;
	//
	// 			//articles.map(());
	//
	// 			// const articlesCount = jsonresponse.count;
	//
	// 			const additionalArticles = jsonresponse.results;
	//
	// 			// with a push it doesn't work
	// 			dataBundle.articles = [...dataBundle.articles, ...additionalArticles];
	//
	//
	// 			// dataBundle.articles.push(...additionalArticles);
	//
	// 			// FIXME this useless statemet seems to be essential
	// 			// dataBundle = dataBundle;
	//
	//
	// 			refreshCounter++;
	//
	// 			session.set({ dataBundle: dataBundle });
	//
	// 			console.log("in then jsonresponse dataBundle.articles.length", dataBundle.articles.length);
	// 			// const dataBundle = { articles: articles,
	// 			// 	count: jsonresponse.count,
	// 			// 	topic: topicForRestApi,
	// 			// 	page: 0 };
	//
	// 			// FIXME do I need this return?
	// 			// return { dataBundle };
	//
	// 		})
	// 		.catch((error) => {
	//
	// 			//const error_message = error_message_from_error(error);
	//
	// 			//Sentry.captureMessage(error_message);
	//
	// 			//callback(false);
	//
	// 			console.error("Error in ndsf8877vf8hh8h");
	// 		});

	}


	onDestroy(unsubscribe);
</script>



<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/
	/*.content :global(h2) {*/
	/*	font-size: 1.4em;*/
	/*	font-weight: 500;*/
	/*}*/

	/*.content :global(pre) {*/
	/*	background-color: #f9f9f9;*/
	/*	box-shadow: inset 1px 1px 5px rgba(0,0,0,0.05);*/
	/*	padding: 0.5em;*/
	/*	border-radius: 2px;*/
	/*	overflow-x: auto;*/
	/*}*/

	/*.content :global(pre) :global(code) {*/
	/*	background-color: transparent;*/
	/*	padding: 0;*/
	/*}*/

	/*.content :global(ul) {*/
	/*	line-height: 1.5;*/
	/*}*/

	/*.content :global(li) {*/
	/*	margin: 0 0 0.5em 0;*/
	/*}*/
</style>

<!--<svelte:head>-->
<!--	<title>{post.title}</title>-->
<!--</svelte:head>-->

<!--<h1>{post.title}</h1>-->

<!--<div class='content'>-->

<!--	{@html post.html}-->
<!--</div>-->

<p>articlesCount = {dataBundle.count}</p>

<p>topicForRestApi = {dataBundle.topic}</p>

<p>dataBundle.articles.length = {dataBundle.articles.length}</p>

<p>dynamicDataBundle.articles.length = {dynamicDataBundle.articles.length}</p>


<p>page = {dataBundle.page}</p>

<!--<p>refreshCounter = {refreshCounter}</p>-->


{#each dynamicDataBundle.articles as article}
	<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
	<p>{article.title}<br>
	   {article.field_ems_topic}<br>
	   {article.nid}<br>
	   {"/article/" + article.nid + "/" + titleToSlug(article.title)}<p>

<!--	<a href={"/article/" + article.nid + "/" + titleToSlug(article.title)}>Go</a>-->


		<a href="/articles/services">Go</a>


		<img src={APP_CONFIGURATION.backendUrl + article.field_image} alt={article.title} style="width:200px">

{/each}

<!--{#await articles}-->
<!--	<p>...just a moment</p>-->
<!--{:then articles}-->
<!--	{typeof articles}-->
<!--	{#each articles as article}-->
<!--		&lt;!&ndash; we're using the non-standard `rel=prefetch` attribute to-->
<!--				tell Sapper to load the data for the page as soon as-->
<!--				the user hovers over the link or taps it, instead of-->
<!--				waiting for the 'click' event &ndash;&gt;-->
<!--		<p>{article.title}<br>-->
<!--			{article.field_ems_topic}<br>-->
<!--		{article.nid}<p>-->

<!--			<img src={APP_CONFIGURATION.backendUrl + article.field_image} style="width:200px">-->

<!--	{/each}-->
<!--{:catch error}-->
<!--	<p style="color: red">{error.message}</p>-->
<!--{/await}-->

<button on:click={handleClick}>
	MORE
</button>


<!--	let newvalue;-->
<!--	let updateRequired = false;-->

<!--	if (typeof value === "undefined") {-->
<!--newvalue = {};-->
<!--updateRequired = true;-->
<!--} else-->
<!--	newvalue = value;-->

<!--	if (typeof newvalue.dataBundle === "undefined") {-->
<!--newvalue.dataBundle = dataBundle;-->
<!--updateRequired = true;-->
<!--}-->



<!--	if (updateRequired) {-->
<!--session.set(newvalue);-->
<!--console.log("Just set newvalue in subscribe", newvalue);-->
<!--}-->

<!--	if (!updateRequired && typeof dataBundle !== "undefined")-->
<!--	if (value.dataBundle.articles.length !== dataBundle.articles.length)-->
<!--	dataBundle = value.dataBundle;-->