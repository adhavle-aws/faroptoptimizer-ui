export const PRICE_CLASS_OPTIONS = [
  { label: 'Import available open source libraries like ORTools and Pyomo', value: '0' },
  { label: 'Use only Gurobi', value: '1' },
  { label: 'Use only Cplex', value: '2' },
  { label: 'Do not import any packages', value: '3' }
];

export const SSL_CERTIFICATE_OPTIONS = [
  {
    label: 'Default CloudFront SSL/TLS certificate',
    value: 'default',
    description: 'Provides HTTPS or HTTP access to your content using a CloudFront domain name.'
  },
  {
    label: 'Custom SSL/TLS certificate (example.com)',
    value: 'custom',
    description: 'Grants access by using an alternate domain name, such as https://www.example.com/.'
  }
];

export const SUPPORTED_HTTP_VERSIONS_OPTIONS = [
  { label: 'HTTP 2', value: 'http2' },
  { label: 'HTTP 1', value: 'http1' }
];

export const VIEWER_PROTOCOL_POLICY_OPTIONS = [
  { label: 'HTTP and HTTPS', value: '0' },
  { label: 'Redirect HTTP to HTTPS', value: '1' },
  { label: 'HTTPS Only', value: '2' }
];

export const ALLOWED_HTTP_METHOD_OPTIONS = [
  { label: 'GET, HEAD', value: '0' },
  { label: 'GET, HEAD, OPTIONS', value: '1' },
  { label: 'GET, HEAD, OPTIONS, PUT, POST, PATCH', value: '2' }
];

export const FORWARD_HEADER_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Whitelist', value: 'whitelist' },
  { label: 'All', value: 'all' }
];

export const COOKIE_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Whitelist', value: 'whitelist' },
  { label: 'All', value: 'all' }
];

export const QUERY_STRING_OPTIONS = [
  { label: 'None', value: 'none' },
  { label: 'Whitelist', value: 'whitelist' },
  { label: 'All', value: 'all' }
];

export const CURRENT_COMPRESSION_OPTIONS = [
  { label: 'Manual', value: 'manual' },
  { label: 'Automatic', value: 'automatic' }
];

export const DELIVERY_METHOD = [
  {
    label: 'Write Script',
    value: 'script',
    description: 'Write a script in this console'
  },
  {
    label: 'Git repository',
    value: 'git',
    description: 'Run script from git repo (note : ... )'
  },
  {
    label: 'S3',
    value: 'S3',
    description: 'Run script from S3'
  },
  {
    label: 'Use a template',
    value: 'template',
    description: 'Use a AWS Optimize blueprint to quickly get started'
  }
];
