import { serve } from "https://deno.land/std/http/server.ts"

const port = 8000
const app = serve({ port })

console.log(`Serving at localhost:${port}`)

for await (const req of app) {
  console.log(`${req.method} ${req.url}`)
  const headers = new Headers()
  headers.set("Content-Type", "text/plain;charset=utf-8")
  req.respond({ 
    headers: headers,
    body: "здравствуйте",
  })
}
