import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FiUser, FiZap, FiSettings, FiBox, FiNavigation, FiBarChart2 } from 'react-icons/fi';

export default function Sidebar() {
    const menuItems = [
        { name: 'Contacts', path: '/contacts', icon: <FiUser /> },
        { name: 'Deals', path: '/deals', icon: <FiZap /> },
        { name: 'Products', path: '/products', icon: <FiBox /> },
        { name: 'Marketing', path: '/marketing', icon: <FiNavigation /> },
        { name: 'Reports', path: '/reports', icon: <FiBarChart2 /> },
        { name: 'Settings', path: '/settings', icon: <FiSettings /> },
    ];

    return (
        <div className="container">
            <aside className="sidebar">

                <nav>
                    {menuItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) =>
                                `link ${isActive ? 'active' : ''}`
                            }
                        >
                            <span className="icon">{item.icon}</span>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>
            </aside>

            <main className="main">
                <Outlet />
            </main>
        </div>
    );
}