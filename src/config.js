
const config = {
    email: 'paul.richard.lewis.esq@gmail.com',
    socialMedia: [
        {
            name: 'GitHub',
            icon: 'github', // This should match the key in your Icon component
            url: 'https://github.com/lewi0231',
        },
        // {
        //     name: 'X',
        //     icon: 'x', // This should match the key in your Icon component
        //     url: 'https://twitter.com/studio_dev888',
        // },
        {
            name: 'LinkedIn',
            icon: 'linkedin', // This should match the key in your Icon component
            url: 'https://www.linkedin.com/in/paul-lewis-80016082/',
        },
        // {
        //     name: 'Instagram',
        //     icon: 'instagram', // This should match the key in your Icon component
        //     url: 'https://www.instagram.com/studio.dev888/',
        // },
        // {
        //     name: 'Shopify',
        //     icon: 'shopify',
        //     url: 'https://community.shopify.com/c/user/viewprofilepage/user-id/1636038'
        // }
    ],
    work: [
        {
            tags: ['Shopify', 'Product', 'Liquid', 'JavaScript', 'Metafield'],
            mediaPath: '/videos/text-dropdown-capture.mp4',
            mediaType: 'video',
            content: 'Here I used product metafields, JavaScript, Liquid and CSS to hide / show additional product relevant information.  I used custom product metafields behind the scenes for this. Shipping specific information. To read more about how to achieve this effect, read my tutorial, ',
            href: '/articles/product-dropdown',
            linkWord: 'here.',
            title: 'Product Metafield Text Dropdown',
            icons: [
                {
                    name: 'github',
                    url: 'https://github.com/lewi0231/shopify_code/blob/main/text-dropdown'
                }
            ]
        },
        {
            tags: ['Shopify', 'Collection List', 'Text', 'Overlay'],
            mediaPath: '/videos/overlay-collection.mp4',
            mediaType: 'video',
            content: 'In designing my Shopify demo shoe store (ShoeGazers) I replaced the default styling with a hover text overlay, to enable a more intuitive, aesthetic design.  To view hover the screen capture.',
            title: 'Collection-List Text Overlay',
            icons: [
                {
                    name: 'github',
                    url: 'https://github.com/lewi0231/shopify_code/blob/main/text-overlay'
                }
            ]
        }
    ],
    logoPath: "/circlelogo.png"
}

export default config;