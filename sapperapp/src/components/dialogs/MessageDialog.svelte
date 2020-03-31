<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';

    import MessagePane from "../panes/MessagePane.svelte";
    import ContentPane from "../panes/ContentPane.svelte";
    import SeparatorPane from "../panes/SeparatorPane.svelte";
    import HeadlineText from "../texts/HeadlineText.svelte";
    import CenteringPane from "../panes/CenteringPane.svelte";
    import StandardButton from "../buttons/StandardButton.svelte";
    import StandardIcon from "../icons/StandardIcon.svelte";

    export let title;
    export let message;
    export let it_is_an_error_message;

</script>

<MessagePane>

    <ContentPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["DARKERWHITESHADE"]}>

        {#if it_is_an_error_message}
            <SeparatorPane />
            <CenteringPane>
                <StandardIcon>
                    error_outline
                </StandardIcon>
            </CenteringPane>
        {/if}
        <SeparatorPane />
        <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
            {title}
        </HeadlineText>
        <HeadlineText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
            {message}
        </HeadlineText>
        <SeparatorPane />
        <CenteringPane>
            <StandardButton on:click>OK</StandardButton>
        </CenteringPane>
        <SeparatorPane />

    </ContentPane>

</MessagePane>
