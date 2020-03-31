<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let clickable = false;

    const sizes = { "standard": "5vh",
                    "short": "20px" };

    function height(size) {

        if (sizes[size])
            return sizes[size];
        else
            return sizes["standard"];

    }

</script>

<style>

    .standardicon {
        font-size: 3rem;
        cursor: var(--cursor);
    }

</style>

<!-- on:click means that click events will be passed to the parent component -->

<i on:click class="material-icons standardicon" style="--cursor: {clickable ? 'pointer' : 'default'}">
    <slot></slot>
</i>
