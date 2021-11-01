import styled from 'styled-components';

export const PageBody = styled.div`
  overflow-y: auto;
  min-height: calc(100vh - 155px);
  padding-top: ${(props) => props.theme.padding.lg};
  padding-bottom: ${(props) => props.theme.padding.msm};
  margin: 0px !important;
`;
export const Header = styled.h4`
  color: ${(props) => props.theme.color.black};
  font-weight: ${(props) => props.theme.font.weight.bold};
  letter-spacing: ${(props) => props.theme.size.xsm};
  padding: ${(props) => props.theme.padding.md};
  text-align: center;
`;
export const PageHeader = styled(Header)`
  font-size: ${(props) => props.theme.font.size.lg};
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHeader = styled(Header)`
  color: ${(props) => props.theme.color.black};
  font-weight: ${(props) => props.theme.font.weight.bold};
  letter-spacing: ${(props) => props.theme.size.xsm};
  padding: ${(props) => props.theme.padding.md};
`;

export const ShadowContainer = styled(Container)`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

export const Button = styled.button`
  outline: none;
  border: none;
  border-radius: ${(props) => props.theme.size.xsm};
  background-color: transparent;
  cursor: pointer;
  &:hover {
    outline: 1px dotted ${(props) => props.theme.color.red};
  }
`;

export const LogoContainer = styled(Container)`
  color: ${(props) => props.theme.color.black};
  letter-spacing: ${(props) => props.theme.size.sm};
  font-weight: ${(props) => props.theme.font.weight.bold};
`;

export const ColoredLogo = styled(LogoContainer)`
  color: ${(props) => props.theme.color.red};
`;
