import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    NavBar as NavBarContainer,
    NavLeft,
    NavRight,
    Logo,
    NavTitle,
    ProfilePicture,
    DropdownMenu,
    DropdownItem,
} from './admin/AdminDashboardStyles';
import parkingImage from '../asset/parking.png';
import profilePic from '../asset/profile.jpg';

const NavBar = ({ logout }) => {
    const [showDropdown, setShowDropdown] = useState(false);
    const navigate = useNavigate();

    const toggleDropdown = () => {
        setShowDropdown((prevState) => !prevState);
    };

    const handleHomeClick = () => {
        navigate('/');
    };

    return (
        <NavBarContainer>
            <NavLeft>
            <NavTitle 
                    onClick={handleHomeClick} 
                    style={{ cursor: 'pointer' }}>
                    SmartParking
                </NavTitle>
                <Logo
                    src={parkingImage}
                    alt="SmartParking Logo"
                    onClick={handleHomeClick}
                    style={{ cursor: 'pointer' }}
                />
            </NavLeft>
            <NavRight>
                <ProfilePicture src={profilePic} alt="Profile" onClick={toggleDropdown} />
                <DropdownMenu show={showDropdown}>
                    <DropdownItem onClick={logout}>Cerrar sesión</DropdownItem>
                </DropdownMenu>
            </NavRight>
        </NavBarContainer>
    );
};

export default NavBar;
