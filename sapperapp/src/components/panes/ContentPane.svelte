<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    // Props

    // Background color to use, defaulted to inherit
    export let backgroundColor = undefined;

    // If true, the pane is narrower on large screens
    export let smallEdition = false;

    let screenWidth;

    const widths = { standard: { small: 90, medium: 60, large: 50 }, small: { small: 90, medium: 60, large: 40 } };

    function contentPaneWidthFromScreenWidth(screenWidth, configuration, smallEdition) {

        const widthsToUse = smallEdition ? widths.small : widths.standard;

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return `${widthsToUse.large}vw`;
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return `${widthsToUse.medium}vw`;
        else
            return `${widthsToUse.small}vw`;

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

<div class="contentpane" style="--width: {contentPaneWidthFromScreenWidth(screenWidth, APP_CONFIGURATION, smallEdition)};
                                --background-color: {backgroundColor ? backgroundColor : 'inherit'}" >
    <slot></slot>
</div>

