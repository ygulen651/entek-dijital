import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'Entek Digital Admin',

  projectId: 'hz9ci14r', // Explicit ID to avoid env issues during build
  dataset: 'production',

  basePath: '/studio',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schema.types,
  },
})
