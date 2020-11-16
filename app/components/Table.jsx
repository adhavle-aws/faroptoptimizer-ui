/************************************************************************
                            DISCLAIMER

This is just a playground package. It does not comply with best practices
of using AWS-UI components. For production code, follow the integration
guidelines:

https://polaris.corp.amazon.com/getting_started/development/integration/
************************************************************************/
import React from 'react';
import DataProvider from '../resources/data-provider';
import ServiceNavigation from './ServiceNavigation.jsx';
import FarOptNavigation from './FarOptNavigation.jsx';


import {
  COLUMN_DEFINITIONS,
  CONTENT_SELECTOR_OPTIONS,
  PAGE_SELECTOR_OPTIONS,
  SORTABLE_COLUMNS,
  CUSTOM_PREFERENCE_OPTIONS
} from '../resources/table/table-config.jsx';
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
      pageSize: 30,
      filteringText: ''
    };
    this.handleRun = this.handleRun.bind(this);
  }

  componentDidMount() {
    new DataProvider().getData('reciepes', distributions => this.setState({ distributions: distributions }));
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
      <Table
        columnDefinitions={COLUMN_DEFINITIONS}
        items={this.state.distributions}
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
        <TableSelection
          selectedItems={this.state.selectedDistributions}
          onSelectionChange={evt => this.setState({ selectedDistributions: evt.detail.selectedItems })}
        />
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
        <Button href="#/cards" text="View details" disabled={!isOnlyOneSelected} />
        <Button text="Edit" disabled={!isOnlyOneSelected} />
        <Button text="Delete" disabled={selectedDistributions.length === 0} />
        <Button href="#/create" variant="primary" text="Create Script" />
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

// Flash message content
const FlashMessage = () => <Flash type="success" content="Resource created successfully" dismissible={true} />;

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
