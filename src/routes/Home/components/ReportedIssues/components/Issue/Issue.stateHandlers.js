export const initialState = {
  issueExpanded: false
};

export const stateHandlers = {
  toggleExpandIssue: ({ issueExpanded }) => () => ({
    issueExpanded: !issueExpanded
  })
}

export default {
  initialState,
  stateHandlers
}
