import luccaProxy from '@lucca/proxy';

export default [
  luccaProxy({
    context: [
      '/api',
      '/getFile.ashx',
      '/organization/structure',
      '/work-locations',
      '/identity',
      '/admin/account-and-billing/services',
      '/lucca-files',
      '/groups/api',
      '/work-locations/meta/api',
      '/lucca-banner',
      '/directory/api',
      '/store/api',
    ],
    useVite: true,
    logLevel: 'debug',
  }),
];
