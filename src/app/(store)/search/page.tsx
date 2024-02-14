import { Suspense } from 'react'
import SearchLoading from './loading'

export default async function Search() {
  await new Promise((resolve) => setTimeout(resolve, 3000))

  return (
    <Suspense fallback={<SearchLoading />}>
      <h1>Search</h1>
    </Suspense>
  )
}
