/************************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using AWS-UI components. For production code, follow the integration
guidelines:

https://polaris.corp.amazon.com/getting_started/development/integration/
************************************************************************/
import React from 'react';
import ServiceNavigation from './FarOptNavigation.jsx';
const { AppLayout, Button, ColumnLayout, FormField, Icon, Select } = window['AWS-UI-Components-React'];

// Class ServiceHomepage is a skeleton of a service's homepage using AWS-UI React components.
export default class ServiceHomepage extends React.Component {
  render() {
    return (
      <AppLayout
        className="awsui-util-no-gutters"
        navigation={<ServiceNavigation />} // Navigation panel content imported from './ServiceNavigation.jsx'
        content={<Content />}
        contentType="default"
        navigationOpen={false}
        toolsHide={true}
      />
    );
  }
}

// The content in the main content area of the App layout
const Content = () => (
  <div className="awsui-grid awsui-util-p-s">
    <div className="custom-home__header custom-awsui-util-pt-xxxl awsui-row">
      <div className="col-xxs-12">
        <div className="awsui-row">
          <div className="custom-home__category col-xxs-10 offset-xxs-1 col-l-8 offset-l-2">
            Numerical Optimization on AWS
          </div>
        </div>
        <div className="awsui-row">
          <div className="custom-home__header-title col-xxs-10 offset-xxs-1 col-s-6 col-l-5 offset-l-2 col-xl-6">
            <div className="awsui-text-large">
              <div>
                <strong>Amazon FarOpt</strong>
              </div>
              <div>fast and reliable numerical optimization on AWS</div>
            </div>
            <p>
              Build optimization applications with agility & self service capabilities in a cost efficient manner. Leverage pre-built example implementations and benefit from cloud economies of scale.
            </p>
          </div>

          <div className="col-xxs-10 offset-xxs-1 col-s-4 offset-s-0 col-l-3 col-xl-2">
            <div className="awsui-util-container awsui-util-mb-n">
              <h2>Create an Optimization script</h2>
              <FormField stretch={true} label="Delivery method" className="awsui-util-d-b">
                <Select
                  options={[{ id: '1', label: 'Use a FarOpt Blueprint' },{ id: '2', label: 'Use OR Tools' },{ id: '3', label: 'Use Pyomo' },{ id: '4', label: 'Use Gurobi' },{ id: '5', label: 'Use CPLex' }]}
                  selectedOption={{ id: '1', label: 'Use a FarOpt Blueprint' }}
                  className="awsui-util-mb-xl"
                />
                <Button href="#/create" variant="primary" text="Create Script" />
              </FormField>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="awsui-util-pt-xxl awsui-row">
      <div className="col-xxs-10 offset-xxs-1 col-s-6 col-l-5 offset-l-2 col-xl-6">
        <h1>How it works</h1>
        <div className="awsui-util-container">
          <div className="custom-home-image__placeholder" />
        </div>

        <h1>Benefits and features</h1>
        <div className="awsui-util-container awsui-util-no-gutters">
          <div>
            <ColumnLayout columns={2} borders="vertical" className="awsui-util-no-gutters">
              <div data-awsui-column-layout-root={true} className="awsui-util-mv-l">
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>FarOpt console</h3>
                  <p>
                    Create, monitor, and manage your content delivery with a few simple clicks on the FarOpt
                    console.
                  </p>
                </div>
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>Static and dynamic content</h3>
                  <p>Deliver both static content and dynamic content that you can personalize for individual users.</p>
                </div>
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>Reporting and analytics</h3>
                  <p>
                    Get detailed cache statistics reports, monitor your FarOpt usage in near real-time, track your
                    most popular objects, and set alarms on operational metrics.
                  </p>
                </div>
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>Tools and libraries</h3>
                  <p>
                    Take advantage of a variety of tools and libraries for managing your FarOpt distribution, like
                    the FarOpt API, the AWS Command Line Interface (AWS CLI), and the AWS SDKs.
                  </p>
                </div>
              </div>
            </ColumnLayout>
          </div>
        </div>

        <h1>Use cases</h1>
        <div className="awsui-util-container awsui-util-no-gutters">
          <div>
            <ColumnLayout columns={2} borders="vertical" className="awsui-util-no-gutters">
              <div data-awsui-column-layout-root={true} className="awsui-util-mv-l">
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>Configure multiple origins</h3>
                  <p>
                    Configure multiple origin servers and multiple cache behaviors based on URL path patterns on your
                    website. Use AWS origins such as Amazon S3 or Elastic Load Balancing, and add your own custom
                    origins to the mix.
                  </p>
                  <a href="javascript:void(0)">
                    Learn more <Icon name="external" />
                  </a>
                </div>
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>Deliver streaming video</h3>
                  <p>
                    Use FarOpt to deliver on-demand video without the need to set up or operate any media servers.
                    FarOpt supports multiple protocols for media streaming.
                  </p>
                  <a href="javascript:void(0)">
                    Learn more <Icon name="external" />
                  </a>
                </div>
              </div>
            </ColumnLayout>
          </div>
        </div>

        <div className="awsui-util-container awsui-util-no-gutters">
          <div className="awsui-util-container-header">
            <h2>Related services</h2>
          </div>
          <div>
            <ColumnLayout columns={2} borders="vertical" className="awsui-util-no-gutters">
              <div data-awsui-column-layout-root={true} className="awsui-util-mv-l">
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>
                    <a>Amazon S3</a>
                  </h3>
                  <p>Use Amazon S3 to store the content that FarOpt delivers.</p>
                </div>
                <div className="awsui-util-ph-l awsui-util-mb-m">
                  <h3>
                    <a>Amazon Route 53</a>
                  </h3>
                  <p>Use Amazon Route 53 to route DNS queries for your domain name to your FarOpt distribution.</p>
                </div>
              </div>
            </ColumnLayout>
          </div>
        </div>
      </div>

      <div className="custom-home__sidebar col-xxs-10 offset-xxs-1 col-s-4 offset-s-0 col-l-3 col-xl-2">
        <div className="awsui-util-container">
          <div className="awsui-util-container-header">
            <h2>Pricing (US)</h2>
            <p> Pricing is based on requested vCPU and memory resources for the Optimization Task </p>
          </div>

          <ColumnLayout borders="horizontal">
            <div data-awsui-column-layout-root="true">
              <div>
                <span>per vCPU per hour</span>
                <span className="awsui-text-secondary awsui-util-f-r">$0.0xxxxx</span>
              </div>
              <div>
                <span>per GB per hour</span>
                <span className="awsui-text-secondary awsui-util-f-r">$0.00xxxxx</span>
              </div>
              <a href="javascript:void(0)">
                Cost calculator <Icon name="external" />
              </a>
            </div>
          </ColumnLayout>
        </div>

        <div className="awsui-util-mt-xxl">
          <div className="awsui-util-container">
            <div className="awsui-util-container-header">
              <h2>Getting started</h2>
            </div>
            <ColumnLayout borders="horizontal">
              <div data-awsui-column-layout-root="true">
                <div>
                  <a href="http://docs.aws.amazon.com/AmazonFarOpt/latest/DeveloperGuide/Introduction.html">
                    What is Amazon FarOpt?
                  </a>
                </div>
                <div>
                  <a href="http://docs.aws.amazon.com/AmazonFarOpt/latest/DeveloperGuide/GettingStarted.html">
                    Getting started with FarOpt
                  </a>
                </div>
                <div>
                  <a href="http://docs.aws.amazon.com/AmazonFarOpt/latest/DeveloperGuide/distribution-working-with.html">
                    Working with FarOpt distributions
                  </a>
                </div>
              </div>
            </ColumnLayout>
          </div>
        </div>

        <div className="awsui-util-mt-xxl">
          <div className="awsui-util-container">
            <div className="awsui-util-container-header">
              <h2>More resources</h2>
            </div>
            <ColumnLayout borders="horizontal">
              <div data-awsui-column-layout-root="true">
                <div>
                  <a href="https://aws.amazon.com/documentation/FarOpt/">Documentation</a>
                </div>
                <div>
                  <a href="javascript:void(0)">FAQ</a>
                </div>
                <div>
                  <a href="javascript:void(0)">FarOpt forum</a>
                </div>
                <div>
                  <a href="javascript:void(0)">Contact us</a>
                </div>
              </div>
            </ColumnLayout>
          </div>
        </div>
      </div>
    </div>
  </div>
);