<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let color = undefined;
    export let large = undefined;

    let screenWidth;

    function fontSize(screenWidth, large, configuration) {

        let textSizesToUse;

        if (large)
            textSizesToUse = { large: "2.4rem", medium: "2.09rem", small: "1.78rem" };
        else
            textSizesToUse = { large: "1.55rem", medium: "1.35rem", small: "1.15rem" };

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return textSizesToUse.large;
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return textSizesToUse.medium;
        else
            return textSizesToUse.small;

    }

</script>

<style>
    .headlinetext {
        font-family: var(--font-family);
        font-weight: 600;
        line-height: 1.15;
        text-align: center;
        color: var(--text-color);
        font-size: var(--font-size);
    }
</style>

<svelte:window bind:innerWidth={screenWidth} />

<div class="headlinetext" style="--font-family: {APP_CONFIGURATION.fontFamily};
                                  --text-color: {color ? color : APP_CONFIGURATION.defaultColorsTable['WHITESHADE']};
                                  --font-size: {fontSize(screenWidth, large, APP_CONFIGURATION)}"  >
    <slot></slot>
</div>

<!--text-align: center;-->
