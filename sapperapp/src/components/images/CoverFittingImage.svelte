<script>

    export let src;

    export let alt;

</script>

<style>

    .coverfittingimage {
        width: 100%;
        height: 100%;
        object-fit: cover;
    }

</style>

<img src={src} alt={alt} class="coverfittingimage"/>
