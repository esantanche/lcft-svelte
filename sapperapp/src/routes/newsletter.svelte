<!--
@file FIXME
-->

<script context="module">

	import {APP_CONFIGURATION} from '../appConfiguration';
	import {error_message_from_error} from "../helpers/errorMessages";
	import * as Sentry from '@sentry/browser';

	export async function preload({path, params}) {

		// FIXME the 254 should be a parameter? Maybe it could stay in app configuration

		// FIXME what is path for?

		const nid_of_newsletter_landing_page = 254;

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/view/article?_format=json&nid=${nid_of_newsletter_landing_page}`);

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

	import FullWidthPane from "../components/panes/FullWidthPane.svelte";
	import HeadlineText from "../components/texts/HeadlineText.svelte";
	import SeparatorPane from "../components/panes/SeparatorPane.svelte";
	import ContentPane from "../components/panes/ContentPane.svelte";
    import NewsletterForm from "../components/forms/NewsletterForm.svelte";
    import NarrationPane from "../components/panes/NarrationPane.svelte";
	import NarrationText from "../components/texts/NarrationText.svelte";
	import HeaderImage from "../components/images/HeaderImage.svelte";

	export let dataBundle;

</script>

<svelte:head>
	<meta property="og:title" content={dataBundle.article.title} />
	<meta property="og:image" content={dataBundle.article.field_header_image ?
		  APP_CONFIGURATION.backendUrl + dataBundle.article.field_header_image :
		  APP_CONFIGURATION.backendUrl + dataBundle.article.field_image} />
	<meta property='og:description' content={dataBundle.article.field_description} />
	<meta name=”description” content={dataBundle.article.field_description}>
	<meta property='og:url' content={APP_CONFIGURATION.homePageUrl + dataBundle.path} />
	<title>Leadership Coach for Tech, get my free course "The Secrets of Management"</title>
</svelte:head>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]} noPadding={true}>
	<SeparatorPane size="tall"/>
</FullWidthPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>

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

	<NarrationPane>
		<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]}>
			Enter your email address to get the free course and the newsletter.
		</HeadlineText>
	</NarrationPane>

	<SeparatorPane/>

	<ContentPane>

        <NewsletterForm />

	</ContentPane>

	<SeparatorPane/>

</FullWidthPane>