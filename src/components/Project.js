import React from 'react';
import { Card, Button, Image } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';

const Project = (props) => {

  return(
    <Card>
      <Image src={props.image} style={{height: '175px'}} />
      <Card.Content>
        <Card.Header>
          {props.name}
        </Card.Header>
        <Card.Description>
          {props.desc}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <div className='ui two buttons'>
          <Button color='blue' content='GitHub' icon='github' as="a" href={props.client} target="_blank"/>
          <Button color='green' content='Demo' icon='code' as="a" href={props.demo} target="_blank" />
        </div>
      </Card.Content>
    </Card>
  )
}

export default Project
