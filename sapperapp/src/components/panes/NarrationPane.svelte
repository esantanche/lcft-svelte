<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    let screenWidth;

    let narrationPaneWidth;

    function narrationPaneWidthFromScreenWidth(screenWidth, configuration) {

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return "50vw";
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return "65vw";
        else
            return "80vw";

    }

</script>

<style>
    .narrationpane {
        min-height: 45vw;
        margin-left: auto;
        margin-right: auto;
        width: var(--width);
    }
</style>

<svelte:window bind:innerWidth={screenWidth} />

<div class="narrationpane" style="--width: {narrationPaneWidthFromScreenWidth(screenWidth, APP_CONFIGURATION)}">
    <slot></slot>
</div>

