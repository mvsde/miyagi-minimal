module.exports = {
  components: {
    folder: 'components'
  },
  engine: {
    name: 'twig',
    options: {
      namespaces: {
        elements: 'components/elements',
        patterns: 'components/patterns',
        templates: 'components/templates'
      }
    }
  },
  files: {
    templates: {
      name: '<component>',
      extension: 'twig'
    },
    schema: {
      extension: 'yaml'
    },
    mocks: {
      extension: 'yaml'
    }
  },
  schema: {
    strict: false
  }
}
