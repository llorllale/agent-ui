/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/
import { storiesOf } from '@storybook/vue'
import createInvitation from './CreateInvitation'


storiesOf('invitation', module)
    .add('create', () => ({
        components: { createInvitation },
        template:
            `
      <createInvitation/>
    `
    }))
