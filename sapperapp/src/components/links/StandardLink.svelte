<script>

    export let to;

    // FIXME maybe I have to implement an onclick function?

</script>

<style>
    .standardlink {
        color: inherit;
        text-decoration: none;
    }
</style>

<a on:click href={to} class="standardlink">
    <slot></slot>
</a>

<!--rel='prefetch'-->