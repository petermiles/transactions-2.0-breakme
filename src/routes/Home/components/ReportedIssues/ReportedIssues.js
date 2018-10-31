import React from 'react';
import PropTypes from 'prop-types';
import {get, map} from 'lodash';
import Issue from './components/Issue';
import classes from './ReportedIssues.scss'

export const ReportedIssues = ({ issues, itemsActive, handleExpandIssue }) => (
  <div className={classes.root}>
    <div className={classes.issuesContainer}>
      {map(issues, (issue, index) => 
        <Issue
          active={get(itemsActive, `[${index}].active`)}
          hide={get(itemsActive, `[${index}].hide`)}
          index={index}
          handleExpandIssue={() => handleExpandIssue(index)}
          key={index}
          {...issue}
          />
        )}
    </div>
  </div>
)

ReportedIssues.propTypes = {
  reportedIssues: PropTypes.object // from enhancer (firestoreConnect + connect)
}

export default ReportedIssues
