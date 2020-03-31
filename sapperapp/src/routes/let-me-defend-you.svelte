<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
	import {APP_CONFIGURATION} from '../appConfiguration';

	import FullWidthPane from "../components/panes/FullWidthPane.svelte";
	import ShieldPane from "../components/panes/ShieldPane.svelte";
	import HeadlineText from "../components/texts/HeadlineText.svelte";
	import SeparatorPane from "../components/panes/SeparatorPane.svelte";
	import ContentPane from "../components/panes/ContentPane.svelte";
	import LetMeDefendYouForm from "../components/forms/LetMeDefendYouForm.svelte";
	import NarrationPane from "../components/panes/NarrationPane.svelte";

</script>

<svelte:head>
	<title>Leadership Coach for Tech, Contact me</title>
</svelte:head>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["LIGHTGREY"]}>
	<ShieldPane>
		<img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

	<NarrationPane>
		<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>
			Contact me
		</HeadlineText>
	</NarrationPane>

	<SeparatorPane/>

	<ContentPane>

		<LetMeDefendYouForm />

	</ContentPane>

	<SeparatorPane/>

</FullWidthPane>