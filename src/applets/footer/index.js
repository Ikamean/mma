import React from 'react';
import styled from 'styled-components';
import { Container, ContainerHeader } from 'components/styled/';

import GMMA from 'media/gmma.jpg';

import { useTranslation } from 'react-i18next';

const Footer = () => {
  const { t } = useTranslation();

  return (
    <FooterContainer>
      <FirstSection>
        <Container>
          <GmmaLogo src={GMMA} alt="logo svg" />
        </Container>

        <FooterDetailsContainer>
          {/* <FooterItemsContainer>
            <FooterItemsHeader>GMMA</FooterItemsHeader>
            <FooterItemWrapper>
              <SocialButton
                href="https://www.facebook.com/gmmageorgia"
                target="blank"
              >
                Athletes
              </SocialButton>
            </FooterItemWrapper>
            <FooterItemWrapper>
              <SocialButton>Events</SocialButton>
            </FooterItemWrapper>
            <FooterItemWrapper>
              <SocialButton>About</SocialButton>
            </FooterItemWrapper>

            <FooterItemWrapper>
              <SocialButton>News</SocialButton>
            </FooterItemWrapper>
            <FooterItemWrapper>
              <SocialButton>Gallery</SocialButton>
            </FooterItemWrapper>
          </FooterItemsContainer> */}

          <FooterItemsContainer>
            <FooterItemsHeader>SOCIAL MEDIA</FooterItemsHeader>
            <FooterItemListcontainer>
              <FooterItemWrapper>
                <SocialButton
                  href="https://www.facebook.com/gmmageorgia"
                  target="blank"
                >
                  Facebook
                </SocialButton>
              </FooterItemWrapper>
              <FooterItemWrapper>
                <SocialButton
                  href="https://www.instagram.com/gmma_promotion/"
                  target="blank"
                >
                  Instagram
                </SocialButton>
              </FooterItemWrapper>
              <FooterItemWrapper>
                <SocialButton>Youtube</SocialButton>
              </FooterItemWrapper>
              <FooterItemWrapper>
                <SocialButton>Live</SocialButton>
              </FooterItemWrapper>
            </FooterItemListcontainer>
          </FooterItemsContainer>
          {/* <FooterItemsContainer>
            <FooterItemsHeader>HELP</FooterItemsHeader>
            <FooterItemWrapper>
              <SocialButton>FAQ</SocialButton>
            </FooterItemWrapper>
            <FooterItemWrapper>
              <SocialButton>Contact</SocialButton>
            </FooterItemWrapper>
            <FooterItemWrapper>
              <SocialButton>Live</SocialButton>
            </FooterItemWrapper>

            <FooterItemWrapper>
              <SocialButton>Shop</SocialButton>
            </FooterItemWrapper>
          </FooterItemsContainer> */}
        </FooterDetailsContainer>
      </FirstSection>

      <AllRights>{t('footer.allRights')}</AllRights>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled(Container)`
  color: ${(props) => props.theme.color.white};

  padding: ${(props) => props.theme.padding.md};
  background-color: ${(props) => props.theme.color.black};

  position: static;
  bottom: 0;
  left: 0;
  right: 0;
  flex-direction: column;
  gap: ${(props) => props.theme.size.md};
  /* border-top: 1px solid ${(props) => props.theme.color.grey}; */
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.msm};
  }

  @media (max-width: 450px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const FirstSection = styled(Container)`
  width: 100%;
  justify-content: space-around;
  align-items: center;
`;

const FooterDetailsContainer = styled(Container)`
  align-items: end;
  /* border: 1px solid red; */
  padding-top: 3rem;
  gap: ${(props) => props.theme.size.lg};
  /* padding-right: ${(props) => props.theme.padding.lg}; */

  @media (max-width: 450px) {
    gap: ${(props) => props.theme.size.sm};
  }
`;
const GmmaLogo = styled.img`
  width: auto;
  height: ${(props) => props.theme.size.xxxxlg};
  object-fit: cover;
  /* padding-left: ${(props) => props.theme.padding.xxlg}; */

  @media (max-width: 950px) {
    height: ${(props) => props.theme.size.xxlg};
    /* padding-left: ${(props) => props.theme.padding.lg}; */
  }

  @media (max-width: 450px) {
    height: ${(props) => props.theme.size.xxlg};
  }
`;

const AllRights = styled(Container)`
  color: ${(props) => props.theme.color.grey};
  font-weight: ${(props) => props.theme.font.weight.bold};
  justify-content: center;
  padding: ${(props) => props.theme.padding.md};
  padding-bottom: 0;
  font-size: ${(props) => props.theme.font.size.msm};
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const FooterItemsContainer = styled(Container)`
  gap: ${(props) => props.theme.size.msm};
  flex-direction: column;
  align-items: left;
`;

const FooterItemsHeader = styled(ContainerHeader)`
  color: ${(props) => props.theme.color.white};
  letter-spacing: 3px;

  min-width: 10ch;
  font-size: ${(props) => props.theme.font.size.msm};
  padding: 0;

  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }
`;

const FooterItemListcontainer = styled(Container)`
  flex-direction: column;
  gap: ${(props) => props.theme.size.sm};
  align-items: center;

  /* border: 1px solid red; */
  width: 100%;
`;

const FooterItemWrapper = styled(Container)`
  width: 50%;
  align-items: center;
  justify-content: flex-start;
  /* border: 1px solid red; */
`;
const SocialButton = styled.a`
  color: ${(props) => props.theme.color.white};
  cursor: pointer;

  font-size: ${(props) => props.theme.font.size.msm};
  @media (max-width: 950px) {
    font-size: ${(props) => props.theme.font.size.sm};
  }

  &:hover {
    outline: none;
    color: ${(props) => props.theme.color.grey};
    text-decoration: underline;
  }
`;
