import type { NextPage } from 'next'
import Head from 'next/head'
import SiteNavigation from '../../components/navigation'
// import ContactUsSection from '../../sections/contactUs'
// import HomeFaqSection from './faqSection'
import HomeFeaturesSection from './featuresSection'
import HomeLandingSection from './landing'
import HomeWhoWeAre from './whoWeAreSection'
import HomeProjectsSection from './projectsSection'
import { Footer } from '../../sections/footer'
import { useStore } from '../../lib/state'
import HomeTestimonialsSection from './testimonialsSection'
import HomeFoundationSection from './foundationSection'
import HomeServicesSection from './servicesSection'
import HomeContactUs from './contactUs'

const Home: NextPage = () => {
  const { screenWidth, NAVBAR_BREAKPOINT } = useStore(state => state)

  return (
    <>
      <Head>
        <title>59 Project Management</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main
        className='overflow-hidden relative'
      >
        <SiteNavigation collapse={(screenWidth > NAVBAR_BREAKPOINT)}/>
        <HomeLandingSection/>
        <HomeFeaturesSection/>
        <HomeWhoWeAre/>
        <HomeTestimonialsSection/>
        <HomeProjectsSection/>
        <HomeFoundationSection/>
        <HomeServicesSection/>
        <HomeContactUs/>
      </main>
      <Footer />
    </>
  )
}

export default Home
