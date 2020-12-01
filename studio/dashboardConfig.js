export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fc63c355f96f624c9b743ac',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-ex8x39ad',
                  apiId: '99496c41-0e7f-48e8-919f-1cd5d1eca592'
                },
                {
                  buildHookId: '5fc63c350ef0b23dc8d408e7',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-pqvcadur',
                  apiId: '7ebdd5a6-4568-4cf0-928c-e529eca169c1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/joetannenbaum/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-pqvcadur.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
