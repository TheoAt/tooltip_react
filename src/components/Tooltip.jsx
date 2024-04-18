import { useState } from 'react'
import './tooltip.css'

//Tooltip usable for anything you want : children is the main text by default, content is the text insible the tooltip
export default function Tooltip({ children, content, delay }) {

    const [isVisible, setIsVisible] = useState(false)
    let timeout

    const handleShowTooltip = () => {
        timeout = setTimeout(() => {
            setIsVisible(true)
        }, delay || 500)
    }

    const handleHideTooltip = () => {
        clearTimeout(timeout)
        setIsVisible(false)
    }

    return (
        <div className="tooltip-container"
            onMouseEnter={handleShowTooltip}
            onMouseLeave={handleHideTooltip}
        >
            {children}
            {isVisible ?
                <div className="tooltip-content">{content}</div>
                :
                null
            }
        </div>
    )
}