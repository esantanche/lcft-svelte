<script>
    import StandardFooter from "../components/footers/StandardFooter.svelte";
    import StandardHeader from "../components/headers/StandardHeader.svelte";
    // import Nav from '../components/Nav.svelte';

    // export let segment;
</script>

<style>
	/*main {*/
	/*	position: relative;*/
	/*	max-width: 56em;*/
	/*	background-color: white;*/
	/*	padding: 2em;*/
	/*	margin: 0 auto;*/
	/*	box-sizing: border-box;*/
	/*}*/
</style>

<StandardHeader />

<!--<Nav {segment}/>-->

<slot></slot>


<StandardFooter />
<!--position: relative;-->
<!--max-width: 56em;-->
<!--background-color: white;-->
<!--padding: 2em;-->
<!--margin: 0 auto;-->
<!--box-sizing: border-box;-->


<!--<main>-->
<!--	<slot></slot>-->
<!--</main>-->

