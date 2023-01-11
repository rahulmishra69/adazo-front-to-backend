// Next
import Head from 'next/head'

// Layouts
import Layout from '../../components/@core/layouts/Layout'
import Footer from '../../components/@core/layouts/Footer'

// Sections
import MarketplaceComingSoon from '../../components/@core/pages/coming-soon/MarketplaceComingSoon'
import CTA from '../../components/@core/pages/shared/CTA'

const Marketplace = () => {
  return (
    <Layout>
      <Head>
        <title>Adzado Marketplace</title>
        <meta
          name='description'
          content='Exclusive Verified Leads that pay off in new business! inbound calls and leads for insurance, financial services, and other industries.'
        />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='pt-10 lg:pt-28'>
        <MarketplaceComingSoon />
        <CTA />
      </main>

      <Footer />
    </Layout>
  )
}

export default Marketplace
