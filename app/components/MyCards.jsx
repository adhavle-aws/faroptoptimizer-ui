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
      <div>
           <div class="card">
                <img src="img_avatar.png" alt="Avatar" ></img>
                <div class="container">
                    <h4><b>John Doe</b></h4>
                    <p>Architect & Engineer</p>
                </div>
            </div>
      </div>
  )
    
  