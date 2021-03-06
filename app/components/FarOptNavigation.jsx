import React from 'react';
import { withRouter } from 'react-router-dom';
const { SideNavigation } = window['AWS-UI-Components-React'];

// Class ServiceNavigation is the Side Navigation component that is used in BasicLayout, CreateForm, ServiceHomepage, and Table flows.
// Implement like this: <ServiceNavigation />
class ServiceNavigation extends React.Component {
  // If the provided link is empty, do not redirect pages
  onFollowHandler(ev) {
    ev.preventDefault();
    if (ev.detail.href) {
      this.props.history.push(ev.detail.href.substring(1));
    }
  }


  render() {
    return (
      <SideNavigation
        header={{ text: 'AWS Optimize', href: '#/home' }}
        items={[
          {
            type: 'section',
            text: 'Components',
            expanded: true,
            items: [
          { type: 'link', text: 'What is AWS Optimize', href: '#/home' },
          { type: 'link', text: 'Solvers', href: '#/cards' },
          { type: 'link', text: 'Optimizer Library', href: '#/table' },
          { type: 'link', text: 'Create Application', href: '#/create' },
          { type: 'link', text: 'Job Run History', href: '#/runs/id=' },
          { type: 'link', text: 'Optimize Solutions Lab', href: '#/farOptSol' },
          
          { type: 'link', text: 'Logout', href: '#/' }
        ]
      }
    ]}
    activeHref="#"
  />
    );
  }
}

const items = [
  {
    type: 'section',
    text: 'Reports and analytics',
    items: [
      { type: 'link', text: 'Distributions', href: '#/table' },
      { type: 'link', text: 'Cache statistics', href: '#/basic' },
      { type: 'link', text: 'Monitoring and alarms', href: '' },
      { type: 'link', text: 'Popular objects', href: '' },
      { type: 'link', text: 'Top referrers', href: '' },
      { type: 'link', text: 'Usage', href: '' },
      { type: 'link', text: 'Viewers', href: '' }
    ]
  },
  {
    type: 'section',
    text: 'Private content',
    items: [
      { type: 'link', text: 'How-to guide', href: '' },
      { type: 'link', text: 'Origin access identity', href: '' }
    ]
  }
];

export default withRouter(ServiceNavigation);
