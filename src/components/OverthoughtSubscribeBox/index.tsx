import * as React from 'react'
import { A } from '../Typography'
import { Container } from './style'

export default function OverthoughtSubscribeBox() {
  return (
    <Container>
      <A href="https://overthought.ghost.io/rss/" target="_blank" rel="noopener noreferrer">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 11a9 9 0 0 1 9 9"></path><path d="M4 4a16 16 0 0 1 16 16"></path><circle cx="5" cy="19" r="1"></circle></svg>
        Subscribe with RSS
      </A>
    </Container>
  )
}