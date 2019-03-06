import React from 'react'
import PropTypes from 'prop-types'
import styled, { css } from 'styled-components'
import { FOCUS_WIDTH } from '@govuk-react/constants'
import { FOOTER_LINK, FOOTER_LINK_HOVER, TEXT_COLOUR, FOCUS_COLOUR } from 'govuk-colours'

export const footerLinkStyle = css`
  text-decoration: underline;
  cursor: pointer;

  &:link,
  &:visited {
    color: ${FOOTER_LINK};
  }

  &:hover,
  &:active {
    color: ${FOOTER_LINK_HOVER};
  }

  &:focus {
    color: ${TEXT_COLOUR};
    background-color: ${FOCUS_COLOUR};
    outline: ${FOCUS_WIDTH} solid ${FOCUS_COLOUR};
  }

  &:link:focus {
    ${TEXT_COLOUR};
  }
`

const LinkContainer = styled.span`
  a {
    ${footerLinkStyle};
  }
`

const FooterLink = ({ href, to, children, linkType: LinkType, ...props }) => (
  <LinkContainer>
    <LinkType href={href} to={to} {...props}>
      {children}
    </LinkType>
  </LinkContainer>
)

FooterLink.propTypes = {
  children: PropTypes.string.isRequired,
  href: PropTypes.string,
  to: PropTypes.string,
  linkType: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}

FooterLink.defaultProps = {
  href: undefined,
  to: undefined,
  linkType: 'a',
}

export default FooterLink
