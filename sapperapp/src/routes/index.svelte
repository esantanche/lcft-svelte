<script>
	import FullViewPortPane from "../components/panes/FullViewPortPane.svelte";
	import ShieldPane from "../components/panes/ShieldPane.svelte";
	import NarratinPane from "../components/panes/NarrationPane.svelte";
	import {APP_CONFIGURATION} from '../appConfiguration';
	import NarrationPane from "../components/panes/NarrationPane.svelte";
</script>

<style>
	/*h1, figure, p {*/
	/*	text-align: center;*/
	/*	margin: 0 auto;*/
	/*}*/

	/*h1 {*/
	/*	font-size: 2.8em;*/
	/*	text-transform: uppercase;*/
	/*	font-weight: 700;*/
	/*	margin: 0 0 0.5em 0;*/
	/*}*/

	/*figure {*/
	/*	margin: 0 0 1em 0;*/
	/*}*/

	/*img {*/
	/*	width: 100%;*/
	/*	max-width: 400px;*/
	/*	margin: 0 0 1em 0;*/
	/*}*/

	/*p {*/
	/*	margin: 1em auto;*/
	/*}*/

	/*@media (min-width: 480px) {*/
	/*	h1 {*/
	/*		font-size: 4em;*/
	/*	}*/
	/*}*/
</style>

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>



<!--<h1>Great success!</h1>-->

<!--<figure>-->
<!--	<img alt='Borat' src='great-success.png'>-->
<!--	<figcaption>HIGH FIVE!</figcaption>-->
<!--</figure>-->

<!--<p><strong>Try editing this file (src/routes/index.svelte) to test live reloading.</strong></p>-->

<!--<p>This is my paragraph 7das8</p>-->

<FullViewPortPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["BLUE"]}>

	<ShieldPane>
	    <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

    <NarrationPane>
		this is inside the narration pane
		Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.

	</NarrationPane>

<!--	<NarrationPane>-->
<!--		<NarrationText>-->

<!--			<HeadlineText large={true}>-->
<!--				<i>Emanuele Santanche,<br/>leadership coach for technology.</i>-->
<!--			</HeadlineText>-->

<!--			<SeparatorPane/>-->

<!--			<HeadlineText large={true}>-->
<!--				<i>Defending your chances of success<br/>-->
<!--					from lousy leadership practices.</i>-->
<!--			</HeadlineText>-->

<!--			<SeparatorPane/>-->

<!--			<HeadlineText large={true}>-->
<!--				<i>Taming the complexity beast &mdash; Tackling management by fear &mdash;-->
<!--					Managing motivation &mdash; Managing time &mdash; Designing recruitment processes.</i>-->
<!--			</HeadlineText>-->

<!--			<SeparatorPane/>-->

<!--		</NarrationText>-->
<!--	</NarrationPane>-->
</FullViewPortPane>
