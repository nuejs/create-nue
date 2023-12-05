
// curl https://api.mockaroo.com/api/2a183a80\?count\=1000\&key\=f88b8c50 > f.csv
import { getPeople } from './index.ts'


test('get entries', async () => {
  const data = await getPeople({ search: 'Mari', type: 'customers' }, true)
  console.info(data)
})
