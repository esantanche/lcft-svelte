<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    //let widthClassToUse;

    let screenWidth;

    //widthClassToUse = "panewidthlargescreen";

    //console.log(screenWidth);

    // if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large)
    //     widthClassToUse = "panewidthlargescreen";
    // else if (screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.medium)
    //     widthClassToUse = "panewidthmediumscreen";
    // else
    //     widthClassToUse = "panewidthsmallscreen";

</script>

<style>
    .narrationpane {
        min-height: 45vw;
        margin-left: auto;
        margin-right: auto;
    }

    .panewidthlargescreen {
        width: 50vw;
    }

    .panewidthmediumscreen {
        width: 65vw;
    }

    .panewidthsmallscreen {
        width: 80vw;
    }
</style>

<!-- Svelte component that wraps a single article.
It assumes that the article includes an image.
If the image is not provided, the rendering won't be correct. -->
<!-- Assuming that the article includes an image -->


<svelte:window bind:innerWidth={screenWidth} />


{#if screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large}

    <div class="narrationpane panewidthlargescreen">
       <slot></slot>
    </div>

{:else if screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.medium}

    <div class="narrationpane panewidthmediumscreen">
        <slot></slot>
    </div>

{:else}

    <div class="narrationpane panewidthsmallscreen">
        <slot></slot>
    </div>

{/if}





<!--<div class="fullviewportpane" style={"background-color:" + backgroundColor}>-->
<!--    <slot></slot>-->
<!--</div>-->


<!--};-->

<!--/**-->
<!--* Contains the shield-->
<!--*/-->
<!--class ShieldPane extends Component {-->

<!--static propTypes = {-->
<!--    classes: PropTypes.object.isRequired-->
<!--};-->

<!--render() {-->

<!--    const { classes } = this.props;-->

<!--    return (-->

<!--            <div className={classes.ShieldPane}>-->
<!--                {this.props.children}-->
<!--            </div>-->

<!--        )-->

<!--}-->

<!--}-->

<!--export default injectSheet(styles)(ShieldPane);-->
