/************************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using AWS-UI components. For production code, follow the integration
guidelines:

https://polaris.corp.amazon.com/getting_started/development/integration/
************************************************************************/
import React from 'react';
import ServiceNavigation from './ServiceNavigation.jsx';
import FarOptNavigation from './FarOptNavigation';

const { AppLayout, Button, ColumnLayout, FormField, Icon, Select } = window['AWS-UI-Components-React'];

// Class ServiceHomepage is a skeleton of a service's homepage using AWS-UI React components.
export default class ServiceHomepage extends React.Component {
  render() {
    return (
      <AppLayout
        className="awsui-util-no-gutters"
        navigation={<FarOptNavigation />} // Navigation panel content imported from './ServiceNavigation.jsx'
        content={<Content />}
        contentType="default"
        navigationOpen={true}
        toolsHide={true}
      />
    );
  }
}

// The content in the main content area of the App layout
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
                
                <div>Create WorkFlow</div>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="awsui-util-m-xxl awsui-util-pv-l awsui-util-ph-l">
      <h1>Example</h1>
      <div className="awsui-util-container">
        <div>
          <br />
          <img src="./images/workflow.jpg" className="intro-screenshot" alt="screenshot" width="100%"/>
        </div>
      </div>
    </div>
  </div>
);
