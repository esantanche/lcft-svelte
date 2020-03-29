<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';
</script>

<style>
    .menubuttonpane {
        position: fixed;
        top: 3vh;
        right: 5vw;
        color: var(--color);
    }
</style>

<div class="menubuttonpane" style="--color: {APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}">
    <slot></slot>
</div>
