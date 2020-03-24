<script>

    // export let src;
    //
    // export let alt;

    export let size = undefined;

    export let backgroundColor;

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
        background-color: var(--background-color);
    }

    .innertext {
        padding-left: 20px;
        padding-right: 20px;
    }

    /*.coverfittingimage {*/
    /*    width: 100%;*/
    /*    height: 100%;*/
    /*    object-fit: cover;*/
    /*    background-color: var(--background-color);*/
    /*}*/

</style>

<div class="centredtextbox" style="--height: {sizes[size] ? sizes[size] : sizes['standard']};
                                   --background-color: {backgroundColor}">

    <div class="innertext">
        <slot></slot>
    </div>

</div>



<!--<img src={src} alt={alt} class="coverfittingimage" style="&#45;&#45;background-color: {backgroundColor}"  />-->

<!--height: props => sizes[props.size] ? sizes[props.size] : "25vh",-->
