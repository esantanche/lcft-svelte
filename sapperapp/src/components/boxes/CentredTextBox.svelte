<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    export let size = undefined;

    const sizes = { "standard": "25vh",
                    "short": "15vh",
                    "veryshort": "7vh" };

</script>

<style>

    .centredtextbox {
        height: var(--height);
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .innertext {
        padding-left: 20px;
        padding-right: 20px;
    }

</style>

<div class="centredtextbox" style="--height: {sizes[size] ? sizes[size] : sizes['standard']}">

    <div class="innertext">
        <slot></slot>
    </div>

</div>

