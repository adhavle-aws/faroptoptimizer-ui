/************************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using AWS-UI components. For production code, follow the integration
guidelines:

https://polaris.corp.amazon.com/getting_started/development/integration/
************************************************************************/

import React from 'react';
import { Link } from 'react-router-dom';
import FarOptNavigation from './FarOptNavigation.jsx';
const { AppLayout, SideNavigation } = window['AWS-UI-Components-React'];

// This is not meant to be a template, rather it is the
// introduction page that you see upon loading the webserver.
export default class BobRossIntro extends React.Component {
  render() {
    return (
      <div>
        <AppLayout
          className="awsui-util-no-gutters"
          navigation={<FarOptNavigation />}
          content={<Content />}
          navigationOpen={true}
          tools={<Tools />}
          toolsHide={true}
        />
      </div>
    );
  }
}

const Content = () => (
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
                Build optimization stacks with agility &amp; self service capabilities in a cost efficient manner. Leverage pre built example implentations and benefit from cloud economies of scale.  
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
          <img src="./images/FarOpt.jpeg" className="intro-screenshot" alt="screenshot" />
        </div>
      </div>

      <h1>Benefits and features</h1>
      <div className="awsui-util-container">
        <div className="awsui-util-container-header">
          <h2>Commerical and OSS Solvers</h2>
        </div>
        <div>
          <h4>
            Add Details of PR-FAQ here
          </h4>
        </div>
      </div>
    </div>
  </div>
);

const CustomNavigation = () => (
  <SideNavigation
    header={{ text: 'Fargate Optimizer', href: '#/' }}
    items={[
      { 
        type: 'section',
        text: 'Components',
        expanded: true,
        items: [
          { type: 'link', text: 'What is FarOpt', href: '#/' },
          { type: 'link', text: 'Optimizer Library', href: '#/basic' },
          { type: 'link', text: 'Create Script', href: '#/service-home' },
          { type: 'link', text: 'Define Workflow', href: '#/create' },
          { type: 'link', text: 'Table view', href: '#/table' }
        ]
      }
    ]}
    activeHref="#/"
  />
);

const Tools = () => (
  <div className="awsui-util-help-panel">
    <div className="awsui-util-help-panel-header">
      <h2>Help panel</h2>
    </div>
    <p>Help content goes here</p>
  </div>
);
