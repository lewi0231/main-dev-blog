import React from 'react'
import IconExternal from './IconExternal'
import IconFolder from './IconFolder'
import IconGithub from './IconGitHub'
import IconInstagram from './IconInstagram'
import IconLinkedIn from './IconLinkedIn'
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
        default:
            return <IconExternal />
    }
}

export default Icon
