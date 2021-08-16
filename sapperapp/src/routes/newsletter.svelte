<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->


<script context="module">

	import {APP_CONFIGURATION} from '../appConfiguration';
	import {error_message_from_error} from "../helpers/errorMessages";
	import * as Sentry from '@sentry/browser';

	export async function preload({path, params}) {

		// FIXME the 254 should be a parameter?

		// FIXME what is path for?

		const nid_of_newsletter_landing_page = 254;

		//let [nid] = params.slug;

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
	import LetMeDefendYouForm from "../components/forms/LetMeDefendYouForm.svelte";
	import NarrationPane from "../components/panes/NarrationPane.svelte";
	import NarrationText from "../components/texts/NarrationText.svelte";

	export let dataBundle;

</script>

<svelte:head>
	<title>Leadership Coach for Tech, Contact me</title>
</svelte:head>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]} noPadding={true}>
	<SeparatorPane size="tall"/>
</FullWidthPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["BLUE"]}>

	<ContentPane>

		<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}
					  large={true}>

			{dataBundle.article.title}

		</HeadlineText>

		<NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>

			{@html dataBundle.article.body}

		</NarrationText>

	</ContentPane>

	<NarrationPane>
		<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>
			ContFIXME subscribe to newsletter act me
		</HeadlineText>
	</NarrationPane>

	<SeparatorPane/>

	<ContentPane>

FIXME here the form for the newsletter

<!--		<LetMeDefendYouForm />-->

	</ContentPane>

	<SeparatorPane/>

</FullWidthPane>