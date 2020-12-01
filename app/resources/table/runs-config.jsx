const { Icon, Button } = window['AWS-UI-Components-React'];
var submitDisabled = false;

export const COLUMN_DEFINITIONS = [
  {
    id: 'id',
    header: () => 'Job ID',
    cell: item => item.recipeId,
    allowLineWrap: true
  },
  {
    id: 'bucket',
    header: () => 'Bucket',
    cell: item => item.bucket,
    minWidth: '300px',
    allowLineWrap: true
  },
  {
    id: 'path',
    header: () => 'Path',
    cell: item => item.path,
    minWidth: '300px',
    allowLineWrap: true
  },
  {
    id: 'submittedOn',
    header: () => 'Submitted On',
    cell: item => item.submittedOn,
    minWidth: '300px',
    allowLineWrap: true
  },
  {
    id: 'desc',
    header: () => 'Description',
    cell: item => item.description,
    minWidth: '300px',
    allowLineWrap: true
  }
];

function handleRun(recipeId){ 
    submitDisabled = true
    const apiUrl = 'https://5u2kwyr548.execute-api.us-east-1.amazonaws.com/dev/faroptsdkfunction?method=run_recipe';
    fetch(apiUrl, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      recipeName: recipeId
    })})
    
}


export const SORTABLE_COLUMNS = [
  { id: 'id', field: 'id' },
  { id: 'submittedOn', field: 'submittedOn' },
  { id: 'path', field: 'path' },
  { id: 'desc', field: 'desc' }
];

export const CONTENT_SELECTOR_OPTIONS = [
  {
    label: 'Main distribution properties',
    options: [
      { id: 'id', label: 'Distribution ID', editable: false, visible: true },
      {
        id: 'bucket',
        label: 'Bucket',
        editable: true,
        visible: false
      },
      {
        id: 'path',
        label: 'Path',
        editable: false,
        visible: false
      },
      {
        id: 'desc',
        label: 'Description',
        editable: false,
        visible: true
      },
      {
        id: 'submittedOn',
        label: 'Submitted On',
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
