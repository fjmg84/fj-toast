import { useEffect, useState } from "react"
import { uuid } from "../util/functionId"

export const useToastPortal = ({ position = 'top-right' }) => {

    const [loaded, setLoaded] = useState(false)
    const [portalId] = useState(`toast-portal-${uuid()}`)

    const POSITION = {
        'top-right': 'top: 10px; right: 10px',
        'top-left': 'top: 10px; left: 10px',
        'bottom-right': 'bottom: 10px; right: 10px',
        'bottom-left': 'bottom: 10px; left: 10px'
    }

    useEffect(() => {
        const div = document.createElement('div')
        div.id = portalId
        div.style = `position: fixed; ${POSITION[position]}`;
        document.getElementsByTagName('body')[0].prepend(div)

        setLoaded(true)

        return () => document.getElementsByTagName('body')[0].removeChild(div)
    }, [portalId])

    return { loaded, portalId }
}