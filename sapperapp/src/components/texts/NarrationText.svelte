<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let color = undefined;

    let screenWidth;

    function textColor(color) {

        let textColor = APP_CONFIGURATION.defaultColorsTable["WHITESHADE"];

        if (color)
            textColor = color;

        return textColor;
    }


    function fontSize(screenWidth, configuration) {

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return "1.35rem";
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return "1.2rem";
        else
            return "1.1rem";

    }
</script>

<style>

    .narrationtext {
        font-family: var(--font-family);
        font-weight: 400;
        color: var(--text-color);
        font-size: var(--font-size);
    }

</style>

<svelte:window bind:innerWidth={screenWidth} />

<div class="narrationtext" style="--font-family: {APP_CONFIGURATION.fontFamily};
                                  --text-color: {textColor(color)};
                                  --font-size: {fontSize(screenWidth, APP_CONFIGURATION)}" >
    <slot></slot>
</div>
