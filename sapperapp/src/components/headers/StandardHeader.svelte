<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import MenuButtonPane from "../panes/MenuButtonPane.svelte";
    import StandardIcon from "../icons/StandardIcon.svelte";
    import StandardMenu from "../menus/StandardMenu.svelte";
    import { goto } from '@sapper/app';

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
    <MenuButtonPane>

        <StandardIcon on:click={onclick} clickable={true}>
            menu
        </StandardIcon>

    </MenuButtonPane>
{:else}
    <StandardMenu on:close={onclose}
                  on:home={onhome} />
{/if}
