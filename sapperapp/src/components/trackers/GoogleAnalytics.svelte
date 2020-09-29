<!--
@file FIXME ???? TODO
-->

<!--<script async src="https://www.googletagmanager.com/gtag/js?id=UA-71688245-2"></script>-->
<!--<script>-->
<!--    window.dataLayer = window.dataLayer || [];-->
<!--    function gtag(){dataLayer.push(arguments);}-->
<!--    gtag('js', new Date());-->

<!--    gtag('config', 'UA-71688245-2');-->
<!--</script>-->

<svelte:head>
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-71688245-2"></script>
</svelte:head>

<!--<script>-->
<!--    import { stores } from '@sapper/app';-->
<!--    const { page } = stores();-->
<!--    $: {-->
<!--        if (typeof gtag !== "undefined"){-->
<!--            gtag("config", "UA-71688245-2", {-->
<!--                page_path: $page.path-->
<!--            });-->
<!--        }-->
<!--    }-->
<!--</script>-->

<script>

    if (typeof window !== "undefined") {
        window.dataLayer = window.dataLayer || [];
        window.gtag = function gtag() {
            window.dataLayer.push(arguments);
        };
        window.gtag("js", new Date());
        window.gtag("config", 'UA-71688245-2', { 'send_page_view': false });
    }

    // window.dataLayer = window.dataLayer || [];
    // function gtag(){dataLayer.push(arguments);}
    // gtag('js', new Date());
    //
    // gtag('config', 'UA-71688245-2');
</script>
