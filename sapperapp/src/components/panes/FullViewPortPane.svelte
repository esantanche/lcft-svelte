<script>
    export let backgroundColor;
</script>

<style>
    .fullviewportpane {
       width: 100vw;
       max-width: 100%;
       min-height: 93vh;
       padding-top: 7vh;
       /*background-color: blue;  should come from a prop props => props.backgroundColor- */
    }
</style>

<!-- Svelte component that wraps a single article.
It assumes that the article includes an image.
If the image is not provided, the rendering won't be correct. -->
<!-- Assuming that the article includes an image -->

<div class="fullviewportpane" style={"background-color:" + backgroundColor}>
    <slot></slot>
</div>

<!--<div class="articlecontainer">-->
<!--    <div class="imagecolumn">-->
<!--        <img src={article.image} alt={article.title} style="width: 100%" />-->
<!--    </div>-->
<!--    <div class="titlecolumn">-->
<!--        <div class="text-box">{article.title}</div>-->
<!--    </div>-->
<!--</div>-->


<!--import React, { Component } from 'react';-->
<!--import { APP_CONFIGURATION } from '../../appConfiguration';-->
<!--import injectSheet from 'react-jss';-->
<!--import PropTypes from 'prop-types';-->

<!--// Changed height to minHeight so that the pane can extend if there is a lot of text-->

<!--const styles = {-->
<!--FullViewPortPane: {-->
<!--    width: "100vw",-->
<!--    maxWidth: "100%",-->
<!--    minHeight: "93vh",-->
<!--    paddingTop: "7vh",-->
<!--    backgroundColor: props => props.backgroundColor-->
<!--}-->
<!--};-->

<!--/**-->
<!--* Largely used on the home for the messages with the shield on top.-->
<!--*-->
<!--* @param {string} backgroundColor Background color-->
<!--* @param {object} classes Css-in-js classes from constant styles above-->
<!--*/-->
<!--class FullViewPortPane extends Component {-->

<!--static propTypes = {-->
<!--    backgroundColor: PropTypes.string,-->
<!--    classes: PropTypes.object.isRequired-->
<!--};-->

<!--render() {-->

<!--    const { classes } = this.props;-->

<!--    return (-->

<!--            <div className={classes.FullViewPortPane}>-->
<!--                {this.props.children}-->
<!--            </div>-->

<!--        )-->

<!--}-->

<!--}-->

<!--// Set default props-->
<!--FullViewPortPane.defaultProps = {-->
<!--backgroundColor: APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]-->
<!--};-->

<!--export default injectSheet(styles)(FullViewPortPane);-->
