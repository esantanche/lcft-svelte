<script>
    // export let backgroundColor;

    import {APP_CONFIGURATION} from '../../appConfiguration';

</script>

<style>
    .messagepane {
        position: -webkit-sticky; /* Safari */
        position: sticky;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0.96;
        height: 100%;
        width: 100%;
        z-index: 20;
        background-color: var(--background-color);
    }
</style>

<div class="messagepane" style="--background-color: {APP_CONFIGURATION.defaultColorsTable['DARKGREY']}">
    <slot></slot>
</div>
