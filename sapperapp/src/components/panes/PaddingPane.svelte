<script>
    export let isItLeftPadding;
</script>

<style>

    .paddingpane {
        padding-left: var(--padding-left);
        padding-right: var(--padding-right);
    }

</style>

<div class="paddingpane" style="--padding-left: {isItLeftPadding ? '5vw' : '0'};
                                --padding-right: {isItLeftPadding ? '0' : '5vw'}">
    <slot></slot>
</div>


<!--padding-left: props => props.isItLeftPadding ? "5vw" : "0",-->
<!--padding-right: props => props.isItLeftPadding ? "0" : "5vw"-->