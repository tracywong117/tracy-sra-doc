import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/tracy-sra-doc/markdown-page',
    component: ComponentCreator('/tracy-sra-doc/markdown-page', '29a'),
    exact: true
  },
  {
    path: '/tracy-sra-doc/docs',
    component: ComponentCreator('/tracy-sra-doc/docs', '5e8'),
    routes: [
      {
        path: '/tracy-sra-doc/docs',
        component: ComponentCreator('/tracy-sra-doc/docs', 'bbf'),
        routes: [
          {
            path: '/tracy-sra-doc/docs',
            component: ComponentCreator('/tracy-sra-doc/docs', 'ca4'),
            routes: [
              {
                path: '/tracy-sra-doc/docs/category/data-processing',
                component: ComponentCreator('/tracy-sra-doc/docs/category/data-processing', '919'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tracy-sra-doc/docs/data-processing/data-curation',
                component: ComponentCreator('/tracy-sra-doc/docs/data-processing/data-curation', 'b9d'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tracy-sra-doc/docs/data-processing/download-ncbi-sra-metadata',
                component: ComponentCreator('/tracy-sra-doc/docs/data-processing/download-ncbi-sra-metadata', 'c45'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tracy-sra-doc/docs/data-processing/download-study-data',
                component: ComponentCreator('/tracy-sra-doc/docs/data-processing/download-study-data', '4b6'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tracy-sra-doc/docs/data-processing/useful-data',
                component: ComponentCreator('/tracy-sra-doc/docs/data-processing/useful-data', '31b'),
                exact: true,
                sidebar: "tutorialSidebar"
              },
              {
                path: '/tracy-sra-doc/docs/intro',
                component: ComponentCreator('/tracy-sra-doc/docs/intro', '718'),
                exact: true,
                sidebar: "tutorialSidebar"
              }
            ]
          }
        ]
      }
    ]
  },
  {
    path: '/tracy-sra-doc/',
    component: ComponentCreator('/tracy-sra-doc/', 'd24'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
