<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>

    import {APP_CONFIGURATION} from '../../appConfiguration';

</script>

<style>
    .messagepane {
        position: fixed;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        opacity: 0.96;
        height: 100vh;
        width: 100vw;
        top: 0;
        left: 0;
        z-index: 20;
        background-color: var(--background-color);
    }
</style>

<div class="messagepane" style="--background-color: {APP_CONFIGURATION.defaultColorsTable['DARKGREY']}">
    <slot></slot>
</div>
