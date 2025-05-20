import { Wrapper } from '@/components'
import Header from '@/ui/Header'
import MyLinks from '@/ui/MyLinks'
import NewLink from '@/ui/NewLink'

export function Home() {
  return (
    <Wrapper>
      <Header />
      <NewLink />
      <MyLinks />
    </Wrapper>
  )
}

export default Home
