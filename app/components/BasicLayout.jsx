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
const {
  // import the components that you use in the file here
  AppLayout,
  BreadcrumbGroup
} = window['AWS-UI-Components-React'];

// Class Basic is a skeleton of the basic App layout using AWS-UI React components.
export default class Basic extends React.Component {
  render() {
    return (
      <AppLayout
        navigation={<FarOptNavigation />} // Navigation panel content imported from './ServiceNavigation.jsx'
        breadcrumbs={<Breadcrumbs />} // Breadcrumbs element defined below
        content={<Content />} // Main content on the page, defined below
        contentType="default" // Sets default app layout settings for widths
        tools={Tools} // Tools panel content defined below
      />
    );
  }
}

// Breadcrumb content
const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={[
      {
        text: 'AWS Optimize',
        href: '#/'
      },
      {
        text: 'Application Library',
        href: '#/basic'
      }
    ]}
  />
);

// Main content area (fill it in with components!)
const Content = () => <div> Add tiles here </div>;

// Help panel content
const Tools = (
  <div className="awsui-util-help-panel">
    <div className="awsui-util-help-panel-header">
      <h2>AWS Optimize</h2>
    </div>
    <ul className="awsui-list-unstyled">
      <li>
        <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">
          What is AWS Optimize?
        </a>
      </li>
      <li>
        <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html">
          Getting started
        </a>
      </li>
      <li>
        <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html">
          Working with commercial solvers
        </a>
      </li>
    </ul>
  </div>
);
