<!--
@file FIXME
-->

<script>
	import {APP_CONFIGURATION} from '../appConfiguration';

	import FullWidthPane from "../components/panes/FullWidthPane.svelte";
	import HeadlineText from "../components/texts/HeadlineText.svelte";
	import SeparatorPane from "../components/panes/SeparatorPane.svelte";
	import ContentPane from "../components/panes/ContentPane.svelte";
	import LetMeDefendYouForm from "../components/forms/LetMeDefendYouForm.svelte";
	import NarrationPane from "../components/panes/NarrationPane.svelte";

</script>

<svelte:head>
	<title>Leadership Coach for Tech, Contact me</title>
</svelte:head>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]} noPadding={true}>
	<SeparatorPane size="tall"/>
</FullWidthPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["LIGHTGREY"]}>

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