<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    export let isItLeftPadding = undefined;
</script>

<style>

    .paddingpane {
        padding-left: var(--padding-left);
        padding-right: var(--padding-right);
    }

</style>

<div class="paddingpane" style="--padding-left: {isItLeftPadding ? '3.5vw' : '0'};
                                --padding-right: {isItLeftPadding ? '0' : '3.5vw'}">
    <slot></slot>
</div>
