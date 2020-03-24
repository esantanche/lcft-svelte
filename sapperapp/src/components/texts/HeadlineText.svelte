<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let color = undefined;
    export let large = undefined;

    let screenWidth;

    // FIXME this function is the same as the one in NarrationText.svelte
    function textColor(color) {

        let textColor = APP_CONFIGURATION.defaultColorsTable["WHITESHADE"];

        if (color)
            textColor = color;

        return textColor;
    }

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
        text-align: center;
        color: var(--text-color);
        font-size: var(--font-size);
    }
</style>


<svelte:window bind:innerWidth={screenWidth} />

<div class="headlinetext" style="--font-family: {APP_CONFIGURATION.fontFamily};
                                  --text-color: {textColor(color)};
                                  --font-size: {fontSize(screenWidth, large, APP_CONFIGURATION)}"  >
    <slot></slot>
</div>




