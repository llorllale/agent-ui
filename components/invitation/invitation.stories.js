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
