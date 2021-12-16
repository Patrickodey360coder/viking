import React from 'react'
import { Link } from 'react-router-dom'

function Error401() {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="text-center mt-4">
                  <h1 class="display-1">401</h1>
                  <p class="lead">Unauthorized</p>
                  <p>Access to this resource is denied.</p>
                  <Link to="/">
                    <i class="fas fa-arrow-left me-1"></i>
                      Return to Dashboard
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
      <div id="layoutError_footer">
        {/* <footer class="py-4 bg-light mt-auto">
          <div class="container-fluid px-4">
            <div class="d-flex align-items-center justify-content-between small">
              <div class="text-muted">Copyright &copy; Your Website 2021</div>
              <div>
                <Link to="#">Privacy Policy</Link>
                &middot;
                <Link to="#">Terms &amp; Conditions</Link>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  )
}

export default Error401
