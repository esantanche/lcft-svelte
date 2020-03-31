<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

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

<button on:click type="submit" class="standardbutton" style="--background: {APP_CONFIGURATION.defaultColorsTable["BLUE"]};
                                      --border-color: {APP_CONFIGURATION.defaultColorsTable["BLUE"]};
                                      --font-family: {APP_CONFIGURATION.fontFamily};
                                      --color: {APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}">

    <slot></slot>

</button>

