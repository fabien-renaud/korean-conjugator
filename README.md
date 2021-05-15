<h1 align="center">Korean 한글 conjugator ⛩</h1>
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
| `-t`, `--tense` | `present` | `past`,<br> `present` | Tense to use |
| `-p`, `--politeness` | `informalPolite` | `formalPolite`,<br> `informalPolite`,<br> `informalCasual` | Politeness level to use |

## Includes
Korean Conjugator is under development, and may not handle some special cases or irregular verbs.
If this is this the case, do not hesitate to open an [issue](https://github.com/fabien-renaud/korean-conjugator/issues/new).
Here is an explicit of what Korean Conjugator currently handles:
- `past` / `present` tense
- `formal polite` / `informal polite` / `informal casual` politeness levels
- `하다` verbs
- Regular verbs
- Following irregulars:

| Rule | Status | Count | List |
|:---:|:---:|:---:|:---|
| `ㅂ` | `Implemented` | 24 | 돕다, 곱다, 가볍다, 고맙다, 눕다, 굽다, 귀엽다, 깁다, 까다롭다, 더럽다, 덥다, 두렵다, 맵다, 무겁다, 밉다, 반갑다, 부럽다, 아름답다, 어둡다, 어렵다, 쉽다, 줍다,즐겁다, 춥다 |
| `ㄷ` | `Implemented` | 5 | 듣다, 걷다, 깨닫다, 묻다, 싣다 |
| `ㅅ` | `Implemented` | 6 | 낫다, 짓다, 긋다, 잇다, 붓다, 젓다 |
| `ㅎ` | `Implemented` | 7 | 노랗다, 빨갛다, 까맣다, 파갛다, 그렇다, 어떻다, 하얗다 |
| `ㄹ` | `Implemented` | All |  |
| `르` | `Implemented` | All |  |
| `으` | `Implemented` | All |  |
| `Uniques` | `Implemented` | 3 | 이다, 되다, 따르다 |

*source: https://www.koreanwikiproject.com/wiki/Category:Irregular_verbs*

## Application design
You can find design documentation [here](https://github.com/fabien-renaud/korean-conjugator/blob/master/adr).

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/fabien-renaud/korean-conjugator/issues).

## Show your support

Give a ⭐️ if this project helped you!
