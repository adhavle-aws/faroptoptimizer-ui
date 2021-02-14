const { Icon, Button, Flash } = window['AWS-UI-Components-React'];

export const COLUMN_DEFINITIONS = [
  {
    id: 'id',
    header: () => 'Application ID',
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
    cell: item => (<div> <Button text="Run" id = {item.path} variant="primary" onClick={() => { handleRun(item.path, item.code, item.maintainer, item.description) }}/></div>),
    minWidth: '200px',
    allowLineWrap: true
  }
];

const FlashMessage = () => <Flash type="success" content="Resource created successfully" dismissible={true} />;

function handleRun(path, code, maintainer, description){ 
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


export const SORTABLE_COLUMNS = [
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

export const CONTENT_SELECTOR_OPTIONS = [
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
        visible: true
      },
      {
        id: 'path',
        label: 'Path',
        editable: true,
        visible: true
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

export const PAGE_SELECTOR_OPTIONS = [
  { value: 10, label: '10 Distributions' },
  { value: 30, label: '30 Distributions' },
  { value: 50, label: '50 Distributions' }
];

export const CUSTOM_PREFERENCE_OPTIONS = [{ value: 'table', label: 'Table' }, { value: 'cards', label: 'Cards' }];
