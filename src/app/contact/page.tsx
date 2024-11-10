"use client"
import React from 'react'

const Contact = () => {
  return (
    <div>
           <div className="contact-form" id="contact">
        <h1>
            Contact me htmlFor work/general Enquiries
        </h1>
        <form>
            <div className="mb-3">
                <label htmlFor="clientname" className="form-label">Name</label>
                <input type="name" id="clientname" className="form-control"/>
              </div>
              <div className="mb-3">
                <label htmlFor="clientemail" className="form-label">Email Address</label>
                <input type="email" id="clientemail" className="form-control" placeholder="EmailHelp"/>
                <div id="emailhelp" className="font-text">we will never share your email & phone with anyone else.</div>
              </div>
              <div className="mb-3">
                <label htmlFor="clientphone" className="form-label">Phone No</label>
                <input type="phone" id="clientphone" className="form-control"/>
              </div>
              <div className="mb-3">
                <label htmlFor="Enquiry" className="form-label">Enquiry</label>
                <input type="text" id="Enquiry" className="form-control"/>
              </div>
              <div className="mb-3 form-check" id="form-check">
                
                  <input className="form-check-input" type="checkbox" id="isclient" />
                  <label className="form-check-label" htmlFor="isclient">
                    I want you to work on a project with me.
                  </label>
                </div>
                <div className="btn-sm">
              <button type="submit">Submit</button>
            </div>
          </form>
      </div>
    </div>
    )
    }

export default Contact