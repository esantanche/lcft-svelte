<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

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
