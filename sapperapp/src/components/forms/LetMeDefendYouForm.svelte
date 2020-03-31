<!--
@file FIXME Utility function to convert a title to a slug.
The title belongs to an item. The slug is what we add to the url of the item to
help search engines to index the item's page.
-->

<script>
    import {APP_CONFIGURATION} from '../../appConfiguration';
    import {error_message_from_error} from "../../helpers/errorMessages";
    import * as Sentry from '@sentry/browser';

    import StandardButton from "../buttons/StandardButton.svelte";
    import SeparatorPane from "../panes/SeparatorPane.svelte";
    import StandardLabel from "../labels/StandardLabel.svelte";
    import MessageDialog from "../dialogs/MessageDialog.svelte";

    let messageDialogOpen = false;
    let messageDialogTitle;
    let messageDialogMessage;
    let messageDialogItIsAnErrorMessage;

    async function handleSubmit(event) {

        const message_node_details = {
            type: [{"target_id": "lcft_let_me_defend_you_message"}],
            title: [{"value": "New Message LCFT " + event.target.name.value}],
            field_name: [{"value": event.target.name.value}],
            field_email: [{"value": event.target.email.value}],
            field_message: [{"value": event.target.message.value}]
        };

        const res = await fetch(`${APP_CONFIGURATION.backendUrl}/node?_format=json`, {
            method: 'POST',
            body: JSON.stringify(message_node_details),
            headers: {
                'Content-Type': 'application/json',
                'Accepts': 'application/json'
            }
        });

        if (!res.ok) {
            console.error("Error in sending message", res);

            const error_message = error_message_from_error(res);

            Sentry.captureMessage(error_message);

            messageDialogItIsAnErrorMessage = true;
            messageDialogTitle = "Something went wrong";
            messageDialogMessage = "Please, save your message, reload the page and try again.";
            messageDialogOpen = true;

        } else {

            messageDialogItIsAnErrorMessage = false;
            messageDialogTitle = "Message sent";
            messageDialogMessage = "Thank you for your message!";
            messageDialogOpen = true;

            document.getElementById('letmedefendyouform').reset();

        }

    }

    function validateField(event) {
        let field = event.target;

        switch (field.id) {
            case "name":
                if (field.value === '') {
                    field.setCustomValidity('The name is required');
                } else {
                    field.setCustomValidity('');
                }
                break;
            case "email":
                if (field.value === '') {
                    field.setCustomValidity('The email address is required');
                } else if (field.validity.typeMismatch) {
                    field.setCustomValidity('Please enter a valid email address');
                } else {
                    field.setCustomValidity('');
                }
                break;
            case "message":
                if (field.value === '') {
                    field.setCustomValidity('The message is required');
                } else {
                    field.setCustomValidity('');
                }
                break;
            default:
                const error_message = "Impossible! In validateField I got a field.id that is not managed! field.id=" + field.id;
                console.error(error_message);
                Sentry.captureMessage(error_message);
        }

        return true;
    }
</script>

<style>
    .letmedefendyouform input:invalid, .letmedefendyouform textarea:invalid  {
        background-color: #ffdca8;
    }

    .letmedefendyouform input:valid, .letmedefendyouform textarea:valid  {
        background-color: #e9fbd0;
    }
</style>

<form
        id="letmedefendyouform"

        on:submit|preventDefault="{handleSubmit}"
        on:invalid={validateField}
        on:changed={validateField}
        on:input={validateField}

        class="letmedefendyouform"
>

    <StandardLabel fieldFor="name">Name</StandardLabel>
    <SeparatorPane size="veryshort" />
    <input required type="text" id="name" />

    <SeparatorPane/>

    <StandardLabel fieldFor="email">Email</StandardLabel>
    <SeparatorPane size="veryshort" />
    <input required type="email" id="email" />

    <SeparatorPane/>

    <StandardLabel fieldFor="message">Message</StandardLabel>
    <SeparatorPane size="veryshort" />
    <textarea required id="message" rows="4" cols="50" />

    <SeparatorPane/>

    <StandardButton>
        GO!
    </StandardButton>

</form>

{#if messageDialogOpen}

    <MessageDialog on:click={() => messageDialogOpen = false}
                   title={messageDialogTitle}
                   message={messageDialogMessage}
                   it_is_an_error_message={messageDialogItIsAnErrorMessage}/>

{/if}