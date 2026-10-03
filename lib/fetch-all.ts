const PAGE_SIZE = 1000

type PageResult<T> = PromiseLike<{ data: T[] | null; error: unknown }>

// Supabase returns at most 1000 rows per request and silently drops the rest.
// Pass a function that builds the query for a given range; pages are fetched
// until a short page comes back. Use a stable .order() in the query so pages
// don't overlap or skip rows.
export async function fetchAll<T>(
  buildQuery: (from: number, to: number) => PageResult<T>
): Promise<T[]> {
  const rows: T[] = []
  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await buildQuery(from, from + PAGE_SIZE - 1)
    if (error) throw error
    rows.push(...(data ?? []))
    if (!data || data.length < PAGE_SIZE) return rows
  }
}
