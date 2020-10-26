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
  ALLOWED_HTTP_METHOD_OPTIONS,
  COOKIE_OPTIONS,
  CURRENT_COMPRESSION_OPTIONS,
  FORWARD_HEADER_OPTIONS,
  PRICE_CLASS_OPTIONS,
  QUERY_STRING_OPTIONS,
  SSL_CERTIFICATE_OPTIONS,
  SUPPORTED_HTTP_VERSIONS_OPTIONS,
  VIEWER_PROTOCOL_POLICY_OPTIONS,
  DELIVERY_METHOD
} from '../resources/form-config.jsx';
const {
  AppLayout,
  AttributeEditor,
  BreadcrumbGroup,
  Button,
  Checkbox,
  ColumnLayout,
  ExpandableSection,
  Form,
  FormField,
  FormSection,
  Input,
  Multiselect,
  RadioGroup,
  Select,
  Textarea,
  Tiles
} = window['AWS-UI-Components-React'];

// Class CreateForm is a skeleton of a Single page create form using AWS-UI React components.
export default class CreateForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { contentOrigins: [], toolsIndex: 0, toolsOpen: false };
    this.state.isLoggedIn = false;
  }
  componentDidMount() {
    let dataProvider = new DataProvider();
    dataProvider.getData('content-origins', contentOrigins => this.setState({ contentOrigins: contentOrigins }));
  }

  render() {
    return (
      <AppLayout
        
        navigation={<FarOptNavigation />} // Navigation panel content imported from './ServiceNavigation.jsx'
        breadcrumbs={<Breadcrumbs />}
        
        content={
          <Content
            // Changes the Help panel content when the user clicks an 'info' link
            replaceToolsContent={index => this.setState({ toolsIndex: index, toolsOpen: true })}
            contentOrigins={this.state.contentOrigins}
          />
        }
        
        contentType="form"
        tools={Tools[this.state.toolsIndex]}
        toolsOpen={false}
        navigationOpen={true}
      />
    );
  }
}

function handleClick(e){
  e.preventDefault();    
  console.log('The link was clicked.'); 
}

// The content in the main content area of the App layout
const Content = props => (
  <div style={{width:120 + "%"}}>
    <Form
      header={<h1>Create Script</h1>}
      actions={
        // located at the bottom of the form
        <div></div>
      }
    >
      <ContentDeliveryPanel replaceToolsContent={props.replaceToolsContent} />
      
      
    </Form>
  </div>
);

// First form section titled 'Distribution content delivery'
class ContentDeliveryPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { deliveryMethod: 'script' };
    this.onChangeValue = this.onChangeValue.bind(this);
  }

 
  onChangeValue(event) {
    console.log(event.target.value);
    this.setState({deliveryMethod: event.target.value});
    console.log(this.state.deliveryMethod)
  }

  render() {
    return (
      <div>
      <FormSection header="Script creation options">
        <FormField
          label={
            <div>
              Create Script Sources
              <a
                className="awsui-util-help-info-link"
                href="javascript:void(0);"
                onClick={() => this.props.replaceToolsContent(1)}
              >
                Info
              </a>
            </div>
          }
          stretch={true}
        >
<div class="awsui-tiles">
   <div class="awsui-tiles__columns awsui-tiles__columns--2" onChange={this.onChangeValue}>
      <label class="awsui-tiles__tile-container" for="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image" >
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="script" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" stroke-width="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" stroke-width="30" cx="50" cy="50" r="35"></circle>
                        </svg>
                     </div>
                     <div class="awsui-radio-button-content">
                        <div class="awsui-radio-button-label-text" awsui-radio-button-region="label"><span><span><span>Write Script</span></span></span></div>
                        <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Write a script in this console</span></span></span></div>
                     </div>
                  </div>
               </div>
            </awsui-radio-button>
         </div>
      </label>
      <label class="awsui-tiles__tile-container" for="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image">
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="git" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" stroke-width="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" stroke-width="30" cx="50" cy="50" r="35"></circle>
                        </svg>
                     </div>
                     <div class="awsui-radio-button-content">
                        <div class="awsui-radio-button-label-text" awsui-radio-button-region="label"><span><span><span>Git repository</span></span></span></div>
                        <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Run script from git repo (note : ... )</span></span></span></div>
                     </div>
                  </div>
               </div>
            </awsui-radio-button>
         </div>
      </label>
      <label class="awsui-tiles__tile-container" for="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image">
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="S3" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" stroke-width="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" stroke-width="30" cx="50" cy="50" r="35"></circle>
                        </svg>
                     </div>
                     <div class="awsui-radio-button-content">
                        <div class="awsui-radio-button-label-text" awsui-radio-button-region="label"><span><span><span>S3</span></span></span></div>
                        <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Run script from S3</span></span></span></div>
                     </div>
                  </div>
               </div>
            </awsui-radio-button>
         </div>
      </label>
      <label class="awsui-tiles__tile-container" for="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image">
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="template" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" stroke-width="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" stroke-width="30" cx="50" cy="50" r="35"></circle>
                        </svg>
                     </div>
                     <div class="awsui-radio-button-content">
                        <div class="awsui-radio-button-label-text" awsui-radio-button-region="label"><span><span><span>Use a template</span></span></span></div>
                        <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Use a FarOpt blueprint to quickly get started</span></span></span></div>
                     </div>
                  </div>
               </div>
            </awsui-radio-button>
         </div>
      </label>
  </div>
</div>
 </FormField>
</FormSection>
{this.state.deliveryMethod == 'script'  &&
<FormSection header={<h2>Write script</h2>} >
        <ColumnLayout>
          <div data-awsui-column-layout-root={true}>
            <FormField
              label={
                <span>
                  Include packages
                  <a
                    className="awsui-util-help-info-link"
                    href="javascript:void(0);"
                    onClick={() => props.replaceToolsContent(2)}
                  >
                    Info
                  </a>
                </span>
              }
              stretch={true}
            >
              <RadioGroup items={PRICE_CLASS_OPTIONS} value="0" />
            </FormField>
            <FormField
              label={
                <span>
                  Script 
                  <a
                    className="awsui-util-help-info-link"
                    href="javascript:void(0);"
                    onClick={() => props.replaceToolsContent(3)}
                  >
                    Info
                  </a>
                </span>
              }
              stretch={true}
            >             
              <iframe id="cheapHack" src="https://ace.c9.io/build/kitchen-sink.html"  width="100%" height="580px;" frameborder="0"></iframe>
           </FormField>
            <Button text="Save script to library" onClick={handleClick}/>
          </div>
        </ColumnLayout>
      </FormSection>
  }
  {this.state.deliveryMethod == 'S3'  &&
  <FormSection header="Load existing script">
        <ColumnLayout>
          <div data-awsui-column-layout-root={true}>
            <FormField
              label={
                <div>
                  Result output location
                  <a
                    className="awsui-util-help-info-link"
                    href="javascript:void(0);"
                    onClick={() => props.replaceToolsContent(5)}
                  >
                    Info
                  </a>
                </div>
              }
              description="The Amazon S3 bucket to which you want FarOpt to output results of your code."
            >
              <Select
                placeholder="Select the Amazon S3 bucket from which you want FarOpt to output results of your code."
                filteringType="auto"
              />
            </FormField>
            <FormField
              label="Additional source code / inputs location"
              description="The Amazon S3 bucket from which you want FarOpt to get your project source code. Also include a requirements.txt at the root to install more packages!"
            >
              <Multiselect
                placeholder="Select an Amazon S3 bucket from which you want FarOpt to get your project source code."
                filteringType="auto"
              />
            </FormField>
            <FormField
              label="Path to source files"
              description="The directory in your Amazon S3 bucket to the source code."
            >
              <Input placeholder="/path/to/src" />
            </FormField>
            <FormField
              label="Origin ID"
              description="This value lets you distinguish multiple origins in the same distribution from one another"
            >
              <Input />
            </FormField>
            <AttributeEditor
              addButtonText="Add header"
              removeButtonText="Remove header"
              items={[
                {
                  name: '',
                  value: ''
                }
              ]}
              definition={[
                {
                  label: (
                    <span>
                      Custom header name
                      <a
                        className="awsui-util-help-info-link"
                        href="javascript:void(0);"
                        onClick={() => props.replaceToolsContent(6)}
                      >
                        Info
                      </a>
                    </span>
                  ),
                  control: item => <Input value={item.name} placeholder="Location" />
                },
                {
                  label: (
                    <span>
                      Custom header value<i> - optional</i>
                    </span>
                  ),
                  control: item => <Input value={item.value} placeholder="Germany" />
                }
              ]}
            />
          </div>
        </ColumnLayout>
      </FormSection>
      }
 {this.state.deliveryMethod == 'git'  &&
  <FormSection header="Load script from git">
        <ColumnLayout>
          <div data-awsui-column-layout-root={true}>
            <FormField
              label={
                <div>
                  Result output location
                  <a
                    className="awsui-util-help-info-link"
                    href="javascript:void(0);"
                    onClick={() => props.replaceToolsContent(5)}
                  >
                    Info
                  </a>
                </div>
              }
              description="The Amazon S3 bucket to which you want FarOpt to output results of your code."
            >
              <Select
                placeholder="Select the Amazon S3 bucket from which you want FarOpt to output results of your code."
                filteringType="auto"
              />
            </FormField>
            <FormField
              label="Git repository"
              description="The GIT repo from which you want FarOpt to get your project source code. Also include a requirements.txt at the root to install more packages!"
            >
              <Multiselect
                placeholder="Select an GIT repo from which you want FarOpt to get your project source code."
                filteringType="auto"
              />
            </FormField>
           
          </div>
        </ColumnLayout>
      </FormSection>
      }
      {this.state.deliveryMethod == 'template'  &&   
      <FormSection header="Choose a template">
        <div class="container">
          <div class="card-deck">
            <div class="row">
              <div class="card mb-4 bg-info text-white">
                <div class="card-header">Solver</div>
                <div class="card-body">
                  <h5 class="card-title">Routing</h5>
                  <p class="card-text">Vehicle Routing Problem with capacity constraints</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-warning">Load template and execute</a>
                </div>
              </div>
              <div class="card mb-4 bg-info text-white">
                <div class="card-header">Solver</div>
                <div class="card-body">
                  <h5 class="card-title">Routing</h5>
                  <p class="card-text">Vehicle Routing Problem with pickup and delivery constraints</p>
                </div>
                <div class="card-footer">
                  <a href="#" class="btn btn-warning">Load template and execute</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </FormSection>
      }
  </div>
            
    );
  }
}

// Breadcrumb content
const Breadcrumbs = () => (
  <BreadcrumbGroup
    items={[
      {
        text: 'FarOpt',
        href: '#/'
      },
      {
        text: 'Create Script',
        href: '#/create'
      }
    ]}
  />
);

// List of Help (right) panel content, changes depending on which 'info' link the user clicks on.
const Tools = [
  
];
