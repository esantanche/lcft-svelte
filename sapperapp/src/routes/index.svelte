<script>
	import FullViewPortPane from "../components/panes/FullViewPortPane.svelte";
	import FullWidthPane from "../components/panes/FullWidthPane.svelte";
	import ShieldPane from "../components/panes/ShieldPane.svelte";
	import NarratinPane from "../components/panes/NarrationPane.svelte";
	import {APP_CONFIGURATION} from '../appConfiguration';
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

	let screenWidth;

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

<svelte:head>
	<title>Sapper project template</title>
</svelte:head>

<svelte:window bind:innerWidth={screenWidth} />

<FullViewPortPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["BLUE"]}>

	<ShieldPane>
	    <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

    <NarrationPane>

		<NarrationText>

			<HeadlineText large={true}>
				<i>Emanuele Santanche,<br/>leadership coach for technology.</i>
			</HeadlineText>

			<SeparatorPane/>

			<HeadlineText large={true}>
				<i>Defending your chances of success<br/>
					from lousy leadership practices.</i>
			</HeadlineText>

			<SeparatorPane/>

			<HeadlineText large={true}>
				<i>Taming the complexity beast &mdash; Tackling management by fear &mdash;
					Managing motivation &mdash; Managing time &mdash; Designing recruitment processes.</i>
			</HeadlineText>

			<SeparatorPane/>

		</NarrationText>

	</NarrationPane>

</FullViewPortPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>

	<ShieldPane>
		<img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

	<SeparatorPane/>

	<WideContentPane>

		<ColumnsPane>
			<span slot="left">

				<StandardLink to={"/articles/services"}>
					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, true, 0)}>

						<OneThirdHeightPane>
							<CoverFittingImage src="topics-kate-townsend-services-unsplash-602x400.jpg"
											   alt="Services" />
						</OneThirdHeightPane>

						<CentredTextBox size="short">
							<HeadlineText>Services</HeadlineText>
						</CentredTextBox>

					</ColoredPane>
				</StandardLink>

			</span>
			<span slot="right">

				<StandardLink to={"/articles/leadership"}>

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

				<StandardLink to={"/articles/testimonials"}>

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

				<StandardLink to={"/articles/success-stories"}>

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

	<WideContentPane>

		<ColumnsPane>
			<span slot="left">

				<StandardLink to={"/articles/tech-watch"}>

					<ColoredPane backgroundColor={backgroundColor (screenWidth, APP_CONFIGURATION, true, 2)}>

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
		</ColumnsPane>

	</WideContentPane>

	<SeparatorPane/>

</FullWidthPane>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKGREY"]}>
	<ShieldPane>
		<img src="shield-LIGHTGREY.png" alt="Leadership Coach for Tech" width="100%" />
	</ShieldPane>

<!--	<HeadlinePane>-->
<!--		<HeadlineText color={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>-->
<!--			Contact me-->
<!--		</HeadlineText>-->
<!--	</HeadlinePane>-->

	<SeparatorPane/>

<!--	<ContentPane>-->

<!--		<LetMeDefendYouScreen/>-->

<!--	</ContentPane>-->

	<SeparatorPane/>

</FullWidthPane>