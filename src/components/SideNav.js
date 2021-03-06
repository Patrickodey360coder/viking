import React from 'react'
import { Link } from 'react-router-dom'

function SideNav() {
  return (
    <nav className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
      <div className="sb-sidenav-menu">
          <div className="nav">
              <div className="sb-sidenav-menu-heading">Core</div>
              <Link className="nav-link" to="/">
                  <div className="sb-nav-link-icon"><i className="fas fa-tachometer-alt"></i></div>
                  Dashboard
              </Link>
              <div className="sb-sidenav-menu-heading">Interface</div>
              {/* <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapseLayouts" aria-expanded="false" aria-controls="collapseLayouts">
                  <div className="sb-nav-link-icon"><i className="fas fa-columns"></i></div>
                  Layouts
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </Link> */}
              <div className="collapse" id="collapseLayouts" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav">
                      <Link className="nav-link" to="layout-static.html">Static Navigation</Link>
                      <Link className="nav-link" to="layout-sidenav-light.html">Light Sidenav</Link>
                  </nav>
              </div>
              <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#collapsePages" aria-expanded="false" aria-controls="collapsePages">
                  <div className="sb-nav-link-icon"><i className="fas fa-book-open"></i></div>
                  Pages
                  <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
              </Link>
              <div className="collapse" id="collapsePages" aria-labelledby="headingTwo" data-bs-parent="#sidenavAccordion">
                  <nav className="sb-sidenav-menu-nested nav accordion" id="sidenavAccordionPages">
                      <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseAuth" aria-expanded="false" aria-controls="pagesCollapseAuth">
                          Authentication
                          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                      </Link>
                      <div className="collapse" id="pagesCollapseAuth" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                        <Link className="nav-link" to="/login">Login</Link>
                        <Link className="nav-link" to="/register">Register</Link>
                        <Link className="nav-link" to="/password">Forgot Password</Link>
                        </nav>
                      </div>
                      <Link className="nav-link collapsed" to="#" data-bs-toggle="collapse" data-bs-target="#pagesCollapseError" aria-expanded="false" aria-controls="pagesCollapseError">
                          Error
                          <div className="sb-sidenav-collapse-arrow"><i className="fas fa-angle-down"></i></div>
                      </Link>
                      <div className="collapse" id="pagesCollapseError" aria-labelledby="headingOne" data-bs-parent="#sidenavAccordionPages">
                        <nav className="sb-sidenav-menu-nested nav">
                            <Link className="nav-link" to="/401">401 Page</Link>
                            <Link className="nav-link" to="/404">404 Page</Link>
                            <Link className="nav-link" to="/500">500 Page</Link>
                        </nav>
                      </div>
                  </nav>
              </div>
              <div className="sb-sidenav-menu-heading">Addons</div>
              <Link className="nav-link" to="/charts">
                <div className="sb-nav-link-icon"><i className="fas fa-chart-area"></i></div>
                Charts
              </Link>
              <Link className="nav-link" to="/tables">
                  <div className="sb-nav-link-icon"><i className="fas fa-table"></i></div>
                  Tables
              </Link>
              <Link className="nav-link" to="/calendar">
                  <div className="sb-nav-link-icon"><i className="fas fa-calendar"></i></div>
                  Calendar
              </Link>
              <Link className="nav-link" to="/forms">
                  <div className="sb-nav-link-icon"><i className="fas fa-edit"></i></div>
                  Forms
              </Link>
              <Link className="nav-link" to="/elements">
                  <div className="sb-nav-link-icon"><i className="fas fa-clipboard"></i></div>
                  UI Elements
              </Link>
              <Link className="nav-link" to="/mailbox">
                  <div className="sb-nav-link-icon"><i className="fas fa-envelope"></i></div>
                  Mail box
              </Link>
              <Link className="nav-link" to="/gallery">
                  <div className="sb-nav-link-icon"><i className="fas fa-image"></i></div>
                  Gallery
              </Link>
              <Link className="nav-link" to="/documentation">
                  <div className="sb-nav-link-icon"><i className="fas fa-file"></i></div>
                  Documentation
              </Link>
              <Link className="nav-link" to="/extras">
                  <div className="sb-nav-link-icon"><i className="fas fa-plus-square"></i></div>
                  Extras
              </Link>
              <Link className="nav-link" to="/widgets">
                  <div className="sb-nav-link-icon"><i className="fas fa-th"></i></div>
                  Widgets
              </Link>
              <Link className="nav-link" to="/pages">
                  <div className="sb-nav-link-icon"><i className="fas fa-book"></i></div>
                  Pages
              </Link>
          </div>
      </div>
      <div className="sb-sidenav-footer">
        <div className="small">Logged in as:</div>
        Patrick
      </div>
    </nav>
  )
}

export default SideNav
