import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'


import InputGroup from 'react-bootstrap/InputGroup'
import FormGroup from 'react-bootstrap/FormGroup'
import FormControl from 'react-bootstrap/FormControl'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import './app.css'


class App extends Component {


  constructor(...args){
    super(...args)
    this.state = {
      query: ''
    }
  }


  search(){
    console.log('this.state:', this.state)
    const base = 'https://api.spotify.com/v1/search?'
    const spotify = `${base}q=${this.state.query}&type=artist&limit=1`
    console.log('spotify', spotify)
  }
  render(){
    return (
      <div className='app'>
          <Row>
            <Col className='logo'>
              <Image src='./logo.png' className='.logo' fluid />
            </Col>
            <Col sm={10}>
              <div className="app-title"> Jukebox </div>

              <FormGroup className='searchbar'>
                <InputGroup>
                  <FormControl
                    type='text' placeholder='Search for an Artist...'
                    value={this.state.query}
                    onChange={event => {this.setState({query: event.target.value})}}
                    onKeyPress={(event) => {
                      if (event.key === 'Enter') {
                        this.search()
                      }
                    }}
                 />
                  <InputGroup.Append onClick={() => this.search()}>
                      <Button variant="success"><i className="fa fa-search" aria-hidden /></Button>
                  </InputGroup.Append>
                </InputGroup>
              </FormGroup>
              <div className="profile">
                <div>Artist Pictures</div>
                <div>Artist Name</div>
              </div>
              <div className="gallery">
                Gallery
              </div>
            </Col>
          </Row>
      </div>
    )
  }
}


export default App
