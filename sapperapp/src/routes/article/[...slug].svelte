<!--
@file FIXME doc to do
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script context="module">

	import {APP_CONFIGURATION} from '../../appConfiguration';
	import {error_message_from_error} from "../../helpers/errorMessages";
	import * as Sentry from '@sentry/browser';

	export async function preload({path, params}) {

		let [nid] = params.slug;

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/view/article?_format=json&nid=${nid}`);

		if (!res.ok) {

			console.error("Error in fetching article", res);

			const error_message = error_message_from_error(res);

			Sentry.captureMessage(error_message);

			throw new Error(error_message);

		} else {

			const jsonresponse = await res.json();

			const article = jsonresponse[0];

			const dataBundle = {
				article: article,
				path: path
			};

			return {dataBundle};

		}

	}

</script>

<script>
	import ContentPane from "../../components/panes/ContentPane.svelte";
	import HeaderImage from "../../components/images/HeaderImage.svelte";
	import SeparatorPane from "../../components/panes/SeparatorPane.svelte";
	import HeadlineText from "../../components/texts/HeadlineText.svelte";
	import NarrationText from "../../components/texts/NarrationText.svelte";
	import FullWidthPane from "../../components/panes/FullWidthPane.svelte";

	export let dataBundle;
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
	<title>Leadership Coach for Tech, {dataBundle.article.title}</title>
</svelte:head>


<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]} noPadding={true}>
	<SeparatorPane size="tall"/>
</FullWidthPane>

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

