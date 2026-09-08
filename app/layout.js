import { Poppins } from 'next/font/google'
import { ThemeProvider } from '../contexts/theme'
import { siteMeta } from '../lib/portfolio'
import './globals.css'
import './app.css'
import '../components/Header/Header.css'
import '../components/Navbar/Navbar.css'
import '../components/About/About.css'
import '../components/Projects/Projects.css'
import '../components/ProjectContainer/ProjectContainer.css'
import '../components/Skills/Skills.css'
import '../components/Contact/Contact.css'
import '../components/Footer/Footer.css'
import '../components/ScrollToTop/ScrollToTop.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata = {
  title: siteMeta.title,
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: siteMeta.author }],
  alternates: {
    canonical: siteMeta.canonical,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
