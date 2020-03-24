<script>

    export let src;

    export let alt;

    export let backgroundColor;

</script>

<style>

    .coverfittingimage {
        width: 100%;
        height: 100%;
        object-fit: cover;
        background-color: var(--background-color);
    }

</style>

<img src={src} alt={alt} class="coverfittingimage" style="--background-color: {backgroundColor}"  />
