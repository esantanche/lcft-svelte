<!--
@file CentredTextBox.svelte Box with centered text, various heights
-->

<script>

    export let size = undefined;

    const sizes = { "standard": "25vh",
                    "tall": "30vh",
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

