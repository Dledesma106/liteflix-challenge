import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import MovieFormProvider from 'context/MovieFormContext/MovieFormProvider'

export default function App ({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <>
      <MovieFormProvider>
        <Component {...pageProps} />
      </MovieFormProvider>
    </>
  )
}
