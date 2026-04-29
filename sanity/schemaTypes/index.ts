import { type SchemaTypeDefinition } from 'sanity'
import { project } from './project'
import { blog } from './blog'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [project, blog],
}
