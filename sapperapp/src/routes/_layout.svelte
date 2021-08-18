<!--
@file FIXME TODO
-->

<script>
    import StandardFooter from "../components/footers/StandardFooter.svelte";
    import StickyFooter from "../components/footers/StickyFooter.svelte";
    import StandardHeader from "../components/headers/StandardHeader.svelte";
    import RDFaTags from "../components/tags/RDFaTags.svelte";

    // The absence of the prop segment triggers this warning: "<Layout> was created with unknown prop 'segment'"
    // But here I don't need this prop and if I define it, I get an error
    // export let segment;

</script>

<svelte:head>
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-NKVR9QM');</script>
    <!-- End Google Tag Manager -->
    <meta property="google-site-verification" content="PMDPQpQDqCmyGM4HeruuOXemu1X9UxBcU9qop3ywqOQ" />
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-71688245-2"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());

        gtag('config', 'UA-71688245-2');
    </script>
    <script id="mcjs">!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/e9e29fcc2c35c84a170206329/793d6d244688a2277c373a312.js");</script>
</svelte:head>

<!-- Google Tag Manager (noscript) -->
<noscript><iframe title="Google Tag Manager" src="https://www.googletagmanager.com/ns.html?id=GTM-NKVR9QM"
                  height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<RDFaTags />

<StandardHeader />

<slot></slot>

<StandardFooter />

<StickyFooter />