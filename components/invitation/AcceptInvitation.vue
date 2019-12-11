/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/
<template>
    <div id="acceptInvitationDiv">
        <label for="invitation">Invitation:</label>
        <textarea rows="10" cols="80" id="invitation"></textarea>
        <button onClick="acceptInvitation('invitation');" id="accept">Accept</button>
    </div>
</template>
