import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { AuthContext, AuthProvider } from './shared/AuthContext';
import Login from './components/login/login';
import AdminDashboard from './components/admin/AdminDashboard';
import UserDashboard from './components/user/UserDashboard';
import ViewParking from './components/views/ViewParking';
import AddParking from './components/views/AddParking';
import OccupationHistory from './components/views/OccupationHistory';
import NavBar from './components/NavBar';

function App() {
    const { userRole, login, logout } = useContext(AuthContext);

    return (
        <Router>
            <div className="App">
                {!userRole ? (
                    <Login onLogin={login} />
                ) : (
                    <>
                        <NavBar logout={logout} /> {/* Navbar siempre visible */}
                        <Routes>
                            {userRole === 'admin' && (
                                <>
                                    <Route path="/" element={<AdminDashboard />} />
                                    <Route path="/view-parking" element={<ViewParking />} />
                                    <Route path="/add-parking" element={<AddParking />} />
                                    <Route path="/occupation-history" element={<OccupationHistory />} />
                                    <Route path="*" element={<Navigate to="/" />} />
                                </>
                            )}
                            {userRole === 'user' && (
                                <>
                                    <Route path="/" element={<UserDashboard />} />
                                    <Route path="*" element={<Navigate to="/" />} />
                                </>
                            )}
                        </Routes>
                    </>
                )}
            </div>
        </Router>
    );
}

const Root = () => (
    <AuthProvider>
        <App />
    </AuthProvider>
);

export default Root;
