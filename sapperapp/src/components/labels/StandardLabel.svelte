<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    import { APP_CONFIGURATION } from '../../appConfiguration';

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
