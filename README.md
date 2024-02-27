`https://d-g-h.co`

[![Analysis](https://github.com/d-g-h/d-g-h.github.com/actions/workflows/analysis.yml/badge.svg)](https://github.com/d-g-h/d-g-h.github.com/actions/workflows/analysis.yml)
[![Deploy Next.js site to Pages](https://github.com/d-g-h/d-g-h.github.com/actions/workflows/next.yml/badge.svg)](https://github.com/d-g-h/d-g-h.github.com/actions/workflows/next.yml)

install
```
npm i
```

dev
```
npm run dev
```

inspect
```
npm run dev:inspect
```


test
```
npm test
```

prod
```
npm run build
```

lint
```
npm run lint
```

### Deploy
Push to the main branch to trigger `.github/workflows/next.yml`


### API
```
curl -s https://d-g-h.co/labors.json | jq
curl -s http://localhost:3000/labors.json | jq
```
