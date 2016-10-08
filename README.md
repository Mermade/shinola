# shinola
Shins-as-a-service. Generate beautiful [Shins](https://github.com/mermade/shins) Slate-compatible API documentation on the fly, from markdown or OpenApi / Swagger definitions

![logo](https://mermade.github.io/shinola/logo.png)

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Then connect and submit a request like:

* `http://shinola.herokuapp.com/shins?url=http://url.to.markdown.md`
* `http://shinola.herokuapp.com/openapi?url=http://url.to.openapi.json-or-yaml`
* `http://shinola.herokuapp.com/openapi?url=http://url.to.openapi.json-or-yaml&raw=true`

The last call returns the converted markdown, not the rendered HTML.

The server runs by default on port 5678 or as specified in the `PORT` environment variable
