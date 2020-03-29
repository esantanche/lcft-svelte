<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let backgroundColor = undefined;

    let screenWidth;

    function contentPaneWidthFromScreenWidth(screenWidth, configuration) {

        // paneWidthLargeScreen: {
        //     width: "66vw"
        // },
        // paneWidthMediumScreen: {
        //     width: "83vw"
        // },
        // paneWidthSmallScreen: {
        //     width: "95vw"
        // }

        if (screenWidth >= configuration.responsiveBreakpoints.large)
            return "50vw";
        else if (screenWidth >= configuration.responsiveBreakpoints.medium)
            return "60vw";
        else
            return "90vw";

    }

</script>

<!--minHeight: "8vh",-->
<!--display: "flex",-->
<!--flexDirection: "column",-->
<!--justifyContent: "center",-->
<!--marginLeft: "auto",-->
<!--marginRight: "auto",-->
<!--backgroundColor: props => props.backgroundColor ? props.backgroundColor : "inherit"-->


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

