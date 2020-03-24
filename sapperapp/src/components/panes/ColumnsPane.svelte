<script>
    import { APP_CONFIGURATION } from '../../appConfiguration';

    let screenWidth;

</script>

<style>
    .columnsrowcontainer {
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        align-items: flex-start;
    }

    .columnscolumncontainer {
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
    }

    .column {
        width: 50%;
    }
</style>

<svelte:window bind:innerWidth={screenWidth} />

{#if screenWidth >= APP_CONFIGURATION.responsiveBreakpoints.large}
    <div class="columnsrowcontainer">
        <div class="column">
            <slot name="left">
            </slot>
        </div>
        <div class="column">
            <slot name="right">
            </slot>
        </div>
    </div>
{:else}
    <div class="columnscolumncontainer">
        <div>
            <slot name="left">
            </slot>
        </div>
        <div>
            <slot name="right">
            </slot>
        </div>
    </div>
{/if}

