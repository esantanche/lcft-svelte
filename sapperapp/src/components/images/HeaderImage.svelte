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
