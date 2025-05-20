import { create } from 'zustand'

interface Link {
  id: string
  link: string
  shortLink: string
  count: number
}

interface LinksStore {
  links: Link[]
  setLinks: (links: Link[]) => void
}

export const useLinksStore = create<LinksStore>((set) => ({
  links: [],
  setLinks: (links) => set({ links }),
}))
