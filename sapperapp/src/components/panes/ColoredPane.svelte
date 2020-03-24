<script>
    export let backgroundColor;
</script>

<style>
    .coloredpane {
        background-color: var(--background-color);
    }
</style>

<div class="coloredpane" style="--background-color: {backgroundColor}">
    <slot></slot>
</div>
