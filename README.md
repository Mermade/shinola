# shinola
Shins-as-a-service. Generate beautiful [Shins](https://github.com/mermade/shins) Slate-compatible API documentation on the fly, from markdown or OpenApi / Swagger definitions

[![Deploy](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)

## Then connect and submit a request like:

* `http://shinola.herokuapp.com/json?url=http://url.to.swagger.json`
* `http://shinola.herokuapp.com/yaml?url=http://url.to.swagger.yaml`
* `http://shinola.herokuapp.com/markdown?url=http://url.to.markdown.md`

The server runs locally on port 5678 or as specified in the `PORT` environment variable
