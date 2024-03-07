# Menergia React Icon Library

## Publishing

[changesets](https://github.com/changesets/changesets) + GitHub Actions を使って GitHub Registry にリリース・パッケージの公開をする。リリース手順は以下の通り


1. `main` から切ったブランチで root dir にて `pnpm changeset`
2. major/minor/patch bump up を選択し、change log を書く (1.で実行した cli でインタラクティブに)
3. ↑の内容を commit、 remote へ push
4. `main` へ PR 作成・マージ
5. `release` workflow がトリガーされ Release PR が作成されるので、それをマージ
6. `release` workflow により tag, release が作成あsれ、 GitHub registry へ publish される
