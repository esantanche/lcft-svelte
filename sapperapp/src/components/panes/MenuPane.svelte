<script>

    import {APP_CONFIGURATION} from '../../appConfiguration';

</script>


<style>
    .menupane {
        position: fixed;
        opacity: 0.9;
        min-height: 100%;
        z-index: 20;
        background-color: var(--background-color);
    }
</style>

<div class="menupane" style="--background-color: {APP_CONFIGURATION.defaultColorsTable['DARKERWHITESHADE']}" >
    <slot></slot>
</div>
