<script context="module">

	import {APP_CONFIGURATION} from '../../appConfiguration';

	export async function preload({host, path, params, query}, session) {

		let [nid, titleSlug] = params.slug;

		// console.log("article preload nid=", nid);
		// console.log("processbrowser ", process.browser);
		console.log("article path=", path);

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/view/article?_format=json&nid=${nid}`);

		const jsonresponse = await res.json();

		const article = jsonresponse[0];

		const dataBundle = {
			article: article,
			path: path
		};

		return {dataBundle};

	}

</script>

<script>
	import ContentPane from "../../components/panes/ContentPane.svelte";
	import HeaderImage from "../../components/images/HeaderImage.svelte";
	import SeparatorPane from "../../components/panes/SeparatorPane.svelte";
	import HeadlineText from "../../components/texts/HeadlineText.svelte";
	import NarrationText from "../../components/texts/NarrationText.svelte";



	// FIXME it lookslike this prop cannot be modified
	export let dataBundle;

	// console.log(dataBundle);

</script>

<style>

</style>


<svelte:head>
	<meta property="og:title" content={dataBundle.article.title} />
	<meta property="og:image" content={dataBundle.article.field_header_image ?
		  APP_CONFIGURATION.backendUrl + dataBundle.article.field_header_image :
		  APP_CONFIGURATION.backendUrl + dataBundle.article.field_image} />
	<meta property='og:description' content={dataBundle.article.title} />
	<meta property='og:url' content={APP_CONFIGURATION.homePageUrl + dataBundle.path} />
</svelte:head>

<ContentPane>

	{#if dataBundle.article.field_header_image}
		<HeaderImage src={APP_CONFIGURATION.backendUrl + dataBundle.article.field_header_image}
					 alt={dataBundle.article.title}
					 backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]} />
	{/if}

	<SeparatorPane />

	<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}
				  large={true}>

		{dataBundle.article.title}

	</HeadlineText>

	<NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>

		{@html dataBundle.article.body}

	</NarrationText>

</ContentPane>

