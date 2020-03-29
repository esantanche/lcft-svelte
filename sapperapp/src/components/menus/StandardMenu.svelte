<script>
    // FIXME check these imports
    import FullWidthPane from "../panes/FullWidthPane.svelte";
    import {APP_CONFIGURATION} from '../../appConfiguration';
    import WideContentPane from "../panes/WideContentPane.svelte";
    import SpaceBetweenPane from "../panes/SpaceBetweenPane.svelte";
    import NarrationText from "../texts/NarrationText.svelte";
    import MarginTopPane from "../panes/MarginTopPane.svelte";
    import StandardLink from "../links/StandardLink.svelte";
    import MenuButtonPane from "../panes/MenuButtonPane.svelte";
    import StandardIcon from "../icons/StandardIcon.svelte";
    import MenuPane from "../panes/MenuPane.svelte";
    import HomeAndCloseButtonsPane from "../panes/HomeAndCloseButtonsPane.svelte";
    import PaddingPane from "../panes/PaddingPane.svelte";
    import ContentPane from "../panes/ContentPane.svelte";
    import ColumnsPane from "../panes/ColumnsPane.svelte";


    import {createEventDispatcher} from 'svelte';
    import CentredTextBox from "../boxes/CentredTextBox.svelte";
    import HeadlineText from "../texts/HeadlineText.svelte";
    import ColoredPane from "../panes/ColoredPane.svelte";

    const dispatch = createEventDispatcher();

    let menuButtonVisible = true;

    let screenWidth;

    function colorForCentredTextBox(rowNumber, columnName) {

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

    <FullWidthPane>

        <HomeAndCloseButtonsPane>
            <PaddingPane isItLeftPadding={true}>
                <StandardIcon on:click={() => dispatch('home')} clickable={true}>home</StandardIcon>
            </PaddingPane>
            <PaddingPane>
                <StandardIcon on:click={() => dispatch('close')} clickable={true}>close</StandardIcon>
            </PaddingPane>
        </HomeAndCloseButtonsPane>

    </FullWidthPane>

    <ContentPane>

        <ColumnsPane>
			<span slot="left">
                <StandardLink to="/articles/services/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(1, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Services</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/articles/success-stories/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(1, 'right')}>
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
                    <ColoredPane backgroundColor={colorForCentredTextBox(2, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Services</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/articles/testimonials/1" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(2, 'right')}>
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
                    <ColoredPane backgroundColor={colorForCentredTextBox(3, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>Tech watch</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
            <span slot="right">
                <StandardLink to="/article/137/about-me" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(3, 'right')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>About me</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
        </ColumnsPane>

        <ColumnsPane>
			<span slot="left">
                <StandardLink to="FIXME" on:click={() => dispatch('close')}>
                    <ColoredPane backgroundColor={colorForCentredTextBox(4, 'left')}>
                        <CentredTextBox size="veryshort">
                            <HeadlineText>FIXME contact me</HeadlineText>
                        </CentredTextBox>
                    </ColoredPane>
                </StandardLink>
			</span>
        </ColumnsPane>

    </ContentPane>

</MenuPane>