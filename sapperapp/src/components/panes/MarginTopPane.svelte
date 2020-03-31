<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let size = undefined;

    const sizes = { "standard": "2px",
                    "tall": "20px" };

    function margin(size) {

        if (sizes[size])
            return sizes[size];
        else
            return sizes["standard"];

    }

</script>

<style>
    .margintoppane {
        display: block;
        margin-top: var(--margin-top);

    }
</style>

<div class="margintoppane" style="--margin-top: {margin(size)}" >
    <slot></slot>
</div>

