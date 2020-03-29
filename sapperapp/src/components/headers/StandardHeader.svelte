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
    import StandardMenu from "../menus/StandardMenu.svelte";
    import { goto } from '@sapper/app';


    let menuButtonVisible = true;

    function onclick() {

        console.log("onclick in sapperapp/src/components/headers/StandardHeader.svelte");

        menuButtonVisible = false;

    }

    function onclose() {

        console.log("onclose in std header");

        menuButtonVisible = true;

    }

    function onhome() {

        // https://github.com/sveltejs/sapper/issues/29
        console.log("onhome in std header");

        menuButtonVisible = true;


        goto("/");

    }

</script>

{#if menuButtonVisible}
    <MenuButtonPane>

        <StandardIcon on:click={onclick} clickable={true}>
            menu
        </StandardIcon>

    </MenuButtonPane>
{:else}
    <StandardMenu on:close={onclose}
                  on:home={onhome} />
{/if}



<!--<MenuScreen open={this.state.menuOpen}-->
<!--            onClose={this.handleMenuClose.bind(this)}-->
<!--            onHome={this.handleGoToHome.bind(this)}/>-->