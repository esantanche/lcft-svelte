<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    // export let clickable = false;
    //
    // const sizes = { "standard": "5vh",
    //                 "short": "20px" };
    //
    // function height(size) {
    //
    //     if (sizes[size])
    //         return sizes[size];
    //     else
    //         return sizes["standard"];
    //
    // }

    export let fieldFor;

</script>

<style>

    .label {
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 1.15rem;
        color: var(--color);
    }

</style>

<label for={fieldFor} class="label" style="--font-family: {APP_CONFIGURATION.fontFamily};
                                           --color: {APP_CONFIGURATION.defaultColorsTable['WHITESHADE']}">
    <slot></slot>
</label>


<!--on:click means that click events will be passed to the parent component-->

<!--<i on:click class="material-icons standardicon" style="&#45;&#45;font-family: {APP_CONFIGURATION.fontFamily};"</i>-->
