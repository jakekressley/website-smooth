import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle,
    FooterLink,
    SocialMedia,
    SocialMediaWrap,
    SocialLogo,
    WebsiteRights,
    SocialIcons,
    SocialIconLink
} from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        window.scrollTo(0, 0)
    };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
            <FooterLinksWrapper>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                </FooterLinkItems>
                <FooterLinkItems>
                    <FooterLinkTitle>About Us</FooterLinkTitle>
                        <FooterLink to="/signin">How it works</FooterLink>
                        <FooterLink to="/signin">testimonials</FooterLink>
                        <FooterLink to="/signin">Careers</FooterLink>
                        <FooterLink to="/signin">Investors</FooterLink>
                        <FooterLink to="/signin">Terms of service</FooterLink>
                </FooterLinkItems>
            </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/' onClick={toggleHome}>
                    JK
                </SocialLogo>
                <WebsiteRights>
                    jake kressley @ 2020 {new Date().getFullYear()} All rights reserved
                </WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href='/' target="_blank"
                    aria-label="Facebook">
                        <FaFacebook />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank"
                    aria-label="Instagram">
                        <FaInstagram />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank"
                    aria-label="Youtube">
                        <FaYoutube />
                    </SocialIconLink>
                    <SocialIconLink href='/' target="_blank"
                    aria-label="Twitter">
                        <FaTwitter />
                    </SocialIconLink>
                    <SocialIconLink href='s//www.linkedin.com/in/jakekressley/' target="_blank"
                    aria-label="Linkedink">
                        <FaLinkedin />
                    </SocialIconLink>
                </SocialIcons>
            </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
