import { useDispatch } from 'react-redux'
import { ADD_ELEM, ADD_PHOTO_ELEM } from '../constants'

const AngularWidget = ({ widget, handleDragStart, index }) => {
    const dispatch = useDispatch()

    const addElem = () => {
        const type = widget.name === 'Image' ? ADD_PHOTO_ELEM : ADD_ELEM
        dispatch({ type, payload: widget })
    }

    return (
        <div
            id={index}
            className="widget-small centered"
            draggable={true}
            onDragStart={handleDragStart}
            onClick={addElem}
        >
            {widget.icon}
            {widget.name}
        </div>
    )
}

export default AngularWidget
