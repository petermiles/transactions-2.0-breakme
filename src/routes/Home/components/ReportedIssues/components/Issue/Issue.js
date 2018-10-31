import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames';
import Fade from 'components/Fade';
import classes from './Issue.scss'

export const Issue = ({ issueTitle,
  reporter,
  notes,
  acknowledged,
  resolved,
  issueExpanded,
  handleExpandIssue,
  index,
  hide,
  active
}) => active && (
  <Fade
    in={active}
  >
    <div
      onClick={handleExpandIssue}
      className={classnames(classes.root)}
      >
      <span
        className={classes.issueTitle}
        >
        {issueTitle}
      </span>
    </div>
  </Fade>
)

Issue.propTypes = {
  issueTitle: PropTypes.string.isRequired,
  reporter: PropTypes.string.isRequired,
  notes: PropTypes.string.isRequired,
  acknowledged: PropTypes.bool.isRequired,
  resolved: PropTypes.bool.isRequired,
  issueExpanded: PropTypes.bool.isRequired
}

export default Issue
