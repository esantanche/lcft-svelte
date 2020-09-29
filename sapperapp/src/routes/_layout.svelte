<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import StandardFooter from "../components/footers/StandardFooter.svelte";
    import StandardHeader from "../components/headers/StandardHeader.svelte";
    import GoogleAnalytics from "../components/trackers/GoogleAnalytics.svelte";

    // The absence of the prop segment triggers this warning: "<Layout> was created with unknown prop 'segment'"
    // But here I don't need this prop and if I define it, I get an error
    // export let segment;

</script>

<svelte:head>
    <meta property="google-site-verification" content="PMDPQpQDqCmyGM4HeruuOXemu1X9UxBcU9qop3ywqOQ" />
</svelte:head>

<GoogleAnalytics />

<StandardHeader />

<slot></slot>

<StandardFooter />
