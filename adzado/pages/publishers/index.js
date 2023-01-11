// Next
import Head from 'next/head'

// Layout
import Layout from '../../components/@core/layouts/Layout'
import Footer from '../../components/@core/layouts/Footer'

// Sections
import PublishersComingSoon from '../../components/@core/pages/coming-soon/PublishersComingSoon'
import CTA from '../../components/@core/pages/shared/CTA'

const Publishers = () => {
  return (
    <Layout>
      <Head>
        <title>Adzado Publishers</title>
        <meta
          name='description'
          content='Exclusive Verified Leads that pay off in new business! inbound calls and leads for insurance, financial services, and other industries.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='pt-10 lg:pt-28'>
        <PublishersComingSoon />
        <CTA />
      </main>
      <Footer />
    </Layout>
  )
}

export default Publishers
