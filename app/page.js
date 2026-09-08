import AppShell from '../components/AppShell/AppShell'
import Header from '../components/Header/Header'
import About from '../components/About/About'
import Projects from '../components/Projects/Projects'
import Skills from '../components/Skills/Skills'
import ScrollToTop from '../components/ScrollToTop/ScrollToTop'
import Contact from '../components/Contact/Contact'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <AppShell>
      <Header />

      <main>
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>

      <ScrollToTop />
      <Footer />
    </AppShell>
  )
}
