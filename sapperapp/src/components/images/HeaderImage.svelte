<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let src;

    export let alt;

    export let backgroundColor = undefined;

</script>

<style>

    .headerimage {
        width: 100%;
        background-color: var(--background-color);
    }

</style>

<img src={src} alt={alt} class="headerimage" style="--background-color: {backgroundColor ? backgroundColor : 'inherit'}"/>
