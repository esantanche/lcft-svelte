<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

</script>

<style>

    .standardbutton {
        background: var(--background);
        border-color: var(--border-color);
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 1.15rem;
        padding: 11px 18px;
        cursor: pointer;
        color: var(--color);
    }

</style>

<div class="standardbutton" style="--background: {APP_CONFIGURATION.defaultColorsTable["BLUE"]};
                                   --border-color: {APP_CONFIGURATION.defaultColorsTable["BLUE"]};
                                   --font-family: {APP_CONFIGURATION.fontFamily};
                                   --color: {APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}">

    <slot></slot>

</div>


