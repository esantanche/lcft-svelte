<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import MenuButtonPane from "../panes/MenuButtonPane.svelte";
    import StandardIcon from "../icons/StandardIcon.svelte";
    import {APP_CONFIGURATION} from '../../appConfiguration';

    import StandardMenu from "../menus/StandardMenu.svelte";
    import FullWidthPane from "../panes/FullWidthPane.svelte";
    import WideContentPane from "../panes/WideContentPane.svelte";

    import SpaceBetweenPane from "../panes/SpaceBetweenPane.svelte";
    import NarrationText from "../texts/NarrationText.svelte";
    import StandardLink from "../links/StandardLink.svelte";
    import LogoPane from "../panes/LogoPane.svelte";
    import FlexStartPane from "../panes/FlexStartPane.svelte";
    import SpacerPane from "../panes/SpacerPane.svelte";

    let menuButtonVisible = true;

    function onclick() {

        menuButtonVisible = false;

    }

    function onclose() {

        menuButtonVisible = true;

    }

</script>

{#if menuButtonVisible}

    <FullWidthPane noPadding={true}
                   backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}
                   makeItSticky={true}
                   doShadow={true}
                   doTransparency={true}>

        <SpacerPane>
            <WideContentPane backgroundColor="inherit">
                <SpaceBetweenPane>
                    <FlexStartPane>

                        <StandardLink to="/">
                            <LogoPane>
                                <img src="shield-DARKGREY.png" alt="Leadership Coach for Tech" width="100%" />
                            </LogoPane>
                        </StandardLink>
                        <div>
                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                Emanuele Santanché
                            </NarrationText>
                            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                                Leadership coach for technology
                            </NarrationText>
                        </div>

                    </FlexStartPane>
                    <MenuButtonPane>

                        <StandardIcon on:click={onclick} clickable={true}>
                            menu
                        </StandardIcon>

                    </MenuButtonPane>
                </SpaceBetweenPane>
            </WideContentPane>
        </SpacerPane>

    </FullWidthPane>

{:else}
    <StandardMenu on:close={onclose}/>
{/if}
