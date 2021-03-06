import React from 'react';
import PropTypes from 'prop-types';
import ErrorPage from './ErrorPage';

/**
 * Renders a `Not found` Error Page with a message and 404 status code
 */
const PageNotFound = ({
  icon, message, children, ...props
}) => (
  <ErrorPage {...props} status={404} icon={icon} message={message}>
    {children}
  </ErrorPage>
);

PageNotFound.propTypes = {
  /**
   * Font awesome icon
   */
  icon: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
  /**
   * Error message to be shown in the page. It can be a String,
   * React Component or an node
   */
  message: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),

  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.string,
    PropTypes.node,
  ]),
};

PageNotFound.defaultProps = {
  icon: ['far', 'frown'],
  message: 'The page you requested was not found.',
  children: null,
};

export default PageNotFound;
