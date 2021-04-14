import { Provider, createClient } from 'urql'
import '../styles/tailwind.css'

const client = createClient({ url: 'http://localhost:4000/graphql'})

function MyApp({ Component, pageProps }) {
  return (
    <Provider value={client}>
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp
