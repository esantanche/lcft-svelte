<script context="module">

	import {APP_CONFIGURATION} from '../../appConfiguration';
	import {titleToSlug} from '../../helpers/title_to_slug';

	// FIXME session is useless and host too
	export async function preload({host, params}, session) {

		console.log("preload ", params);
		console.log("preload ", host);
		console.log("processbrowser ", process.browser);

		let [topic, page] = params.slug;

		console.log("params " + topic +","+page);

		if (typeof page == "undefined")
			page = 0;

		//if (process.browser) return;

		let topicForRestApi = APP_CONFIGURATION.topicURL2topicLookupTable[topic];

		if (topicForRestApi === "Tech watch")
			topicForRestApi = "Talking about my experiences";

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${topicForRestApi}&page=${page}`);

		// FIXME what if res.ok is false?

		const jsonresponse = await res.json();

		const articles = jsonresponse.results;

		const dataBundle = {
			articles: articles,
			count: jsonresponse.count,
			topic: topic,
			page: page
		};

		return {dataBundle};

	}

</script>

<script>
	import StandardLink from "../../components/links/StandardLink.svelte";


	export let dataBundle;

	//let dynamicDataBundle;

	// if (typeof dataBundle == "undefined") {
	// 	console.log("going to get articles for page 0");
	// 	dataBundle = getMoreArticles(0);
	// 	console.log(dataBundle);
	//
	// }

	// let hideButton = true;
	//
	// if (morePages(dataBundle.page, dataBundle.count, APP_CONFIGURATION.fetchPageSize))
	// 	hideButton = false;

	// function handleClick() {
	//
	// 	// FIXME maybe a check that page 0 is actually there
	//
	// 	dataBundle.page++;
	//
	// 	// FIXME here  I have to check that page doen't get too large
	//
	// 	getMoreArticles(dataBundle.page);
	//
	//
	//
	// 	// if (morePages(dataBundle.page, dataBundle.count, APP_CONFIGURATION.fetchPageSize)) {
	// 	// 	dataBundle.page++;
	// 	//
	// 	// 	// FIXME here  I have to check that page doen't get too large
	// 	//
	// 	// 	getMoreArticles(dataBundle.page);
	// 	//
	// 	// } else {
	// 	// 	dataBundle = dataBundle;
	// 	// }
	//
	// }


	// function morePages(page, count, pagesize) {
	//
	// 	console.log(page + "/" + count + "/" + pagesize);
	//
	// 	return ((page + 1) * pagesize) < count;
	// }

	// async function getMoreArticles(page) {
	//
	// 	// if (page === 0 || page === undefined) {
	// 	// 	// FIXME maybe error message
	// 	// 	return;
	// 	// }
	//
	// 	const topic = "Talking about my experiences";
	//
	// 	// dataBundle.topic
	// 	// console.log("Running getMoreArticles page=" + page);
	// 	// console.log("dataBundle.articles before fetch", dataBundle.articles);
	//
	// 	const res = await fetch(`https://backend.emanuelesantanche.com/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${topic}&page=${page}`)
	//
	// 	const jsonresponse = await res.json();
	//
	// 	const additionalArticles = jsonresponse.results;
	//
	// 	if (typeof dataBundle.articles == "undefined") {
	// 		dataBundle = {};
	// 		dataBundle.articles = [...additionalArticles];
	// 		dataBundle.page = 0;
	// 	}
	// 	else
	// 		dataBundle.articles = [...dataBundle.articles, ...additionalArticles];
	//
	// 	console.log(dataBundle);
	//
	// 	return dataBundle;
	//
	// 	// if (!morePages(dataBundle.page, dataBundle.count, APP_CONFIGURATION.fetchPageSize)) {
	// 	//
	// 	// 	hideButton = true;
	// 	//
	// 	// }
	//
	// 	// console.log("in getMoreArticles jsonresponse dataBundle.articles.length", dataBundle.articles.length);
	//
	// }

	function morePages(page, count, pagesize) {


		return ((page + 1) * pagesize) < count;
	}


</script>



<style>

</style>


<!--<p>articlesCount = {dataBundle.count}<br>-->

<!--topicForRestApi = {dataBundle.topic}<br>-->

<!--dataBundle.articles.length = {dataBundle.articles.length}<br>-->

<!--&lt;!&ndash;<p>dynamicDataBundle.articles.length = {dynamicDataBundle.articles.length}</p>&ndash;&gt;-->

<!--page = {dataBundle.page}</p>-->

<!--<p>refreshCounter = {refreshCounter}</p>-->


<!--{#await dataBundle}-->
<!--	<p>...just a moment</p>-->
<!--{:then dataBundle}-->
<!--	{#each dataBundle.articles as article}-->
<!--		&lt;!&ndash; we're using the non-standard `rel=prefetch` attribute to-->
<!--				tell Sapper to load the data for the page as soon as-->
<!--				the user hovers over the link or taps it, instead of-->
<!--				waiting for the 'click' event &ndash;&gt;-->
<!--		<p>{article.title}<br>-->
<!--		{article.nid}<p>-->

<!--			<StandardLink to={"/article/" + article.nid + "/" + titleToSlug(article.title)}>go</StandardLink>-->

<!--&lt;!&ndash;	<a href={"/article/" + article.nid + "/" + titleToSlug(article.title)}>Go</a>&ndash;&gt;-->

<!--			<img src={APP_CONFIGURATION.backendUrl + article.field_image} alt={article.title} style="width:50px">-->

<!--	{/each}-->
<!--{:catch error}-->
<!--	<p style="color: red">{error.message}</p>-->
<!--{/await}-->


{#each dataBundle.articles as article}
	<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
	<p>{article.title}<br>
	   {article.nid}<p>

	<StandardLink to={"/article/" + article.nid + "/" + titleToSlug(article.title)}>go</StandardLink>

<!--	<a href={"/article/" + article.nid + "/" + titleToSlug(article.title)}>Go</a>-->

	<img src={APP_CONFIGURATION.backendUrl + article.field_image} alt={article.title} style="width:50px">

{/each}


<!--{#if !hideButton}-->

<!--<a href=""></a>-->


{#if morePages(dataBundle.page, dataBundle.count, APP_CONFIGURATION.fetchPageSize)}
	<StandardLink to={"/articles/" + dataBundle.topic + "/" + (dataBundle.page + 1)}>next</StandardLink>
{/if}



<!--<button on:click={handleClick}>-->
<!--	MORE-->
<!--</button>-->

<!--{/if}-->
