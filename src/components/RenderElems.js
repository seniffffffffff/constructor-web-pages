const RenderElems = ({ widget }) => {
    let renderedElem = null

    switch (widget?.element) {
        case 'Paragraph':
            renderedElem = <p className="content-text">{widget.text}</p>
            break
        case 'Headline':
            renderedElem = <h2 className="content-header">{widget.text}</h2>
            break
        case 'Button':
            renderedElem = widget.text ? (
                <button className="button-content">{widget.text}</button>
            ) : null
            break
        case 'Image':
            renderedElem = widget.imgPicture ? (
                <img src={widget.imgPicture} className="image" />
            ) : null
            break
        default:
            break
    }

    return renderedElem
}

export default RenderElems
