<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';

    import FullWidthPane from "../panes/FullWidthPane.svelte";
    import StandardLink from "../links/StandardLink.svelte";
    import StandardIcon from "../icons/StandardIcon.svelte";
    import MenuPane from "../panes/MenuPane.svelte";
    import CloseButtonsPane from "../panes/CloseButtonPane.svelte";
    import PaddingPane from "../panes/PaddingPane.svelte";
    import ContentPane from "../panes/ContentPane.svelte";
    import ColumnsPane from "../panes/ColumnsPane.svelte";
    import CentredTextBox from "../boxes/CentredTextBox.svelte";
    import HeadlineText from "../texts/HeadlineText.svelte";
    import ColoredPane from "../panes/ColoredPane.svelte";

    import {createEventDispatcher} from 'svelte';
    import WideContentPane from "../panes/WideContentPane.svelte";

    const dispatch = createEventDispatcher();

    let menuButtonVisible = true;

    let screenWidth;

    function colorForCentredTextBox(screenWidth, rowNumber, columnName) {

        let colorToReturn;

        const color1 = APP_CONFIGURATION.defaultColorsTable["BLUE"];
        const color2 = APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"];

        if (screenWidth < APP_CONFIGURATION.responsiveBreakpoints.large) {
            colorToReturn = columnName === "right" ? color1 : color2;
        } else {
            if (rowNumber % 2 === 0) {
                colorToReturn = columnName === "right" ? color1 : color2;
            } else {
                colorToReturn = columnName === "right" ? color2 : color1;
            }
        }

        return colorToReturn;
    }
</script>

<svelte:window bind:innerWidth={screenWidth} />

<MenuPane>

    <FullWidthPane shortPadding={true}>

        <WideContentPane>

            <CloseButtonsPane>
                <PaddingPane>
                    <StandardIcon on:click={() => dispatch('close')} clickable={true}>close</StandardIcon>
                </PaddingPane>
            </CloseButtonsPane>

        </WideContentPane>

    </FullWidthPane>

    <ContentPane>

        <ColumnsPane>
			<span slot="left">
                <StandardLink to="/articles/services/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 1, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Services</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/articles/success-stories/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 1, 'right')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Success stories</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
        </ColumnsPane>

        <ColumnsPane>
			<span slot="left">
                <StandardLink to="/articles/leadership/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 2, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Leadership articles</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/articles/testimonials/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 2, 'right')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Testimonials</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
        </ColumnsPane>

        <ColumnsPane>
			<span slot="left">
                <StandardLink to="/articles/tech-watch/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 3, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Tech watch</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/article/137/about-me" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 3, 'right')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>About me</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
        </ColumnsPane>

        <ColumnsPane>
			<span slot="left">
                <StandardLink to="/contact-me" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 4, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Contact me</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/newsletter" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(screenWidth, 4, 'right')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Free course</HeadlineText>
                        </CentredTextBox>
                </ColoredPane>
                </StandardLink>
			</span>
        </ColumnsPane>

    </ContentPane>

</MenuPane>