<!--
@file FIXME TODO
-->

<script>
    import StandardFooter from "../components/footers/StandardFooter.svelte";
    import StandardHeader from "../components/headers/StandardHeader.svelte";
    import RDFaTags from "../components/tags/RDFaTags.svelte";

    // The absence of the prop segment triggers this warning: "<Layout> was created with unknown prop 'segment'"
    // But here I don't need this prop and if I define it, I get an error
    // export let segment;

</script>

<svelte:head>
    <meta property="google-site-verification" content="PMDPQpQDqCmyGM4HeruuOXemu1X9UxBcU9qop3ywqOQ" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-71688245-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-71688245-2');
    </script>
</svelte:head>

<RDFaTags />

<StandardHeader />

<slot></slot>

<StandardFooter />
