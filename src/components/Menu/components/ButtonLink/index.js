import React from 'react';

import PropTypes from 'prop-types';

export default function ButtonLink({ className, href, children }) {
  return (
    <a className={className} href={href}>
      {children}
    </a>
  );
}

ButtonLink.defaultProps = {
  className: '',
  href: '/',
};

ButtonLink.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  children: PropTypes.node.isRequired,
};
