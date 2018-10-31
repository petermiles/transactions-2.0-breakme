import { compose } from 'redux';
import { map, set, get } from 'lodash';
import { withStateHandlers } from 'recompose'

export const initialState = ({ issues }) => ({
  itemsActive: map(issues, (item, index) => ({
    active: true,
    hide: false,
    index
  }))
})

export const stateHandlers = {
  handleExpandIssue: ({ itemsActive }) => (index) => {
    const itemActive = get(itemsActive, `[${index}].active`);
    return {
      itemsActive: map(itemsActive, (item, idx) => { 
        if (index === idx) {
          return {
            ...item,
            active: true,
            hide: false
          }
        }
        return {
          ...item,
          active: false,
          hide: true
        }
      })
    }
  }
}

export default compose(
  withStateHandlers(initialState, stateHandlers)
)
