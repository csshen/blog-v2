export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-gatsby-portfolio'
      }
    },
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
                  buildHookId: '61bfa04ed9a26980757dc869',
                  title: 'Sanity Studio',
                  name: 'blog-v-2-studio',
                  apiId: 'b8049b91-f0a3-4066-8b2e-716183527535'
                },
                {
                  buildHookId: '61bfa04e4fb2db4d59c3dc5c',
                  title: 'Portfolio Website',
                  name: 'blog-v-2',
                  apiId: '999e2ea8-8ed5-42b8-96f4-110c5dfb3909'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/csshen/blog-v2',
            category: 'Code'
          },
          {
            title: 'Frontend',
            value: 'https://blog-v-2.netlify.app',
            category: 'apps'
          }
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent projects', order: '_createdAt desc', types: ['sampleProject']},
      layout: {width: 'medium'}
    }
  ]
}
