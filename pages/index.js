import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>ay lmao</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="get cancer krit" />
        <p className="description">
            - from chris
        </p>
      </main>
    </div>
  )
}
