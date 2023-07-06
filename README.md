# lib-starter

npm packageを作るための@x7ddf74479jn5専用プロジェクトテンプレート。

## 技術スタック

- npm
- TypeScript
- ESM
- Prettier
- ESLint
- Vitest
- renovate
- GitHub Actions
- vscode向けの各種設定ファイル (`extensions.json`, `settings.json`)

## Usage

```bash
gh repo create -p x7ddf74479jn5/lib-starter <app_name>
cd <app_name>

## Set env
export GITHUB_TOKEN=********
export NPM_TOKEN=********

## Init project
pnpm install
pnpm dev
```

## License

MIT
