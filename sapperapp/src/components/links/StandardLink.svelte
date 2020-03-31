<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let to;

</script>

<style>
    .standardlink {
        color: inherit;
        text-decoration: none;
    }
</style>

<a on:click rel="prefetch" href={to} class="standardlink">
    <slot></slot>
</a>
