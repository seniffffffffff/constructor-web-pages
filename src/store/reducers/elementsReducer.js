import {
    ADD_ELEM,
    ADD_PHOTO_ELEM,
    ADD_CONTENT_IN_ELEM,
    DELETE_ELEM,
    COPY_ELEM,
    COPY_PHOTO_ELEM,
    DOWNLOAD_PHOTO,
    SWAP_ELEMS,
} from '../../constants/index'

export const elements = (state = [], action) => {
    switch (action.type) {
        case ADD_ELEM:
            return [
                ...state,
                {
                    element: action.payload.name,
                    id: Date.now(),
                    text: '',
                    img: false,
                    icon: action.payload.icon,
                },
            ]
        case ADD_CONTENT_IN_ELEM:
            return state?.map((elem) =>
                elem.id === action.payload.id
                    ? { ...elem, text: action.payload.text }
                    : elem
            )
        case ADD_PHOTO_ELEM:
            return [
                ...state,
                {
                    element: action.payload.name,
                    id: Date.now(),
                    img: true,
                    imgPicture: false,
                    icon: action.payload.icon,
                },
            ]
        case DOWNLOAD_PHOTO:
            return state?.map((elem) =>
                elem.id === action.payload.id
                    ? { ...elem, imgPicture: action.payload.imgPicture }
                    : elem
            )
        case COPY_ELEM:
            return [
                ...state,
                {
                    element: action.payload.element,
                    id: Date.now(),
                    text: action.payload.text,
                    img: false,
                    icon: action.payload.icon,
                },
            ]
        case COPY_PHOTO_ELEM:
            return [
                ...state,
                {
                    element: action.payload.element,
                    id: Date.now(),
                    img: true,
                    icon: action.payload.icon,
                },
            ]
        case SWAP_ELEMS:
            return [...state]
        case DELETE_ELEM:
            return state?.filter((elem) => elem.id !== action.payload)

        default:
            return state
    }
}
