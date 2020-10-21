const { Icon } = window['AWS-UI-Components-React'];

export const COLUMN_DEFINITIONS = [
  {
    id: 'id',
    header: () => 'Reciepe ID',
    cell: item => (
      <div>
        <a href={`javascript:void(0)`}>{item.id}</a>
      </div>
    ),
    allowLineWrap: true
  },
  {
    id: 'contributor',
    header: () => 'Contributor',
    cell: item => item.contributor,
    minWidth: '100px',
    allowLineWrap: true
  },
  {
    id: 'domain',
    header: () => 'Domain',
    cell: item => item.domain,
    minWidth: '100px',
    allowLineWrap: true
  },
  {
    id: 'description',
    header: () => 'description',
    cell: item => item.description,
    minWidth: '100px',
    allowLineWrap: true
  },
];

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
