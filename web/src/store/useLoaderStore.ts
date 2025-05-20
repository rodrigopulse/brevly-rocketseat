import { create } from 'zustand'

interface Loader {
  show: boolean
}

interface LoaderStore {
  loaderState: Loader
  loader: (open: boolean) => void
}

export const useLoaderStore = create<LoaderStore>((set) => ({
  loaderState: { show: false },
  loader: (show) =>
    set({
      loaderState: { show },
    }),
}))
export const useLoader = () => {
  const { loader } = useLoaderStore()
  return loader
}
