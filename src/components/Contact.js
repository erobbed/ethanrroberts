import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const Contact = () => {
  return (
    <Button.Group>
      <Button color='red' as='a' href='https://drive.google.com/file/d/0B6v9pCbkv8V1STZFV2hHaHJtalE/view?usp=sharing' targt='_blank'>
        <Icon name='file pdf outline' /> Résumé
      </Button>
      <Button color='violet' as='a' href='https://github.com/erobbed' target='_blank'>
        <Icon name='github' /> GitHub
      </Button>
      <Button color='teal' as='a' href='https://medium.com/@ethan.reid.roberts' target='_blank'>
        <Icon name='medium' /> Medium
      </Button>
      <Button color='linkedin' as='a' href='https://www.linkedin.com/in/ethan-r-roberts-8587ab149/' target='_blank'>
        <Icon name='linkedin' /> LinkedIn
      </Button>
      <Button color='twitter' as='a' href='https://twitter.com/er0bbed' target='_blank'>
        <Icon name='twitter' /> Twitter
      </Button>
    </Button.Group>
  )
}


export default Contact
