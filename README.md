<h1 align="center">Korean 한글 conjugator ✨</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
</p>

CLI to conjugate Korean verbs

## Install
```sh
npm run build
```

## Usage
```sh
npm run conjugate -- [ -v verb | verb ] [options]
```

If you are using Linux or Git Bash terminal, you can create an alias:
```
# Dont forget to change /path/to
echo alias conjugate=\'npm run conjugate --prefix=/path/to/korean-conjugator --silent --\' >> ~/.bashrc
source ~/.bashrc
```

Then, use
```sh
conjugate [ -v verb | verb ] [options]
```

## Options
| Option | Default | Allowed values | Description |
|---|---|---|---|
| `-v`, `--verb`, `[verb]` | | | Verb to conjugate |
| `-t`, `--tense` | `present` | `past`, `present` | Tense to use |
| `-p`, `--politeness` | `informalPolite` | `formalPolite`, `informalPolite`, `informalCasual` | Politeness level to use |

## Includes
Korean Conjugator is under development, and may not handle some special cases or irregular verbs.
If this is this the case, do not hesitate to open an [issue](https://github.com/fabien-renaud/korean-conjugator/issues/new).
Here is an explicit of what Korean Conjugator currently handles:
- `past` / `present` tense
- `formal polite` / `informal polite` / `informal casual` politeness levels
- `하다` verbs
- Regular verbs with/without final (중성)
- Following irregulars:
    - None at the moment

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/fabien-renaud/korean-conjugator/issues).

## Show your support

Give a ⭐️ if this project helped you!
