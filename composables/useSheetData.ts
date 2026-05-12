// Fetch and parse CSV from a public Google Sheet tab
export async function fetchSheetTab(sheetId: string, tab: string): Promise<Record<string, string>[]> {
  const url = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:csv&sheet=${encodeURIComponent(tab)}`
  const res = await fetch(url)
  if (!res.ok) throw new Error(`Sheet fetch failed: ${res.status}`)
  return parseCsv(await res.text())
}

function parseCsv(text: string): Record<string, string>[] {
  const lines = text.trim().split('\n')
  if (lines.length < 2) return []
  const headers = parseLine(lines[0]).map(h => h.toLowerCase().trim())
  return lines
    .slice(1)
    .filter(l => l.trim())
    .map(line => {
      const vals = parseLine(line)
      return Object.fromEntries(headers.map((h, i) => [h, (vals[i] ?? '').trim()]))
    })
}

function parseLine(line: string): string[] {
  const res: string[] = []
  let cur = ''
  let inQ = false
  for (let i = 0; i < line.length; i++) {
    if (line[i] === '"') {
      if (inQ && line[i + 1] === '"') { cur += '"'; i++ }
      else inQ = !inQ
    } else if (line[i] === ',' && !inQ) {
      res.push(cur); cur = ''
    } else cur += line[i]
  }
  res.push(cur)
  return res
}
