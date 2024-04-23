import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="">
                        DijkstraFin
                    </Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link" to="/finlogs">
                                    Nhật ký chi tiêu
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/posts">
                                    Bài đăng
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/postsRTK">
                                    Bài đăng với RTK Query
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>

    )
}