import React from 'react'
import { Link } from 'react-router-dom'

function Password() {
  return (
    <div className=''>
      <div id="layoutAuthentication">
        <div id="layoutAuthentication_content">
            <main>
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-lg-5">
                            <div class="card shadow-lg border-0 rounded-lg mt-5">
                                <div class="card-header"><h3 class="text-center font-weight-light my-4">Password Recovery</h3></div>
                                <div class="card-body">
                                    <div class="small mb-3 text-muted">Enter your email address and we will send you a link to reset your password.</div>
                                    <form>
                                        <div class="form-floating mb-3">
                                            <input class="form-control" id="inputEmail" type="email" placeholder="name@example.com" />
                                            <label for="inputEmail">Email address</label>
                                        </div>
                                        <div class="d-flex align-items-center justify-content-between mt-4 mb-0">
                                            <Link class="small" to="login.html">Return to login</Link>
                                            <Link class="btn btn-primary" to="/password">Reset Password</Link>
                                        </div>
                                    </form>
                                </div>
                                <div class="card-footer text-center py-3">
                                    <div class="small"><Link to="/register">Need an account? Sign up!</Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
      </div>
    </div>
  )
}

export default Password
