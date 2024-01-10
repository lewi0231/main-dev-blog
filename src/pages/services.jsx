import React from 'react'
import Layout from '../components/Layout'
import * as styles from '../styles/services.module.scss'

const Services = () => {
    return (
        <Layout>
            <div className={styles.servicesContainer}>
                <h2>Services.</h2>
                <h4>I Can Assist With:</h4>
                <p>
                    <ul>
                        <li>Theme Customization</li>
                        <li>Creation of Custom Sections & Blocks</li>
                        <li>Management of Shopify Admin Tasks (including Metafields, Metaobjects, etc</li>
                    </ul>
                </p>

                <h4>
                    Please Note:
                </h4>
                <p>
                    Currently, I do not undertake App Development, Shopify Functions, Checkout Extensibility, or Headless Builds.
                </p>

                <h4>
                    Pricing Details:

                </h4>
                <p>
                    Projects begin at a starting rate of $50 USD.
                    After discussing your requirements, I will provide you with an exact quote.
                    Payment options include Credit Card or PayPal.
                </p>
                <h4>
                    Why Choose Me?
                </h4>
                <p>
                    My rates are competitively low as I am new to freelancing. This doesn't reflect a lack of expertise, but rather my commitment to establishing a strong portfolio and client base.

                </p>
            </div>
        </Layout>
    )
}

export default Services
