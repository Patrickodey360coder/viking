import React from 'react';
import { Link } from 'react-router-dom';

function Error500() {
  return (
    <div id="layoutError">
      <div id="layoutError_content">
        <main>
          <div class="container">
            <div class="row justify-content-center">
              <div class="col-lg-6">
                <div class="text-center mt-4">
                  <h1 class="display-1">500</h1>
                  <p class="lead">Internal Server Error</p>
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
    </div>
  )
}

export default Error500
