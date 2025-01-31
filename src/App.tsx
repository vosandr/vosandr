import { BodyText, Footer, Link } from 'components/Text'
import Intro from 'components/Intro'
import Profile from 'components/Profile'
import Projects from 'components/Projects'
import Root from 'components/Root'
import TotalNumberOfUsers from 'components/TotalNumberOfUsers'

const App = () => {
  return (
    <Root>
      <Profile />
      {/* <Intro /> */}
      <Projects />
      {/* <Footer>Thanks for scrolling!</Footer> */}
      <Footer>
        Сайт создан на основе{' '}
        <Link url="https://borodutch.com/">borodutch.com</Link>
      </Footer>
    </Root>
  )
}

export default App
