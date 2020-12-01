import React from 'react';
import { Link } from 'react-router-dom';
import FarOptNavigation from './FarOptNavigation.jsx';

const { AppLayout, ColumnLayout, SideNavigation } = window['AWS-UI-Components-React'];
export default class MyCards extends React.Component {
    render() {
      return (
        <div>
          <AppLayout
            className="awsui-util-no-gutters"
            navigation={<FarOptNavigation />}
            content={<Content />}
            navigationOpen={true}
          />
        </div>
      );
    }
  }

  const Content = () => (

    <div class="container">
        <div>
    <div className="awsui-grid awsui-util-p-s">
      <div className="custom-home__header custom-mlt-xxxl awsui-row">
        <div className="col-xxs-12 ">
          <div className="awsui-row">
            {/**
            <div className="custom-home__category awsui-util-mb-xl">
              <img src="./images/bob_ross.jpg" className="intro-logo" alt="bob ross picture" />
            </div>
            */}
          </div>
          <div className="awsui-row">
            <div className="custom-home__header-title">
              <div className="awsui-text-large">
                <div>
                  <strong>FarOpt</strong>
                </div>
                <div>Commerical Solvers on AWS</div>
              </div>
              <p>
                Run Commerical Solvers with agility &amp; self service capabilities in a cost efficient manner.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      <br/><br/>
    <div class="card-deck">
    <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="card mb-4">
          {/**
          <div style={{maxHeight: "165px" , overflow:"hidden"}}>
           <img class="card-img-top img-fluid" height="500px" width="280px" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR8Swd8YNIH00X92KZKFNwRBT29cJtE1a9Sxw&amp;usqp=CAU" alt="Card image cap"/>
          </div>
          <hr/>
          **/}
          <div class="card-body">
            <h4 class="card-title">CPLEX Optimizer</h4>
            <p class="card-text">High-performance mathematical solver for linear, mixed-integer and quadratic programming.</p>
            <table width="100%" style={{marginTop:"140px"}}>
              <tr>
                <td class="text-left">
                <p><b>Status</b></p>
                </td>
                <td class="text-right">
                <p><b>Enabled</b></p>
                </td>
              </tr>
              <tr>
                <td class="text-left">
                  <img src="images/check-mark.png" width="10%"></img> &nbsp; Online
                </td>
                <td class="text-right">
                <p >Active</p>
                </td>
              </tr>
            </table>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
      <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="card mb-4">
           {/**
        <div style={{minHeight: "160px", paddingTop:"15px"}}>
          <img class="card-img-top img-fluid" height="100px" width="280px" src="https://images.g2crowd.com/uploads/product/image/social_landscape/social_landscape_f0c504f53b83341ad10627bb75818539/gurobi-optimizer.png" alt="Card image cap"/>
          </div>
           
          <hr/>
          */}
          <div class="card-body">
            <h4 class="card-title">Gurobi</h4>
            <p class="card-text">Gurobi builds and supports the leading math programming solvers available for all major problem types.</p>
            <table width="100%" style={{marginTop:"120px"}}>
              <tr>
                <td class="text-left">
                <p><b>Status</b></p>
                </td>
                <td class="text-right">
                <p><b>Enabled</b></p>
                </td>
              </tr>
              <tr>
                <td class="text-left">
                  <img src="images/check-mark.png" width="10%"></img> &nbsp; Online
                </td>
                <td class="text-right">
                <p >Active</p>
                </td>
              </tr>
            </table>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="card mb-4">
          {/**
          <div style={{maxHeight: "180px" , overflow:"hidden"}}>
          <img class="card-img-top img-fluid" height="500px" width="280px" src="https://www.fico.com/sites/default/files/styles/lg/public/2020-09/abstract-grey_1.jpg?itok=-7EhD5OO" alt="Card image cap"/>
          </div>
          <hr/>
          **/}
          <div class="card-body">
            <h4 class="card-title">FICO® Xpress Solver</h4>
            <p class="card-text">FICO® Xpress Solver provides a comprehensive suite of high-performance nonlinear problem solvers that give businesses the power to solve more complex general nonlinear problems quickly and accurately.</p>
            <table width="100%" style={{marginTop:"60px"}}>
              <tr>
                <td class="text-left">
                <p><b>Status</b></p>
                </td>
                <td class="text-right">
                <p><b>Enabled</b></p>
                </td>
              </tr>
              <tr>
                <td class="text-left">
                  <img src="images/check-mark.png" width="10%"></img> &nbsp; Online
                </td>
                <td class="text-right">
                <p >Active</p>
                </td>
              </tr>
            </table>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="card mb-4">
          {/**
          <div style={{minHeight: "160px"}}>
          <img class="card-img-top img-fluid" style={{paddingTop:"50px"}} height="500px" width="280px" src="https://farao-community.github.io/assets/img/logos/DuoN35ZXgAAKzC_.jpg" alt="Card image cap"/>
          </div>
          <hr/>
          **/}
          <div class="card-body">
            <h4 class="card-title">OR-Tools</h4>
            <p class="card-text">OR-Tools is an open source software suite for optimization, tuned for tackling the world's toughest problems in vehicle routing, flows, integer and linear programming, and constraint programming.</p>
            <table width="100%" style={{marginTop:"60px"}}>
              <tr>
                <td class="text-left">
                <p><b>Status</b></p>
                </td>
                <td class="text-right">
                <p><b>Enabled</b></p>
                </td>
              </tr>
              <tr>
                <td class="text-left">
                  <img src="images/check-mark.png" width="10%"></img> &nbsp; Online
                </td>
                <td class="text-right">
                <p >Active</p>
                </td>
              </tr>
            </table>
            <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
          </div>
        </div>
    </div>
</div>
  )
    
  