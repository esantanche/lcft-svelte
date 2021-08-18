<!--
@file FIXME

You read "Let me defend you" many times, but it's an old expression.
I left it because I didn't want to change everything.
-->

<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';
    import * as Sentry from '@sentry/browser';

    import SeparatorPane from "../panes/SeparatorPane.svelte";
    import StandardLabel from "../labels/StandardLabel.svelte";
    import CenteringPane from "../panes/CenteringPane.svelte";

    function validateField(event) {
        let field = event.target;

        if (field.id === "email") {
            if (field.value === '') {
                field.setCustomValidity('The email address is required');
            } else if (field.validity.typeMismatch) {
                field.setCustomValidity('Please enter a valid email address');
            } else {
                field.setCustomValidity('');
            }
        } else {
            const error_message = "Impossible! In validateField I got a field.id that is not managed! field.id=" + field.id;
            console.error(error_message);
            Sentry.captureMessage(error_message);
        }

        return true;
    }
</script>

<style>
    .newsletterform {
        margin-right: 10px;
    }

    .newsletterform input:invalid {
        background-color: #ffdca8;
    }

    .newsletterform input:valid {
        background-color: #e9fbd0;
    }

    #mc-embedded-subscribe {
        background-color: var(--background);
        border-color: var(--border-color);
        font-family: var(--font-family);
        font-weight: 600;
        font-size: 1.15rem;
        padding: 11px 18px;
        cursor: pointer;
        color: var(--color);
    }
</style>

<form
        id="mc-embedded-subscribe-form"
        name="mc-embedded-subscribe-form"

        on:invalid={validateField}
        on:changed={validateField}
        on:input={validateField}

        action="https://leadershipcoachfortech.us5.list-manage.com/subscribe/post?u=e9e29fcc2c35c84a170206329&amp;id=fcb810ad86"
        method="post"

        class="newsletterform"
        target="_blank"
>

    <StandardLabel fieldFor="email" useDarkTextColor={true}>Email</StandardLabel>
    <SeparatorPane size="veryshort" />
    <input required type="email" name="EMAIL" id="email" />

    <SeparatorPane/>

    <div style="position: absolute; left: -5000px;" aria-hidden="true"><input type="text" name="b_e9e29fcc2c35c84a170206329_fcb810ad86" tabindex="-1" value=""></div>
    <CenteringPane>
        <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" class="subscribebutton"
               style="--background: {APP_CONFIGURATION.defaultColorsTable["BLUE"]};
                      --border-color: {APP_CONFIGURATION.defaultColorsTable["BLUE"]};
                      --font-family: {APP_CONFIGURATION.fontFamily};
                      --color: {APP_CONFIGURATION.defaultColorsTable["WHITESHADE"]}">
    </CenteringPane>

</form>
