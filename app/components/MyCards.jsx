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
      <br/><br/>
    <div class="card-deck">
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">1 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">2 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
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
        <div class="w-100 d-none d-sm-block d-md-none"></div>
         <div class="w-100 d-none d-lg-block d-xl-none"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x280" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">5 Card title</h4>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="w-100 d-none d-xl-block"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x300" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">6 Card title</h4>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="w-100 d-none d-md-block d-lg-none"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x270" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">7 Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x300" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">8 Card title</h4>
                <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="w-100 d-none d-sm-block d-md-none"></div>
        <div class="w-100 d-none d-lg-block d-xl-none"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x270" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
        <div class="w-100 d-none d-md-block d-lg-none"></div>
        <div class="card mb-4">
            <img class="card-img-top img-fluid" src="//placehold.it/500x270" alt="Card image cap"/>
            <div class="card-body">
                <h4 class="card-title">10 Card title</h4>
                <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
            </div>
        </div>
    </div>
</div>
  )
    
  