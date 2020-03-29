<script context="module">

	import {APP_CONFIGURATION} from '../../appConfiguration';
	import {titleToSlug} from '../../helpers/title_to_slug';

	// FIXME session is useless and host too
	export async function preload({host, params}, session) {

		// console.log("preload ", params);
		// console.log("preload ", host);
		// console.log("processbrowser ", process.browser);

		let [topic, page] = params.slug;

		console.log("params " + topic + "," + page);


		if (typeof page == "undefined")
			page = 1;
		else
			page = parseInt(page);


		// page starts from 1

		//if (process.browser) return;

		let topicForRestApi = APP_CONFIGURATION.topicURL2topicLookupTable[topic];

		if (topicForRestApi === "Tech watch")
			topicForRestApi = "Talking about my experiences";

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/EMS/v2/view/articles?_format=json&field_ems_topic_target_id=${topicForRestApi}&page=${page - 1}`);

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
	import WideContentPane from "../../components/panes/WideContentPane.svelte";
	import StandardLink from "../../components/links/StandardLink.svelte";
	import HeadlineText from "../../components/texts/HeadlineText.svelte";
	import ColumnsPane from "../../components/panes/ColumnsPane.svelte";
	import ColoredPane from "../../components/panes/ColoredPane.svelte";
	import OneThirdHeightPane from "../../components/panes/OneThirdHeightPane.svelte";
	import CoverFittingImage from "../../components/images/CoverFittingImage.svelte";
	import CentredTextBox from "../../components/boxes/CentredTextBox.svelte";
	import CenteringPane from "../../components/panes/CenteringPane.svelte";
	import MarginTopPane from "../../components/panes/MarginTopPane.svelte";
	import SeparatorPane from "../../components/panes/SeparatorPane.svelte";
	import StandardButton from "../../components/buttons/StandardButton.svelte";


	// FIXME rename this
	export let dataBundle;

	let screenWidth;

	let articles_pairs;

	$: articles_pairs = dataBundle.articles.reduce((articles_pairs, article, index, articles) => {

		if (index % 2 === 0)
			articles_pairs.push(articles.slice(index, index + 2));

		return articles_pairs;

	}, []);

	/**
	 * FIXME
	 * page starts from 1
	 *
	 * @param page
	 * @param count
	 * @param pagesize
	 * @returns {boolean}
	 */
	function morePages(page, count, pagesize) {

		return (page * pagesize) < count;
	}

	// FIXME this function may have been duplicated
	function backgroundColor(screenWidth, configuration, itIsLeftColumn, row) {

		let useLighterColor = true;

		if (itIsLeftColumn)
			useLighterColor = !useLighterColor;

		if (row % 2 === 0 && (screenWidth >= configuration.responsiveBreakpoints.large))
			useLighterColor = !useLighterColor;

		// console.log("backgroundColor: " + row + " --- " + itIsLeftColumn + " --- " + useLighterColor);

		if (useLighterColor)
			return configuration.defaultColorsTable["DARKGREY"];
		else
			return configuration.defaultColorsTable["VERYDARKGREY"];

	}

</script>



<style>

</style>

<svelte:window bind:innerWidth={screenWidth} />



<WideContentPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>
	<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}
				  large={true}>

		<span>{APP_CONFIGURATION.topicURL2topicLookupTable[dataBundle.topic]}</span>

	</HeadlineText>
</WideContentPane>


<WideContentPane>



{#each articles_pairs as pair_of_articles, index}
	<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->

	<ColumnsPane>

		<span slot="left">

			<StandardLink to={"/article/" + pair_of_articles[0].nid + "/" + titleToSlug(pair_of_articles[0].title)}>

				<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, true, index)}>

					<OneThirdHeightPane>

						<CoverFittingImage src={APP_CONFIGURATION.backendUrl + pair_of_articles[0].field_image}
										   alt={pair_of_articles[0].title}/>

					</OneThirdHeightPane>

					<CentredTextBox size="short">
						<HeadlineText>{pair_of_articles[0].title}</HeadlineText>
					</CentredTextBox>

				</ColoredPane>

			</StandardLink>

		</span>

		<span slot="right">

			{#if pair_of_articles.length === 2}

				<StandardLink to={"/article/" + pair_of_articles[1].nid + "/" + titleToSlug(pair_of_articles[1].title)}>

					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, false, index)}>

						<OneThirdHeightPane>

							<CoverFittingImage src={APP_CONFIGURATION.backendUrl + pair_of_articles[1].field_image}
											   alt={pair_of_articles[1].title}/>

						</OneThirdHeightPane>

						<CentredTextBox size="short">
							<HeadlineText>{pair_of_articles[1].title}</HeadlineText>
						</CentredTextBox>

					</ColoredPane>

				</StandardLink>

			{/if}
		</span>

	</ColumnsPane>

{/each}


</WideContentPane>


{#if morePages(dataBundle.page, dataBundle.count, APP_CONFIGURATION.fetchPageSize)}

	<CenteringPane>
		<MarginTopPane size="tall">
			<StandardLink to={"/articles/" + dataBundle.topic + "/" + (dataBundle.page + 1)}>
				<StandardButton>Next</StandardButton>
			</StandardLink>
		</MarginTopPane>
		<SeparatorPane size="short" />
	</CenteringPane>

<!--	<CenteringPane>-->
<!--		<MarginTopPane size="tall">-->
<!--			<StandardButton onclick={this.handleLoadMoreButtonClick.bind(this)}>-->
<!--				MORE-->
<!--			</StandardButton>-->
<!--		</MarginTopPane>-->
<!--		<SeparatorPane size="short" />-->
<!--	</CenteringPane>-->

{/if}

