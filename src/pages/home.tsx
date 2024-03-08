import Intro from "../components/Intro"
import Footer from "../components/Footer"
import Demo from "../components/Demo"
import ScrollTop from "../components/ScrollTop"
import Loading from "../components/Loading"

const Home = () => {
  return (
    <>
      <Loading />
      <Intro />
      <Demo />
      <Footer />
      <ScrollTop />
    </>
  )
}

export default Home
