
const is_browser = typeof window == 'object'


async function fetchCached(path: string) {
  if (is_browser) {
    const cached = sessionStorage[path]
    if (cached) return cached

    try {
      const csv = await fetch('./model/mocks/' + path)
      return sessionStorage[path] = await csv.text()
    } catch (e) {
      console.error(e)
    }

  } else {
    const csv = await fetch(`file:${process.cwd()}/${path}`)
    return await csv.text()
  }
}

export async function fetchPeople(type, fetch_all) {

  // type can be empty string
  if (!type) type = 'members'

  const data = JSON.parse(await fetchCached(`${type}.json`))
  const people = parseCSV(data.entries)

  if (fetch_all) {
    const tail = await fetchCached(`${type}-tail.csv`)
    people.push(...parseCSV(tail))

  } else if (is_browser) {
   setTimeout(() => fetchCached(`${type}-tail.csv`), 2718) // Neper constant
  }

  if (data.is_mock) setupMocks(people, type)

  return { people, total: data.total }
}


export async function getPeople(opts) {
  const { start=0, limit=30, sort='created', search } = opts || {}
  let { people, total } = await fetchPeople(opts.type, Object.keys(opts)[0])

  sortBy(sort, people)

  if (search) {
    const hasMatch = (a, b) => a?.toLowerCase().includes(b?.toLowerCase())
    people = people.filter(el => hasMatch(el.name, search) || hasMatch(el.email, search))
    total = people.length
  }

  return { total, people: people.slice(start, start + limit) }
}


/* ------- utils --------- */

function parseCSV(csv: string) {
  const [head, ...rows] = csv.split('\n')
  const keys = head.split(',')
  return rows.map(row => createObject(keys, row.split(',')))
}

// async function
function createObject(keys: string[], values: string[]) {
  const entry = {}
  keys.forEach((key, i) => {
    const val = values[i]
    entry[key] = 1 * val || val
  })
  return entry
}

function sortBy(key: string, arr: object[]) {
  arr.sort((obj_a, obj_b) => {
    const a = obj_a[key], b = obj_b[key]
    const diff = 1 * a ? b -a : a?.localeCompare(b)
    return diff
  })
  return arr
}


/* ------- mock data --------- */

const PLANS = ['', 'free', 'small', 'medium', 'pro', 'enterprise']
const CARDS = ['', 'visa', 'amex', 'mastercard', 'diners', 'paypal']


function goback(hours: number) {
  return Date.now() - hours * 3600 * 1000
}

function setupMocks(entries, type) {

  entries.forEach((el, i) => {
    const { plan, card } = el
    el.created = goback(i * 3)
    if (plan) el.plan = PLANS[plan]
    if (card) el.card = CARDS[card]

  })
}

