<style>
    .shieldpane {
        width: 15vw;
        margin-left: auto;
        margin-right: auto;
        margin-bottom: 7vh;
    }
</style>

<!-- Svelte component that wraps a single article.
It assumes that the article includes an image.
If the image is not provided, the rendering won't be correct. -->
<!-- Assuming that the article includes an image -->

<div class="shieldpane">
    <slot></slot>
</div>


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
