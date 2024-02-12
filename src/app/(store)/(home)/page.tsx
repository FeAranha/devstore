import { Suspense } from 'react'
import HomeLoading from './loading'

export default async function Home() {
  await new Promise((resolve) => setTimeout(resolve, 2000))

  return (
    <Suspense fallback={<HomeLoading />}>
      <h1>Home</h1>
    </Suspense>
  )
}
