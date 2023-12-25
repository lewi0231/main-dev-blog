import React from 'react'
import IconExternal from './IconExternal'
import IconFolder from './IconFolder'
import IconGithub from './IconGitHub'
import IconHamburger from './IconHamburger'
import IconInstagram from './IconInstagram'
import IconLinkedIn from './IconLinkedIn'
import IconShopify from './IconShopify'
import IconSpotify from './IconSpotify'
import IconX from './IconX'

const Icon = ({ name }) => {
    switch (name) {
        case 'github':
            return <IconGithub />
        case 'linkedin':
            return <IconLinkedIn />
        case 'x':
            return <IconX />
        case 'instagram':
            return <IconInstagram />
        case 'folder':
            return <IconFolder />
        case 'spotify':
            return <IconSpotify />
        case 'shopify':
            return <IconShopify />
        case 'hamburger':
            return <IconHamburger />
        default:
            return <IconExternal />
    }
}

export default Icon
