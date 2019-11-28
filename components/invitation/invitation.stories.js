/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/
import { storiesOf } from '@storybook/vue'
import invitation from './invitation'


storiesOf('invitation', module)
    .add('normal', () => ({
        components: { invitation },
        template:
            `
      <invitation/>
    `
    }))
