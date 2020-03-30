<script>
    import StandardButton from "../buttons/StandardButton.svelte";
    import SeparatorPane from "../panes/SeparatorPane.svelte";
    import StandardLabel from "../labels/StandardLabel.svelte";
    import {APP_CONFIGURATION} from '../../appConfiguration';
    import MessageDialog from "../dialogs/MessageDialog.svelte";


    let messageDialogOpen = false;

    // let error_boolean = false;

    async function handleSubmit(event) {
        // console.log(event);
        // console.log(event.target);
        console.log(event.target.email.value);
        console.log(event.target.name.value);
        console.log(event.target.message.value);

        messageDialogOpen = true;

        console.log("messageDialogOpen",messageDialogOpen);

        // FIXME
        return;

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
            // FIXME excpt handling and message

            console.error("Error in sending message");

            // FIXME pop up with message
        } else {

            // FIXME success message
            console.log("Success in sending message");

            // FIXME clean the form
            // FIXME pop up with message

            document.getElementById('letmedefendyouform').reset();

        }

    }

    function validateField(event) {
        let field = event.target;
        console.log(field.id);

        // var tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;

        switch (field.id) {
            case "name":
                // code block
                if (field.value === '') {
                    field.setCustomValidity('The name is required');
                } else {
                    field.setCustomValidity('');
                }
                break;
            case "email":
                // code block

                if (field.value === '') {
                    field.setCustomValidity('The email address is required');
                } else if (field.validity.typeMismatch) {
                    field.setCustomValidity('Please enter a valid email address');
                } else {
                    field.setCustomValidity('');
                }
                break;
            case "message":
                // code block

                if (field.value === '') {
                    field.setCustomValidity('The message is required');
                } else {
                    field.setCustomValidity('');
                }
                break;
            default:
                // code block
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

here it is

    <MessageDialog />

{/if}