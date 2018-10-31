import { compose } from 'redux'
import { withStateHandlers } from 'recompose'
import { initialState, stateHandlers } from './Issue.stateHandlers';

export default compose(
  withStateHandlers(initialState, stateHandlers)
)
