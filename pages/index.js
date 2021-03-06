import Head from 'next/head'
import { useRouter } from 'next/router'
import i18n from '../lib/i18n'

export default function Home() {
  const router = useRouter()
  i18n.locale(router.locale)
  
  return (
    <div className="container">
      <Head>
        <title>Singa Web</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        { i18n.t('content') }
      </main>

      <footer>
       
      </footer>
    </div>
  )
}