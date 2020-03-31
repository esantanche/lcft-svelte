<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let size = undefined;

    const sizes = { "standard": "5vh",
                    "short": "20px",
                    "veryshort": "10px" };

    function height(size) {

        if (sizes[size])
            return sizes[size];
        else
            return sizes["standard"];

    }

</script>

<style>
    .separatorpane {
        height: var(--height);
    }
</style>

<div class="separatorpane" style="--height: {height(size)}" >

</div>
