<script>
    import FullWidthPane from "../panes/FullWidthPane.svelte";
    import {APP_CONFIGURATION} from '../../appConfiguration';
    import WideContentPane from "../panes/WideContentPane.svelte";
    import SpaceBetweenPane from "../panes/SpaceBetweenPane.svelte";
    import NarrationText from "../texts/NarrationText.svelte";
    import MarginTopPane from "../panes/MarginTopPane.svelte";
    import StandardLink from "../links/StandardLink.svelte";
</script>

<FullWidthPane backgroundColor={APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}>
    <WideContentPane backgroundColor="inherit">
        <SpaceBetweenPane>
            <div>
                <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                    Emanuele Santanché
                </NarrationText>
                <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                    Leadership coach for technology
                </NarrationText>
            </div>
            <MarginTopPane>
                <NarrationText color={APP_CONFIGURATION.defaultColorsTable["VERYDARKGREY"]}>
                    <StandardLink to="/article/58/privacy-policy">
                        <p>Privacy policy</p>
                    </StandardLink>
                </NarrationText>
            </MarginTopPane>
        </SpaceBetweenPane>
    </WideContentPane>
</FullWidthPane>