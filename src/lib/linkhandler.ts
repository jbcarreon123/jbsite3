import { base } from '$app/paths'

export const LinkHandler = (link: string) => {
  if (process.env.NODE_ENV === 'development') {
    return link
  }

  if (link === '/') {
    return base
  }

  if (link.startsWith('http')) {
    return link
  }

  return base + link
}