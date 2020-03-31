<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    export let backgroundColor;
</script>

<style>
    .fullviewportpane {
        width: 100vw;
        max-width: 100%;
        min-height: 93vh;
        padding-top: 7vh;
        background-color: var(--background-color);
    }
</style>

<div class="fullviewportpane" style="--background-color: {backgroundColor}">
    <slot></slot>
</div>
