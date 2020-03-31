<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

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
