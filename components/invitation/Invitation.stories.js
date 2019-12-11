/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/
import { storiesOf } from '@storybook/vue'
import createInvitation from './CreateInvitation'
import acceptInvitation from './AcceptInvitation'


storiesOf('invitation', module)
    .add('create', () => ({
        components: { createInvitation },
        template:
            `
      <createInvitation/>
    `
    })).add('accept',() => ({
    components: { acceptInvitation },
    template:
        `
      <acceptInvitation/>
    `
    }))
