## Init project

```bash
git flow init -d
pnpm i -D husky prettier pretty-quick @commitlint/config-conventional @commitlint/cli commitlint standard-version

echo '{ "extends": ["@commitlint/config-conventional"] }' > .commitlintrc.json

npm pkg set scripts.prepare="husky install"
npm pkg set scripts.release="standard-version"
pnpm i


pnpx husky add .husky/pre-commit "pnpm pretty-quick --staged"
pnpx husky add .husky/commit-msg "pnpm commitlint --edit "\${1}""
pnpm i

git stage .
git commit -m "feat: init"
```

```bash
pnpm i -D vite-plugin-qrcode tailwindcss-unsplash vite-plugin-windicss windicss sass clsx @faker-js/faker msw axios @mswjs/data @types/node

pnpm i @tanstack/react-query-devtools @tanstack/react-query react-hook-form zod
```
