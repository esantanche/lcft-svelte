<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let src;

    export let alt;

</script>

<style>

    .coverfittingimage {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>

<img src={src} alt={alt} class="coverfittingimage"/>
