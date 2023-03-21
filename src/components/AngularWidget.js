import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { ADD_ELEM, ADD_PHOTO_ELEM } from '../constants'

const AngularWidget = ({ widget }) => {
    const { name, icon } = widget
    const dispatch = useDispatch()
    const addElem = () => {
        const type = name === 'Image' ? ADD_PHOTO_ELEM : ADD_ELEM
        dispatch({ type, payload: widget })
    }

    return (
        <div className="widget-small centered" onClick={addElem}>
            {icon}
            {name}
        </div>
    )
}

export default AngularWidget
