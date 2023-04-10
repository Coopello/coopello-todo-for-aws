## インストール

```bash
$ yarn install
```

## 立ち上げ

```bash
# development
# バックエンドは http://localhost:8000
$ yarn dev
```

データベースを作成する

```bash
# １回目のみ実行
$ cd apps/backend
$ docker compose exec api yarn prisma migrate dev --name init
```
