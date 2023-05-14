import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
export default function Home2() {
  return (
    <div className="container">
      <Head>
        <title>ayy lmao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="purify my soul" />
        <p className="description">
          - wash away my sins -
        </p>
      </main>

      <Footer />
    </div>
  )
}
