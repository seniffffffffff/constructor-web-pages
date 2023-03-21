import React from 'react'

const RenderElems = ({ widget }) => {
    switch (widget.element) {
        case 'Paragraph':
            return <p className="content-text">{widget.text}</p>
        case 'Headline':
            return <h2 className="content-header">{widget.text}</h2>

        case 'Button':
            return widget.text ? (
                <button className="button-content">{widget.text}</button>
            ) : (
                ''
            )

        case 'Image':
            return widget.imgPicture ? (
                <img src={widget.imgPicture} className="image" />
            ) : (
                ''
            )
        default:
            break
    }
}

export default RenderElems
