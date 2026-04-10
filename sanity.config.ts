import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import { schemaTypes } from './src/sanity/schema'

export default defineConfig({
  name: 'default',
  title: 'PREEMIUM Pest Management',

  projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
  dataset: import.meta.env.VITE_SANITY_DATASET,

  basePath: '/admin',

  plugins: [deskTool()],

  schema: {
    types: schemaTypes,
  },
})
