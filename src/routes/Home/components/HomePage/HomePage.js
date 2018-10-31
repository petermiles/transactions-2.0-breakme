import React from 'react';
import ReportedIssues from '../ReportedIssues';
import classes from './HomePage.scss';

const issues = [
  {
    reporter: 'Yury',
    issueTitle: 'Page looks bad',
    acknowledged: false,
    resolved: false,
    notes: 'The page looks like it could use an improvement.'
  },
  {
    reporter: 'Vidya',
    issueTitle: 'Page looks like it could use improvements',
    acknowledged: false,
    resolved: false,
    notes: 'The page could use a better font.'
  },
  {
    reporter: 'Alex',
    issueTitle: "Filter's aren't working.",
    acknowledged: false,
    resolved: false,
    notes: "Filter doesn't apply when I click it."
  },
  {
    reporter: 'Connie',
    issueTitle: 'No "s" found',
    acknowledged: false,
    resolved: false,
    notes: "Image shows the wrong copy."
  },
  {
    reporter: 'Lizzie',
    issueTitle: 'You already know',
    acknowledged: false,
    resolved: false,
    notes: "Gee Whillickers, the cat ran out of the bag."
  },
]

export const Home = () => (
  <div className={classes.container}>
    <ReportedIssues
      issues={issues}
    />
  </div>
)

export default Home
