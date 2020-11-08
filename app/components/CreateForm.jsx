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
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-python';


const code = `from ortools.sat.python import cp_model


def main():
  model = cp_model.CpModel()
  var_upper_bound = max(50, 45, 37)
  x = model.NewIntVar(0, var_upper_bound, 'x')
  y = model.NewIntVar(0, var_upper_bound, 'y')
  z = model.NewIntVar(0, var_upper_bound, 'z')

  model.Add(2*x + 7*y + 3*z <= 50)
  model.Add(3*x - 5*y + 7*z <= 45)
  model.Add(5*x + 2*y - 6*z <= 37)

  model.Maximize(2*x + 2*y + 3*z)

  solver = cp_model.CpSolver()
  status = solver.Solve(model)

  if status == cp_model.OPTIMAL:
    print('Maximum of objective function: %i' % solver.ObjectiveValue())
    print()
    print('x value: ', solver.Value(x))
    print('y value: ', solver.Value(y))
    print('z value: ', solver.Value(z))


if __name__ == '__main__':
  main()
`;


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
  Wizard,
  S3ResourceSelector,
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
    this.state = { secondContent: 'solverdefault' };
    this.onChangeValue = this.onChangeValue.bind(this);
    this.onSecondRadio = this.onSecondRadio.bind(this);
    this.state.code = code;
  }

 
  onChangeValue(event) {
    console.log(event.target.value);
    this.setState({deliveryMethod: event.target.value});
    this.setState({secondContent: "default"});
    if(event.target.value.startsWith("solver")){
      this.setState({secondaryMethod: event.target.value});
    }
    console.log(this.state.deliveryMethod)
    console.log(this.state.secondaryMethod)
  }

  onSecondRadio(event) {
    this.setState({secondContent: event.target.value});
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
      <label class="awsui-tiles__tile-container" htmlFor="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image" >
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="script" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
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
      <label class="awsui-tiles__tile-container" htmlFor="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image">
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="git" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
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
      <label class="awsui-tiles__tile-container" htmlFor="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image">
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="S3" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
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
      <label class="awsui-tiles__tile-container" htmlFor="awsui-tiles-0-value-script" id="awsui-tiles-0-value-script-label">
         <div class="awsui-tiles__control awsui-tiles__control--no-image">
            <awsui-radio-button initialized="true">
               <div class="awsui-radio-button">
                  <div class="awsui-radio-button-label">
                     <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-0-value-script" value="template" name="awsui-tiles-0" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label"/>
                     <div class="awsui-radio-button-styled-button">
                        <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                           <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                           <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
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
              {/* <iframe id="cheapHack" src="https://ace.c9.io/build/kitchen-sink.html"  width="100%" height="580px;" frameborder="0"></iframe> */}
           
                <Editor
                  value={this.state.code}
                  onValueChange={code => this.setState({ code })}
                  highlight={code => highlight(code, languages.python)}
                  padding={10}
                />
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
            <FormField><div><Button href="#" variant="primary" text="Load template and execute" /></div></FormField>
           
          </div>
        </ColumnLayout>
      </FormSection>
      }
      {this.state.deliveryMethod == 'template'    &&   
      <FormSection header="Choose a template">
        <div class="container">
        {/* ROW 1 */}
        
        <div class="card-deck">
            <div class="row" style={{"width" : "100%"}}>

              <div class="card">
                <div class="card-header">Vehicle Routing</div>
                <div class="card-body">
                  <awsui-radio-button initialized="true" >
                    <div class="awsui-radio-button">
                        <div class="awsui-radio-button-label">
                          <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-09-value-script" value="solver" name="awsui-tiles-10" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label" onClick={this.onSecondRadio}/>
                          <div class="awsui-radio-button-styled-button">
                              <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                                <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                                <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
                              </svg>
                          </div>
                          <div class="awsui-radio-button-content">
                            {/* <div class="awsui-radio-button-label-text" awsui-radio-button-region="label" ><span><span><span>Routing</span></span></span></div> */}
                              <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span> Optimal set of routes for a fleet of vehicles </span></span></span></div>
                          </div>
                        </div>
                    </div>
                  </awsui-radio-button>  
                </div>
                {/* <div class="card-footer">
                  <Button href="#" variant="primary" text="Load template and execute" />
                </div> */}
              </div>
              
              <div class="card">
                <div class="card-header"> Scheduling</div>
                <div class="card-body">
                <awsui-radio-button >
                    <div class="awsui-radio-button">
                        <div class="awsui-radio-button-label">
                          <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-10-value-script" value="solver1" name="awsui-tiles-10" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label" onClick={this.onSecondRadio} />
                          <div class="awsui-radio-button-styled-button">
                              <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                                <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                                <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
                              </svg>
                          </div>
                          <div class="awsui-radio-button-content">
                              {/* <div class="awsui-radio-button-label-text" awsui-radio-button-region="label" ><span><span><span>Routing</span></span></span></div> */}
                              <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Assign jobs to resources at particular times</span></span></span></div>
                          </div>
                        </div>
                    </div>
                  </awsui-radio-button> 
                </div>
                {/* <div class="card-footer">
                  <Button href="#" variant="primary" text="Load template and execute" />
                </div> */}
              </div>

              <div class="card">
                <div class="card-header">
                  Resource Allocation</div>
                <div class="card-body">
                <awsui-radio-button >
                    <div class="awsui-radio-button">
                        <div class="awsui-radio-button-label">
                          <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-10-value-script" value="solver2" name="awsui-tiles-10" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label" onClick={this.onSecondRadio} />
                          <div class="awsui-radio-button-styled-button">
                              <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                                <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                                <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
                              </svg>
                          </div>
                          <div class="awsui-radio-button-content">
                              {/* <div class="awsui-radio-button-label-text" awsui-radio-button-region="label" ><span><span><span>Routing</span></span></span></div> */}
                              <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Optimize utilization of resources while maximizing a score</span></span></span></div>
                          </div>
                        </div>
                    </div>
                  </awsui-radio-button> 
                </div>
                {/* <div class="card-footer">
                  <Button href="#" variant="primary" text="Load template and execute" />
                </div> */}
              </div>

              <div class="card">
                <div class="card-header">Black-box optimization</div>
                <div class="card-body">
                <awsui-radio-button >
                    <div class="awsui-radio-button">
                        <div class="awsui-radio-button-label">
                          <input type="radio" class="awsui-radio-native-input" override-focus="" id="awsui-tiles-10-value-script" value="solver3" name="awsui-tiles-10" aria-labelledby="awsui-tiles-0-label awsui-tiles-0-value-script-label" onClick={this.onSecondRadio} />
                          <div class="awsui-radio-button-styled-button">
                              <svg viewBox="0 0 100 100" aria-hidden="true" focusable="false">
                                <circle class="awsui-radio-button-styled-circle" strokeWidth="8" cx="50" cy="50" r="46"></circle>
                                <circle class="awsui-radio-button-styled-circle-checked" strokeWidth="30" cx="50" cy="50" r="35"></circle>
                              </svg>
                          </div>
                          <div class="awsui-radio-button-content">
                              {/* <div class="awsui-radio-button-label-text" awsui-radio-button-region="label" ><span><span><span>Routing</span></span></span></div> */}
                              <div class="awsui-radio-button-description" awsui-radio-button-region="description"><span><span><span>Evolutionary optimization of a containerized function</span></span></span></div>
                          </div>
                        </div>
                    </div>
                  </awsui-radio-button> 
                </div>
                {/* <div class="card-footer">
                  <Button href="#" variant="primary" text="Load template and execute" />
                </div> */}
              </div>
              
            </div>
            
          </div>
          {/* ROW 2 */}
        
        </div>
      </FormSection>
      }{this.state.secondContent == 'solver'  &&
      <FormSection header="Vehicle Routing problem with optional capacity constraints"> 
      <Wizard steps={
        [
          {
            title: 'Define Location IDs',
            info: () => <a className="awsui-util-help-info-link">Info</a>,
            description:
              ' Browse to a CSV file on S3 with a list of locations. The Row number is the ID of that location',
            content: () => 
              (<FormSection
                header="S3 location"
                content={
                  <ColumnLayout>
                    <div data-awsui-column-layout-root="true">
                    <FormField
              label="Additional source code / inputs location"
               >
              <Multiselect
                placeholder="S3://Path/to/file.csv"
                filteringType="auto"
              />
            </FormField>
                    </div>
                  </ColumnLayout>
                }
              />)
          },
          {
            title: 'Define demand values',
            description:
              ' Browse to a CSV file on S3 with a list of demand values, one for each location ID',
            content: () => 
            (<FormSection
              header="S3 location"
              content={
                <ColumnLayout>
                  <div data-awsui-column-layout-root="true">
                  <FormField
            label="Additional source code / inputs location"
             >
            <Multiselect
              placeholder="S3://Path/to/file.csv"
              filteringType="auto"
            />
          </FormField>
                  </div>
                </ColumnLayout>
              }
            />)
          },
          {
            title: 'Define vehicle capacities',
            description:
              ' Browse to a CSV file on S3 with the maximum capacity that each vehicle can hold. The number of rows is the number of vehicles in the fleet',
            content: () => 
            (<FormSection
              header="S3 location"
              content={
                <ColumnLayout>
                  <div data-awsui-column-layout-root="true">
                  <FormField
            label="Additional source code / inputs location"
             >
            <Multiselect
              placeholder="S3://Path/to/file.csv"
              filteringType="auto"
            />
          </FormField>
                  </div>
                </ColumnLayout>
              }
            />),
            isOptional: true
          }
        ]
      } i18nStrings={
        {
          stepNumberLabel: stepNumber => `Step ${stepNumber}`,
          collapsedStepsLabel: (stepNumber, stepsCount) =>
            `Step ${stepNumber} of ${stepsCount}`,
          cancelButton: 'Cancel',
          previousButton: 'Previous',
          nextButton: 'Next',
          submitButton: 'Run Job',
          optional: 'optional'
        }
      }></Wizard>
      </FormSection>
      
      }{this.state.secondContent == 'solver1'  &&
      <FormSection header="TO DO: Mock up of problem type 2">
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
            description="The template repo from which you want FarOpt to get your project source code. Also include a requirements.txt at the root to install more packages!"
          >
            <Multiselect
              placeholder="Select an GIT repo for your template."
              filteringType="auto"
            />
          </FormField>
          <FormField><div><Button href="#" variant="primary" text="Load template and execute" /></div></FormField>
         
        </div>
      </ColumnLayout>
    </FormSection>
    
    }{this.state.secondContent == 'solver2'  &&
    <FormSection header="TO DO: Mock up of problem type 3">
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
          description="The template repo from which you want FarOpt to get your project source code. Also include a requirements.txt at the root to install more packages!"
        >
          <Multiselect
            placeholder="Select an GIT repo for your template."
            filteringType="auto"
          />
        </FormField>
        <FormField><div><Button href="#" variant="primary" text="Load template and execute" /></div></FormField>
       
      </div>
    </ColumnLayout>
  </FormSection>
  
  }{this.state.secondContent == 'solver3'  &&
  <FormSection header="Black-box optimization">
  <ColumnLayout>
    <div data-awsui-column-layout-root={true}>
      
      <FormField
        label={
          <div>
            ECR container with your function
            <a
              className="awsui-util-help-info-link"
              href="javascript:void(0);"
              onClick={() => props.replaceToolsContent(5)}
            >
              Info
            </a>
          </div>
        }
        description="The registry path where the image returining a function value is stored in Amazon ECR."
      >
        <Select
          placeholder="Select the ECR container that contains the function you want to optimize with FarOpt"
          filteringType="auto"
        />
      </FormField>
        
      <FormField
      label={
        <div>
          Select an optimizer
          </div>}
          description="Choice of state of the art black-box optimizers"
          >
      <Select options={[
        {
          "label": "Parallel Genetic Algorithm",
          "id": "1"
        },
        {
          "label": "Covariance Matrix Adaptation Evolution Strategy (CMAES)",
          "id": "2"
        },
        {
          "label": "Pareto Archived Evolution Strategy (PAES)",
          "id": "3"
        },
        {
          "label": "Coming soon ...",
          "options": [
            {
              "label": "Nondominated Sorting Genetic Algorithm (NSGA-II)",
              "id": "4"
            },
            {
              "label": "Deep Neural Global Optimizer",
              "id": "5"
            }
          ],
          "id": "4",
          "disabled": true
        }
      ]} selectedOption={{
        "label": "Select an algorithm",
        "id": "1"
      }} selectedLabel="Selected"></Select>
      </FormField>
      <FormField>

      <RadioGroup value="Minimize" items={
        [
          {
            "value": "Minimize",
            "label": "Minimize"
          },
          {
            "value": "Maximize",
            "label": "Maximize"
          }
        ]
      }></RadioGroup>

      </FormField>


      <FormField><div><Button href="#" variant="primary" text="Run Job" /></div></FormField>  
     
    </div>
  </ColumnLayout>
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
