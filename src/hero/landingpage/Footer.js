import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default function Footer() {
 
  return (
    <MDBFooter color="unique-color-dark" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">Chancellor College</h5>
            <p>
            Online Notice board is a web application which is engaged in providing 
            up-to-date articles & notices and other information for all users or students 
            associated with the particular campus or department. 
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">Categories</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Notices</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Events</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Announcements</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Advertisments</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Group 9 @UNIMA
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
