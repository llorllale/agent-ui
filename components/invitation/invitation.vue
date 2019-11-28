<template>
    <div id="invitationDiv">
    <h1>Invitation</h1>
    <textarea  rows="10" cols="80" readonly>{{ invitationData }}</textarea>
    <br/>
    <input v-model="mediatorURL" placeholder="mediator url">
    <br/>
    <button v-on:click="createInvitation()">Create</button>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        methods: {
            createInvitation: function () {
                if (!this.mediatorURL) {
                    alert("please enter mediator url")
                    return
                }
                axios
                    .post(this.mediatorURL+'/connections/create-invitation')
                    .then(response => (this.invitationData = response.data.invitation))
                    .catch(error => (this.invitationData = error))
            }
        },
        data () {
            return {
                invitationData: "Invitation data will show here",
                mediatorURL:null
            }
        }
    }
</script>

<style>
</style>
