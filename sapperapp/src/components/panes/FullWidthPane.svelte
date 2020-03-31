<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    export let backgroundColor = undefined;
    export let shortPadding = false;
</script>

<style>
    .fullwidthpane {
        width: 100vw;
        max-width: 100%;
        padding-top:  var(--padding-top);
        background-color: var(--background-color);
    }
</style>

<div class="fullwidthpane" style="--background-color: {backgroundColor};
                                  --padding-top: {shortPadding ? '3vh' : '7vh'}">
    <slot></slot>
</div>
