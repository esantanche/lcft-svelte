<!--
@file FIXME Utility function to convert a title to a slug.
-->

<script>
    import FullWidthPane from "../panes/FullWidthPane.svelte";
    import WideContentPane from "../panes/WideContentPane.svelte";
    import NarrationText from "../texts/NarrationText.svelte";
    import StandardLink from "../links/StandardLink.svelte";
    import {APP_CONFIGURATION} from '../../appConfiguration';
</script>

<FullWidthPane noPadding={true}
               makeItSticky={true}
               stickToBottom={true}
               doShadow={false}
               doTransparency={true}
               backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}>

    <WideContentPane backgroundColor="inherit">
        <div>
            <NarrationText centered={true} color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                <StandardLink to={"/newsletter"}>
                Click here to get your free copy of my course "The Secrets of Management"
                </StandardLink>
            </NarrationText>
        </div>
    </WideContentPane>
</FullWidthPane>

