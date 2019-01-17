import { handleActions } from 'redux-actions'
import actions from '../actions/categories'

export const initialState = {
    items: [],
    isFiredOff: false,
}

export default handleActions(
    {
        [actions.categories.success]: (state, { payload }) => ({
            ...state,
            items: payload.items,
            isFiredOff: true,
        }),
    },
    initialState
)
