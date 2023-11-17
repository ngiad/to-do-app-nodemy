import React, { useEffect } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
import "../styles/layout.css"

const Layout = ({children}) => {
  return (
    <div>
        <nav className='header'>
          <div className='left'>
            <Link to="/">Logo</Link>
          </div>
          <div className='right'>
            <ul>
              <li><Link to={"/login"}>Đăng nhập</Link></li>
              <li><Link to={"/register"}>Đăng kí</Link></li>
            </ul>
          </div>
        </nav>
        <div style={{padding: "40px 0"}}>
            <Outlet />
        </div>
        <div className='footer'>
            <p>@by : Tran Dai Nghia</p>
        </div>
    </div>
  )
}

export default Layout