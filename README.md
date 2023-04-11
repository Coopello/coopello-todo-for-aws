## インストール

```bash
$ yarn install
```

## 立ち上げ

```bash
# APIエンドポイントは http://localhost:8000, Swaggerは http://localhost:8000/api
$ yarn dev
```

↓ 最初にデータベースを作成する必要がある

```bash
# １回目のみ以下２つのコマンド実行
$ cd apps/backend
$ docker compose exec api yarn prisma migrate dev --name init
```
