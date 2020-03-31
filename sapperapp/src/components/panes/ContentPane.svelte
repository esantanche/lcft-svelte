<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let backgroundColor = undefined;

    let screenWidth;

    function contentPaneWidthFromScreenWidth(screenWidth, configuration) {

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return "50vw";
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return "60vw";
        else
            return "90vw";

    }

</script>

<style>
    .contentpane {
        margin-left: auto;
        margin-right: auto;
        background-color: var(--background-color);
        width: var(--width);
    }
</style>

<svelte:window bind:innerWidth={screenWidth} />

<div class="contentpane" style="--width: {contentPaneWidthFromScreenWidth(screenWidth, APP_CONFIGURATION)};
                                --background-color: {backgroundColor ? backgroundColor : 'inherit'}" >
    <slot></slot>
</div>

