/* eslint-disable react/react-in-jsx-scope */
import { Container } from 'react-bootstrap'
import { Profile, GameList, Nav } from '../components'

export default function Dashboard () {
  return (
    <>
      <Container className="mt-5">
        <Nav />
        <div className="row">
          <div className="col-6">
            <Profile />
          </div>
          <div className="col-6">
            <GameList />
          </div>
        </div>
      </Container>
    </>
  )
}
