/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

import CreateInvitation from "./CreateInvitation.vue";
import AcceptInvitation from "./AcceptInvitation.vue";


export default {
    install(Vue, options) {
        // Let's register our component globally
        // https://vuejs.org/v2/guide/components-registration.html
        Vue.component("create-invitation", CreateInvitation);
        Vue.component("accept-invitation", AcceptInvitation);

    }
};
