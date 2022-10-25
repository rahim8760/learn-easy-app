import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
                    
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <Link to={'/home'} className="btn btn-ghost normal-case text-xl">Learn Easy</Link>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal p-0">
                    <li><Link to={'/home'}>Home</Link></li>
                    <li><Link to={'/courses'}>Courses</Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li><Link to={'/aboutUs'}>About Us</Link></li>
                    <li><Link to={'/contact'}>Contact Us</Link></li>
                    <li><Link to={'/apply'}>Apply Now</Link></li>

                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://placeimg.com/80/80/people" />
                        </div>
                    </label>
                </ul>
            </div>
        </div>
    );
};

export default Header;