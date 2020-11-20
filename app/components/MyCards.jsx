import React from 'react';
import { Link } from 'react-router-dom';
import FarOptNavigation from './FarOptNavigation.jsx';

const { AppLayout, SideNavigation } = window['AWS-UI-Components-React'];

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
                <div>Numerical Optimization on AWS</div>
              </div>
              <p>
                Build optimization applications with agility &amp; self service capabilities in a cost efficient manner. Leverage pre-built example implentations and benefit from cloud economies of scale.  
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="awsui-util-m-xxl awsui-util-pv-l awsui-util-ph-l">
      <h1>Architecture</h1>
      <div className="awsui-util-container">
        <div>
          <br />
          <img src="./images/FarOpt.jpeg" className="intro-screenshot" alt="screenshot" width="100%"/>
        </div>
      </div>
      
      <h1>Optimization Reciepe Details</h1>
      <div className="awsui-util-container">
        <div className="awsui-util-container-header">
          <h2>Commerical and OSS Solvers</h2>
        </div>
        <div>
          <h4>
            Usage Details
          </h4>
        </div>
      </div>
    </div>
  </div>
      <br/><br/>
    <div class="card-deck">
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="https://i.stack.imgur.com/sr45u.jpg" alt="Card image cap"></img>
            <div class="card-body">
                <h4 class="card-title">Use case description</h4>
                <p class="card-text">The selected template and its use cases</p>
                <p class="card-text"><small class="text-muted">Last used 3 months ago</small></p>
            </div>
        </div>
        <div class="card mb-4">
            <br/>
            <img class="card-img-top img-fluid" src="https://stackify.com/wp-content/uploads/2017/02/img_58ac77216e4a7.png" alt="Card image cap"></img>
            <div class="card-body">
                <br/><br/>
                <h4 class="card-title">Logs</h4>
                <p class="card-text">View logs via cloudwatch</p>
                <p class="card-text"><small class="text-muted">Last used 3 months ago</small></p>
            </div>
        </div>
        
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">3 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="w-100 d-none d-md-block d-lg-none"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">4 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        
    </div>
</div>
  )
    
  