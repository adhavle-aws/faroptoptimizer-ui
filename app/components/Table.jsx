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
    this.handleRun = this.handleRun.bind(this);
    this.handleRecipeRun = this.handleRecipeRun.bind(this);
  }
  

  componentDidMount() {
    //new DataProvider().getData('reciepes', distributions => this.setState({ distributions: distributions }));
    const headers = { 
      crossDomain:true,
      method: 'GET',
      headers: {'Content-Type':'application/json'}
    }
    const apiUrl = 'https://5u2kwyr548.execute-api.us-east-1.amazonaws.com/dev?method=list_recipes';
    fetch(apiUrl, {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      })
      .then((response) => response.json())
      .then((distributions) => this.setState({ distributions: distributions.list_recipes }));

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

  handleRecipeRun(path, code, maintainer, description){ 
    document.getElementById(path).textContent = 'Job Submitted'
    document.getElementById('cloudwatch').hidden = false
    const apiUrl = 'https://5u2kwyr548.execute-api.us-east-1.amazonaws.com/dev/faroptsdkfunction?method=run_s3_job';
    fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: code,
      description: description,
      maintainer:maintainer
    })})
    /*
    const apiUrl = 'https://5u2kwyr548.execute-api.us-east-1.amazonaws.com/dev/faroptsdkfunction?method=run_recipe';
    fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipeName: path,
      code: code
    })})
  */
}
  handleRun(e){ 
    this.setState({ value: '' });
    if(this.state.code === undefined){
      this.state.code = srccode
    }
    const apiUrl = 'https://5u2kwyr548.execute-api.us-east-1.amazonaws.com/dev/faroptsdkfunction?method=run_s3_job';
    fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstParam: this.state.code,
      description: this.description,
      maintainer:this.maintainer
    })})
    .then((response) => response.json());
    e.preventDefault();    
  }

  render() {
    return (
      <div>
      <Table
        columnDefinitions={[
          {
            id: 'id',
            header: () => 'Reciepe ID',
            cell: item => (
              <div>
                <a href={`#/runs/id=`+item.description}>{item.recipeid}</a>
              </div>
            ),
            minWidth: '150px',
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
          },
          {
            id: 'action',
            header: () => 'Action',
            cell: item => (<Button id={item.path} disabled={false} variant="primary" onClick={() => { this.handleRecipeRun(item.path, item.code, item.maintainer, item.description) }}>{this.state.btnText}</Button>),
            minWidth: '100px',
            allowLineWrap: true
          }]
        }
        items={this.state.distributions}
        buttonValue = {true}
        header={
          <Header
            selectedDistributions={this.state.selectedDistributions}
            counter={this.headerCounter(this.state.selectedDistributions, this.state.distributions)}
          />
        }
        noMatch={
          <div className="awsui-util-t-c">
            <div className="awsui-util-pt-xs awsui-util-mb-xs">
              <b>No matches</b>
            </div>
            <p className="awsui-util-mb-s">No results match your query</p>
            <div className="awsui-util-mb-l">
              <Button onClick={this.clearFilter.bind(this)} text="Clear filter" />
            </div>
          </div>
        }
      >
        <TableFiltering
          filteringPlaceholder="Search distributions"
          filteringText={this.state.filteringText}
          onFilteringChange={this.onFilteringChange.bind(this)}
        />
        <TablePagination onPaginationChange={this.onPaginationChange.bind(this)} pageSize={this.state.pageSize} />
        <TableSorting sortableColumns={SORTABLE_COLUMNS} />
        
        <TablePreferences title="Preferences" confirmLabel="Confirm" cancelLabel="Cancel">
          <TablePageSizeSelector title="Page size" options={PAGE_SELECTOR_OPTIONS} />
          <TableWrapLines label="Wrap lines" description="Check to see all the text and wrap the lines" value={false} />
          <FormField
            stretch={true}
            className="awsui-util-mb-l awsui-util-d-b awsui-table-custom-preference"
            label="View as"
          >
            <RadioGroup value="table" items={CUSTOM_PREFERENCE_OPTIONS} />
          </FormField>
          <TableContentSelector title="Select visible columns" options={CONTENT_SELECTOR_OPTIONS} />
        </TablePreferences>
      </Table>
      
      <br/>
      <iframe id="cloudwatch" hidden={true} width="100%" height="700px" src="https://cloudwatch.amazonaws.com/dashboard.html?dashboard=FarOpt-Dashboard&context=eyJSIjoidXMtZWFzdC0xIiwiRCI6ImN3LWRiLTU5MTQ2OTQ5OTc0MyIsIlUiOiJ1cy1lYXN0LTFfYVUzSnFKcTBxIiwiQyI6IjY4OHIzZWdkNGYxOTVkcTlsM2wwcGZiYnM3IiwiSSI6InVzLWVhc3QtMTo0NDIzOTc0My1iNjY2LTRmMTMtOWIzNS00NWU5ZGRmNzI5MjQiLCJNIjoiUHVibGljIn0%3D"></iframe>
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
          Optimizers&nbsp;
          {counter ? <span className="awsui-util-header-counter">{counter}</span> : ''}
        </h2>
      </div>
      <div className="awsui-util-action-stripe-group">
        <Button href="#/create" variant="primary" text="Create Recipe" />
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
        text: 'Reciepes',
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
  },
  {
    id: 'action',
    header: () => 'Action',
    cell: item => (<div> <Button text="Run" id = {item.path} variant="primary" onClick={() => { handleRecipeRun(item.path, item.code, item.maintainer, item.description) }}/></div>),
    minWidth: '200px',
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


