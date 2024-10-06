import { type Meta } from "@storybook/vue3";

export interface Documentation {
  title: string
  summary: string
  customTypes?: {name: string; description: string}[]
  dependencies?: {
    name: string;
    path: string;
    props?: string[];
    slots?: string[];
    emits?: string[];
    exposed?: string[];
    types?: string[]
  }[]
}

/**
 * Extracts storybook path segment from component storybook meta,
 * @param componentTitle
 * @returns string
 */
export const computeComponentPath = (componentMeta: Meta) => {
  const title = componentMeta.title
  return title ? title.
    trim().
    replace(/\s+/g, " ").
    replace(/\//g, '-').
    replace(/\s/g, '-').
    toLowerCase() : ''
}

/**
 * Extract component name from component storybook meta
 * @param componentMeta 
 * @returns string
 */
export const computeComponentName = (componentMeta: Meta) => {
  return componentMeta.component?.__name ? componentMeta.component?.__name : ''
}