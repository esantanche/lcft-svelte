<!--
@file FIXME
-->

<script>

    import { APP_CONFIGURATION } from '../../appConfiguration';

    export let fieldFor;
    export let useDarkTextColor = false;

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
                                           --color: {useDarkTextColor ? APP_CONFIGURATION.defaultColorsTable['DARKGREY'] : APP_CONFIGURATION.defaultColorsTable['WHITESHADE']}">
    <slot></slot>
</label>
