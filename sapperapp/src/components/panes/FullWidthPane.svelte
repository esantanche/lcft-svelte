<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    export let backgroundColor = undefined;
    export let shortPadding = false;
    export let noPadding = false;
    export let makeItSticky = false;
    export let doShadow = false;
    export let doTransparency = false;
</script>

<style>
    .fullwidthpane {
        width: 100vw;
        max-width: 100%;
        padding-top: var(--padding-top);
        background-color: var(--background-color);
        position: var(--position);
        box-shadow: var(--boxshadow);
        -moz-box-shadow: var(--boxshadow);
        -webkit-box-shadow: var(--boxshadow);
        opacity: var(--opacity);
    }
</style>

<div class="fullwidthpane" style="--background-color: {backgroundColor};
                                  --padding-top: {noPadding ? '' : (shortPadding ? '3vh' : '7vh')};
                                  --position: {makeItSticky ? 'fixed' : 'static'};
                                  --boxshadow: {doShadow ? '0px 5px 0px -3px rgba(0,0,0,0.75)' : ''};
                                  --opacity: {doTransparency ? '70%' : '' }">
    <slot></slot>
</div>

<!-- -webkit-box-shadow: 0px 10px 0px -3px rgba(0,0,0,0.75);-->
<!-- -moz-box-shadow: 0px 10px 0px -3px rgba(0,0,0,0.75);-->
<!--box-shadow: 0px 10px 0px -3px rgba(0,0,0,0.75);-->