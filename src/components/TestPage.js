import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ADD_ELEM } from '../constants'
import '../styles.css'

import AngularWidget from './AngularWidget'
import MainWidget from './MainWidget'
import RenderElems from './RenderElems'

import ButtonIcon from '../icons/ButtonIcon'
import HeadlineIcon from '../icons/HeadlineIcon'
import ImageIcon from '../icons/ImageIcon'
import ParagraphIcon from '../icons/ParagraphIcon'

const TestPage = () => {
    const [selectedElem, setSelectedElem] = useState(null)
    const elements = useSelector((state) => state.elements)
    const dispatch = useDispatch()

    const widgetArray = [
        { name: 'Headline', icon: <HeadlineIcon /> },
        { name: 'Paragraph', icon: <ParagraphIcon /> },
        { name: 'Button', icon: <ButtonIcon /> },
        { name: 'Image', icon: <ImageIcon /> },
    ]

    const handleDragOver = (e) => {
        e.preventDefault()
    }
    
    const handleDragStart = (elem) => {
        setSelectedElem(elem)
    }

    const handleDrop = () => {
        dispatch({ type: ADD_ELEM, payload: selectedElem })
    }

    return (
        <div className="wrapper">
            <p className="header-acticle">REACT EDITOR Test</p>
            <div className="content">
                <div className="widget-area">
                    {widgetArray.map((widget, index) => (
                        <div key={index}>
                            <AngularWidget
                                handleDragStart={() => handleDragStart(widget)}
                                index={index}
                                icon={widget.icon}
                                name={widget.name}
                                widget={widget}
                            />
                        </div>
                    ))}
                </div>

                <div className="main-content">
                    <div
                        className="widgets-blocks"
                        id="dropzone"
                        onDragOver={handleDragOver}
                        onDrop={handleDrop}
                    >
                        {elements?.map((widget, index) => (
                            <MainWidget key={index} widget={widget} />
                        ))}
                    </div>
                    <div className="rendered-content">
                        {elements?.map((widget, index) => (
                            <RenderElems key={index} widget={widget} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage
