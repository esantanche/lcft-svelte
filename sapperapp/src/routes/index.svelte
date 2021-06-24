<!--
@file FIXME doc to do
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->
<script context="module">

	import {APP_CONFIGURATION} from '../appConfiguration';
	import {error_message_from_error} from "../helpers/errorMessages";
	import * as Sentry from '@sentry/browser';

	export async function preload() {

		const res = await this.fetch(`${APP_CONFIGURATION.backendUrl}/rest/LCFT/view/servicesindex?_format=json`);

		if (!res.ok) {

			console.error("Error in fetching services index", res);

			const error_message = error_message_from_error(res);

			Sentry.captureMessage(error_message);

			throw new Error(error_message);

		} else {

			const jsonresponse = await res.json();

			const services = jsonresponse.results;

			const dataBundle = {
				services: services
			};

			return {dataBundle};
		}

	}

</script>

<script>
	import {backgroundColor} from '../helpers/background_color';
	import {titleToSlug} from '../helpers/title_to_slug';

	import FullViewPortPane from "../components/panes/FullViewPortPane.svelte";
	import FullWidthPane from "../components/panes/FullWidthPane.svelte";
	import ShieldPane from "../components/panes/ShieldPane.svelte";
	import NarrationPane from "../components/panes/NarrationPane.svelte";
	import NarrationText from "../components/texts/NarrationText.svelte";
	import HeadlineText from "../components/texts/HeadlineText.svelte";
	import SeparatorPane from "../components/panes/SeparatorPane.svelte";
	import WideContentPane from "../components/panes/WideContentPane.svelte";
	import ColumnsPane from "../components/panes/ColumnsPane.svelte";
	import StandardLink from "../components/links/StandardLink.svelte";
	import OneThirdHeightPane from "../components/panes/OneThirdHeightPane.svelte";
	import CoverFittingImage from "../components/images/CoverFittingImage.svelte";
	import CentredTextBox from "../components/boxes/CentredTextBox.svelte";
	import ColoredPane from "../components/panes/ColoredPane.svelte";
	import LetMeDefendYouForm from "../components/forms/LetMeDefendYouForm.svelte";
	import ContentPane from "../components/panes/ContentPane.svelte";

	let screenWidth;

	export let dataBundle;

	let services_pairs;

	$: services_pairs = dataBundle.services.reduce((services_pairs, service, index, services) => {

		if (index % 2 === 0)
			services_pairs.push(services.slice(index, index + 2));

		return services_pairs;

	}, []);

</script>

<svelte:head>
	<meta property="google-site-verification" content="PMDPQpQDqCmyGM4HeruuOXemu1X9UxBcU9qop3ywqOQ" />
	<title>Leadership Coach for Tech</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]} noPadding={true}>
	<SeparatorPane size="tall"/>
</FullWidthPane>

<FullViewPortPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["BLUE"]}>

	<ShieldPane>
	    <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

    <NarrationPane>

		<HeadlineText large={true}>
			<i>Emanuele Santanche,<br/>leadership coach for technology.</i>
		</HeadlineText>

		<SeparatorPane/>

		<HeadlineText large={true}>
			<i>Improving your chances of success in making smart technological choices and helping you develop leadership practices that improve motivation, productivity and problem solving skills.</i>
		</HeadlineText>

		<SeparatorPane/>

		<HeadlineText large={true}>
				<i>&ndash; Catch the tech &ndash;<br>
				   &ndash; Solving the Agile riddle &ndash;<br>
				   &ndash; Taming the complexity beast &ndash;<br>
				   &ndash; Tackling management by fear &ndash;<br>
				   &ndash; Managing motivation &ndash;<br>
				   &ndash; Managing time &ndash;<br>
				   &ndash; Designing recruitment processes &ndash;</i>
		</HeadlineText>

		<SeparatorPane/>

		<SeparatorPane/>

	</NarrationPane>

</FullViewPortPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>

	<ShieldPane>
		<img src="shield-BLUE.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

<!--	<SeparatorPane/>-->

	<HeadlineText large={false} color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
		Services
	</HeadlineText>

	<SeparatorPane/>

	<WideContentPane>

		{#each services_pairs as pair_of_services, index}

			<ColumnsPane>

					<span slot="left">

						<StandardLink to={"/article/" + pair_of_services[0].nid + "/" + titleToSlug(pair_of_services[0].title)}>

							<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, true, index)}>

								<OneThirdHeightPane>

									<CoverFittingImage src={APP_CONFIGURATION.backendUrl + pair_of_services[0].field_image}
													   alt={pair_of_services[0].title}/>

								</OneThirdHeightPane>

								<CentredTextBox size="tall">
									<HeadlineText>{pair_of_services[0].title}</HeadlineText>
									<NarrationText centered={true}>{pair_of_services[0].field_description}</NarrationText>
								</CentredTextBox>

							</ColoredPane>

						</StandardLink>

					</span>

				<span slot="right">

						{#if pair_of_services.length === 2}

							<StandardLink to={"/article/" + pair_of_services[1].nid + "/" + titleToSlug(pair_of_services[1].title)}>

								<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, false, index)}>

									<OneThirdHeightPane>

										<CoverFittingImage src={APP_CONFIGURATION.backendUrl + pair_of_services[1].field_image}
														   alt={pair_of_services[1].title}/>

									</OneThirdHeightPane>

									<CentredTextBox size="tall">
										<HeadlineText>{pair_of_services[1].title}</HeadlineText>
										<NarrationText centered={true}>{pair_of_services[1].field_description}</NarrationText>
									</CentredTextBox>

								</ColoredPane>

							</StandardLink>

						{/if}
					</span>

			</ColumnsPane>

		{/each}

		<SeparatorPane/>

	</WideContentPane>

</FullWidthPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["LIGHTGREY"]}>

	<ShieldPane>
		<img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

	<SeparatorPane/>

	<WideContentPane>

		<ColumnsPane>
			<span slot="left">

				<StandardLink to={"/articles/tech-watch/1"}>

					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, true, 0)}>

						<OneThirdHeightPane>
							<CoverFittingImage src="topics-alex-knight-tech-watch-unsplash-600x400.jpg"
											   alt="Tech watch"/>
						</OneThirdHeightPane>

						<CentredTextBox size="short">
							<HeadlineText>Tech watch</HeadlineText>
						</CentredTextBox>

					</ColoredPane>

				</StandardLink>

			</span>
			<span slot="right">

				<StandardLink to={"/articles/leadership/1"}>

					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, false, 0)}>
						<OneThirdHeightPane>
							<CoverFittingImage src="topics-natalie-pedigo-leadership-unsplash-600x400.jpg"
											   alt="Leadership"/>
						</OneThirdHeightPane>

						<CentredTextBox size="short">
							<HeadlineText>Leadership</HeadlineText>
						</CentredTextBox>
					</ColoredPane>

				</StandardLink>

			</span>
		</ColumnsPane>

	</WideContentPane>

	<WideContentPane>

		<ColumnsPane>
			<span slot="left">

				<StandardLink to={"/articles/testimonials/1"}>

					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, true, 1)}>

						<OneThirdHeightPane>
							<CoverFittingImage src="topics-campaign-creators-testimonials-unsplash-600x400.jpg"
											   alt="Testimonials"/>
						</OneThirdHeightPane>

						<CentredTextBox size="short">
							<HeadlineText>Testimonials</HeadlineText>
						</CentredTextBox>

					</ColoredPane>

				</StandardLink>

			</span>
			<span slot="right">

				<StandardLink to={"/articles/success-stories/1"}>

					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, false, 1)}>

						<OneThirdHeightPane>
							<CoverFittingImage src="topics-doran-erickson-success-stories-unsplash-766x400.jpg"
											   alt="Success stories"/>
						</OneThirdHeightPane>

						<CentredTextBox size="short">
							<HeadlineText>Success stories</HeadlineText>
						</CentredTextBox>

					</ColoredPane>

				</StandardLink>

			</span>
		</ColumnsPane>

	</WideContentPane>

	<SeparatorPane/>

</FullWidthPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]}>
	<ShieldPane>
		<img src="shield-LIGHTGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

	<NarrationPane>
		<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>
			Contact me
		</HeadlineText>
	</NarrationPane>

	<SeparatorPane/>

	<ContentPane smallEdition={true}>
		<LetMeDefendYouForm />
	</ContentPane>

	<SeparatorPane/>

</FullWidthPane>
