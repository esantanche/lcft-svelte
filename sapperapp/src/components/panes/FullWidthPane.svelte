<script>
    export let backgroundColor;
</script>

<style>
    .fullwidthpane {
        width: 100vw;
        max-width: 100%;
        padding-top: 7vh;
        background-color: var(--background-color);
    }
</style>

<div class="fullwidthpane" style="--background-color: {backgroundColor}">
    <slot></slot>
</div>
