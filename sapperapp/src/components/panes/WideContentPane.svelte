<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let backgroundColor = undefined;

    let screenWidth;

    function wideContentPaneWidthFromScreenWidth(screenWidth, configuration) {

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return "66vw";
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return "83vw";
        else
            return "95vw";

    }

</script>

<style>
    .widecontentpane {
        min-height: 8vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: auto;
        margin-right: auto;
        background-color: var(--background-color);
        width: var(--width);
    }
</style>

<svelte:window bind:innerWidth={screenWidth} />

<div class="widecontentpane" style="--width: {wideContentPaneWidthFromScreenWidth(screenWidth, APP_CONFIGURATION)};
                                    --background-color: {backgroundColor ? backgroundColor : "inherit"}" >
    <slot></slot>
</div>

