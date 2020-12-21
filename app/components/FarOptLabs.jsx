/************************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using AWS-UI components. For production code, follow the integration
guidelines:

https://polaris.corp.amazon.com/getting_started/development/integration/
************************************************************************/
import React from 'react';

import FarOptNavigation from './FarOptNavigation.jsx';


const {
  AppLayout,
  BreadcrumbGroup,
  Button,
  Flash,
  Table,
  TableContentSelector,
  TableFiltering,
  TablePageSizeSelector,
  TablePagination,
  TablePreferences,
  TableSelection,
  TableSorting,
  TableWrapLines,
  FormField,
  RadioGroup
} = window['AWS-UI-Components-React'];

// Class TableView is a skeleton of a Table using AWS-UI React components.
export default class TableView extends React.Component {
  render() {
    return (
      <AppLayout
        navigation={<FarOptNavigation />} // Navigation panel content imported from './ServiceNavigation.jsx'
        breadcrumbs={<Breadcrumbs />}
        content={<DetailsTable />}
        contentType="table"
      />
    );
  }
}

class DetailsTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDistributions: [],
      distributions: [],
      btnText:"Run",
      disabled:false,
      pageSize: 30,
      filteringText: ''
    };
  }
  

  componentDidMount() {
    //new DataProvider().getData('reciepes', distributions => this.setState({ distributions: distributions }));
    const headers = { 
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    }
    const apiUrl = 'https://5u2kwyr548.execute-api.us-east-1.amazonaws.com/dev?method=list_cost';
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      })
      .then((response) => response.json())
      .then((distributions) => this.setState({ distributions: distributions.cost }));

  }

  

  // Keeps track of how many distributions are selected
  headerCounter(selectedDistributions, distributions) {
    return selectedDistributions.length
      ? `(${selectedDistributions.length} of ${distributions.length})`
      : `(${distributions.length})`;
  }

  // Updates the page size in preferences
  onPaginationChange({ detail: { pageSize } }) {
    this.setState({
      pageSize
    });
  }

  // Updates the filtering text
  onFilteringChange({ detail: { filteringText } }) {
    this.setState({
      filteringText
    });
  }

  // Resets the filtering text
  clearFilter() {
    this.setState({
      filteringText: ''
    });
  }

  
  render() {
    return (
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
                  <strong>FarOpt Solutions Lab</strong>
                </div>
              </div>
              <p>
                Collaborate with experts to accelerate the development of optimization solutions.   
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="awsui-util-m-xxl awsui-util-pv-l awsui-util-ph-l">
      <div >
        <div>
          <p>
            The Amazon FarOpt Solutions Lab will help you get ready for FarOpt computing.
            Amazon FarOpt Solutions Lab engagements are collaborative research programs that allow you to work with leading experts in FarOpt computing, machine learning, and high-performance computing. The programs help you research and identify the most promising applications of FarOpt computing for your business and get FarOpt ready. Amazon FarOpt Solution Lab experts will “work backwards” with you to dive deep and learn about the science of FarOpt computing, develop and benchmark new algorithms and solutions, and build the internal expertise and strategies required to prepare your organization for the future of FarOpt computing.

          </p>
        </div>
      </div>

      <h1>Benefits and features</h1>
      <div className="awsui-util-container">
      <div className="col-12 ">
          <div className="col-4 ">
            1
          </div>
          <div className="col-4 ">
            2
          </div>
          <div className="col-4 ">
            3
          </div>
      </div>
        <div className="awsui-util-container-header">
          <h2>Build Expertise</h2>
        </div>
        <div>
          <p>
          Amazon FarOpt Solutions Lab experts will impart knowledge and guide research so that you can build FarOpt skills, experience, and expertise. Our experts will work side-by-side with your team to dive deep into the most effective ways of using FarOpt computers, collaborate on experiments, and provide insights about existing FarOpt technology so that you are ready to deploy FarOpt solutions when the time is right.
          </p>
        </div>
      </div>
    </div>
  </div>
    );
  }
  
}

// Table header content, shows how many distributions are selected and contains the action stripe
const Header = ({ selectedDistributions, counter }) => {
  const isOnlyOneSelected = selectedDistributions.length === 1;

  return (
    <div className="awsui-util-action-stripe">
      <div className="awsui-util-action-stripe-title">
        <h2>
          Cost Explorer&nbsp;
        </h2>
      </div>
    </div>
  );
};

// Breadcrumb content
const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={[
      {
        text: 'FarOpt',
        href: '#/'
      },
      {
        text: 'FarOpt Solutions Lab',
        href: '#/table'
      }
    ]}
  />
);


// Help (right) panel content
const Tools = [
  <div className="awsui-util-help-panel">
    <div className="awsui-util-help-panel-header">
      <h2>CloudFront</h2>
    </div>
    <ul className="awsui-list-unstyled">
      <li>
        <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/Introduction.html">
          What is Amazon CloudFront?
        </a>
      </li>
      <li>
        <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/GettingStarted.html">
          Getting started
        </a>
      </li>
      <li>
        <a href="http://docs.aws.amazon.com/AmazonCloudFront/latest/DeveloperGuide/distribution-working-with.html">
          Working with distributions
        </a>
      </li>
    </ul>
  </div>
];

const COLUMN_DEFINITIONS = [
  {
    id: 'id',
    header: () => 'Reciepe ID',
    cell: item => (
      <div>
        <a href={`#/runs`}>{item.recipeid}</a>
      </div>
    ),
    allowLineWrap: true
  },
  {
    id: 'contributor',
    header: () => 'Contributor',
    cell: item => item.maintainer,
    minWidth: '100px',
    allowLineWrap: true
  },
  {
    id: 'description',
    header: () => 'Description',
    cell: item => item.description,
    minWidth: '100px',
    allowLineWrap: true
  },
  {
    id: 'bucket',
    header: () => 'Bucket',
    cell: item => item.bucket,
    minWidth: '100px',
    allowLineWrap: true
  },
  {
    id: 'path',
    header: () => 'Path',
    cell: item => item.path,
    minWidth: '100px',
    allowLineWrap: true
  }
];

const FlashMessage = () => <Flash type="success" content="Resource created successfully" dismissible={true} />;




const SORTABLE_COLUMNS = [
  { id: 'id', field: 'id' },
  { id: 'description', field: 'description' },
  { id: 'domain', field: 'domain' },
  { id: 'priceClass', field: 'priceClass' },
  { id: 'sslCertificate', field: 'sslCertificate' },
  { id: 'origin', field: 'origin' },
  { id: 'status', field: 'status' },
  { id: 'state', field: 'state' },
  { id: 'logging', field: 'logging' }
];

const CONTENT_SELECTOR_OPTIONS = [
  {
    label: 'Main distribution properties',
    options: [
      { id: 'id', label: 'Distribution ID', editable: false, visible: true },
      { id: 'domain', label: 'Domain name', editable: true, visible: true },
      {
        id: 'contributor',
        label: 'Contributor',
        editable: true,
        visible: true
      },
      {
        id: 'priceClass',
        label: 'Price class',
        editable: true,
        visible: false
      },
      {
        id: 'description',
        label: 'Description',
        editable: true,
        visible: true
      },
      {
        id: 'bucket',
        label: 'Bucket',
        editable: true,
        visible: false
      },
      {
        id: 'path',
        label: 'Path',
        editable: true,
        visible: false
      },
      {
        id: 'action',
        label: 'Action',
        editable: false,
        visible: true
      }
    ]
  }
];

const PAGE_SELECTOR_OPTIONS = [
  { value: 10, label: '10 Distributions' },
  { value: 30, label: '30 Distributions' },
  { value: 50, label: '50 Distributions' }
];

const CUSTOM_PREFERENCE_OPTIONS = [{ value: 'table', label: 'Table' }, { value: 'cards', label: 'Cards' }];


