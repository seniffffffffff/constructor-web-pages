import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
    ADD_CONTENT_IN_ELEM,
    DELETE_ELEM,
    COPY_ELEM,
    COPY_PHOTO_ELEM,
    DOWNLOAD_PHOTO,
    SWAP_ELEMS,
} from '../constants'
import ArrowUp from '../icons/ArrowUpIcon'
import ArrowDown from '../icons/ArrowDownIcon'
import CopyIcon from '../icons/CopyIcon'
import TrashIcon from '../icons/TrashIcon'

const MainWidget = ({ widget }) => {
    const { element, icon, id, text } = widget
    const [isSelected, setIsSelected] = useState(false)
    const [inputValue, setInputValue] = useState('')
    const elementsArray = useSelector((state) => state.elements)
    const dispatch = useDispatch()
    useEffect(() => setInputValue(widget.text), [widget])
    const addContentInElement = (text) => {
        setInputValue(text)
        dispatch({
            type: ADD_CONTENT_IN_ELEM,
            payload: { text: text, id: widget.id },
        })
    }
    const copyElem = () => {
        const type = element === 'Image' ? COPY_PHOTO_ELEM : COPY_ELEM
        dispatch({ type, payload: widget })
    }
    const deleteElem = (id) => dispatch({ type: DELETE_ELEM, payload: id })

    const downloadPhoto = (e) => {
        e.stopPropagation()
        dispatch({
            type: DOWNLOAD_PHOTO,
            payload: {
                id: widget.id,
                imgPicture: URL.createObjectURL(e.target.files[0]),
            },
        })
    }

    const switchPlaces = (arr, index1, index2) => {
        if (arr.length === index2 || index1 === -1) {
            return null
        }

        const swappedArray = ([arr[index1], arr[index2]] = [
            arr[index2],
            arr[index1],
        ])
        dispatch({ type: SWAP_ELEMS, payload: swappedArray })
    }

    return (
        <>
            {isSelected ? (
                <div
                    className="widget-open centered"
                    onClick={() => setIsSelected((prev) => !prev)}
                >
                    {icon}
                    {element}
                    {element === 'Image' ? (
                        <div>
                            <input
                                type="file"
                                onClick={(e) => e.stopPropagation()}
                                onChange={downloadPhoto}
                            />
                        </div>
                    ) : (
                        <input
                            value={inputValue}
                            onClick={(e) => e.stopPropagation()}
                            onChange={(e) => {
                                addContentInElement(e.target.value, widget)
                                e.stopPropagation()
                            }}
                            className="text-input"
                            type="text"
                        />
                    )}

                    <div
                        className="icons-div"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="left-icons centered">
                            <div
                                className="centered click-on-me"
                                onClick={
                                    elementsArray.length === 1
                                        ? null
                                        : () =>
                                              switchPlaces(
                                                  elementsArray,
                                                  elementsArray.indexOf(widget),
                                                  elementsArray.indexOf(
                                                      widget
                                                  ) + 1
                                              )
                                }
                            >
                                <ArrowUp />
                            </div>
                            <div
                                className="margin-left rotated centered click-on-me"
                                onClick={
                                    elementsArray.length === 1
                                        ? null
                                        : () =>
                                              switchPlaces(
                                                  elementsArray,
                                                  elementsArray.indexOf(
                                                      widget
                                                  ) - 1,
                                                  elementsArray.indexOf(widget)
                                              )
                                }
                            >
                                <ArrowDown />
                            </div>
                        </div>
                        <div className="right-icons centered">
                            <div
                                className="centered click-on-me"
                                onClick={() => copyElem(widget.id)}
                            >
                                <CopyIcon />
                            </div>
                            <div
                                className="margin-left centered click-on-me"
                                onClick={() => deleteElem(widget.id)}
                            >
                                <TrashIcon />
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <div
                    className="widget-large centered"
                    onClick={() => setIsSelected((prev) => !prev)}
                >
                    {icon}
                    {element}
                </div>
            )}
        </>
    )
}

export default MainWidget
