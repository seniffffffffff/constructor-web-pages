import Paragraph from '../icons/ParagraphIcon'
import Headline from '../icons/HeadlineIcon'
import Button from '../icons/ButtonIcon'
import Image from '../icons/ImageIcon'
import AngularWidget from './AngularWidget'
import MainWidget from './MainWidget'
import RenderElems from './RenderElems'
import { DragDropContext } from 'react-beautiful-dnd'

import '../styles.css'
import { useSelector } from 'react-redux'

const TestPage = () => {
    const elements = useSelector((state) => state.elements)
    const widgetArray = [
        { name: 'Headline', icon: <Headline /> },
        { name: 'Paragraph', icon: <Paragraph /> },
        { name: 'Button', icon: <Button /> },
        { name: 'Image', icon: <Image /> },
    ]
    // console.log('elements', elements)
    return (
        <div className="wrapper">
            <p className="header-acticle">REACT EDITOR Test</p>
            <div className="content">
                <div className="widget-area">
                    {widgetArray.map((widget, index) => {
                        return (
                            <AngularWidget
                                key={index}
                                icon={widget.icon}
                                name={widget.name}
                                widget={widget}
                            />
                        )
                    })}
                </div>
                <div className="main-content">
                    <div className="widgets-blocks">
                        {elements &&
                            elements?.map((widget, index) => {
                                return (
                                    <MainWidget key={index} widget={widget} />
                                )
                            })}
                    </div>
                    <div className="rendered-content">
                        {elements &&
                            elements?.map((widget, index) => {
                                return (
                                    <RenderElems key={index} widget={widget} />
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestPage
