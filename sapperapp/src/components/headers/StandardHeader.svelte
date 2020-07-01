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
    import {goto} from '@sapper/app';
    import FullWidthPane from "../panes/FullWidthPane.svelte";
    import WideContentPane from "../panes/WideContentPane.svelte";

    import SpaceBetweenPane from "../panes/SpaceBetweenPane.svelte";
    import NarrationText from "../texts/NarrationText.svelte";
    import StandardLink from "../links/StandardLink.svelte";
    import SeparatorPane from "../panes/SeparatorPane.svelte";

    let menuButtonVisible = true;

    function onclick() {

        menuButtonVisible = false;

    }

    function onclose() {

        menuButtonVisible = true;

    }

    function onhome() {

        menuButtonVisible = true;

        goto("/");

    }

</script>

{#if menuButtonVisible}

    <FullWidthPane shortPadding={true}
                   backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}
                   makeItSticky={true}
                   doShadow={true}>

        <div style="height: 6vh">
            &nbsp;
        </div>
        <MenuButtonPane>

            <StandardIcon on:click={onclick} clickable={true}>
                menu
            </StandardIcon>

        </MenuButtonPane>
    </FullWidthPane>


<!--    <WideContentPane backgroundColor="inherit">-->
<!--        <SpaceBetweenPane>-->
<!--            <div>-->
<!--                <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>-->
<!--                    Emanuele Santanché-->
<!--                </NarrationText>-->
<!--                <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>-->
<!--                    Leadership coach for technology-->
<!--                </NarrationText>-->
<!--            </div>-->
<!--            <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>-->
<!--                <StandardLink to="/article/58/privacy-policy">-->
<!--                    Privacy policy-->
<!--                </StandardLink>-->
<!--            </NarrationText>-->
<!--        </SpaceBetweenPane>-->
<!--    </WideContentPane>-->
<!--    <SeparatorPane size="short" />-->


{:else}
    <StandardMenu on:close={onclose}
                  on:home={onhome} />
{/if}
