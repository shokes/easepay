import styled from 'styled-components';
import classNames from 'classnames';

export const Navbg = styled.nav`
  background: #0b071a;
  margin-bottom: 150px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
`;

export const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 33px 0;
`;

export const LoginAndSignupStyles = styled.span`
  align-items: center;
  gap: 31.6px;
  font-size: 14px;
`;

export const NavItemsStyles = styled.span`
  align-items: center;
  gap: 63.33px;
`;

export const MenuButtonStyles = styled.button`
  margin: -10px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 6px;
  padding: 10px;
  color: white;
`;

export const dialogPanelClasses = classNames(
  `fixed inset-y-0 right-0 z-10  w-full overflow-y-auto bg-[#0b071a] px-6 py-6 sm:max-w-sm `
);
