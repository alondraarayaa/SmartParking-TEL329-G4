// DashboardStyles.js
import styled from 'styled-components';
import parkingImage from '../../asset/parking.png';

// Estilos del NavBar
export const NavBar = styled.nav`
  width: 100%;
  background-color: #83a3fb;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const NavLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 40px;
  height: 40px;
  margin-right: 10px;
`;

export const NavTitle = styled.h1`
  color: white;
  font-size: 24px;
  margin: 0;
`;

export const NavRight = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const ProfilePicture = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
`;

export const DropdownMenu = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  display: ${(props) => (props.show ? 'block' : 'none')};
  z-index: 10;
`;

export const DropdownItem = styled.button`
  padding: 10px 20px;
  background: none;
  border: none;
  text-align: left;
  width: 100%;
  cursor: pointer;
  &:hover {
    background-color: #f2f2f2;
  }
`;

export const GlobalContainer = styled.div`
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 100vh;
  flex: 1;
`;

export const ContentContainer = styled.div`
  margin-top: 20px;
  width: 80%;
  background-color: white;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

export const Title = styled.h1`
  font-size: 32px;
  color: #e7b419;
  text-align: center;
`;

export const SubTitle = styled.h2`
  font-size: 24px;
  color: #333;
  text-align: center;
`;

export const Section = styled.div`
  display: flex;
  justify-content: space-around;
  margin-top: 20px;
`;

export const ActionButton = styled.button`
  background-color: #83a3fb;
  color: white;
  padding: 10px 20px;
  border-radius: 34px;
  font-size: 16px;
  border: none;
  &:hover {
    opacity: 0.9;
  }
`;
export const StatusBadge = styled.span`
  display: inline-block;
  padding: 5px 10px;
  border-radius: 20px;
  background-color: #e7b419; 
  color: white;
  font-weight: bold;
  text-align: center;
`;
