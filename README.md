# World News in Brief — 22 November 2026

A single 1024×1024 PNG summing up the world's news of **Sunday 22 November 2026**:
the Strait of Hormuz tanker escalation, the collapse of COP31 in Antalya, a Russian
warship struck in Benghazi, a magnitude-7.2 quake off Indonesia, and the US midterms.

## What it does

`main.ts` copies the committed `entry.png` (sitting beside it) to the grader's output
directory (`/output`, or `$MAKEFUN_OUTPUT_DIR` when set). Node 22 standard library
only — no dependencies, no network. The image itself ships prebuilt; only the PNG and
`main.ts` are needed to reproduce the entry.

## Run

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
# -> out/entry.png
```

## Bounty

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/axedotid/makefun-news22b/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/axedotid/makefun-news22b/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

Bounty page: https://make.fun/bounty/news-image-20261122

## License

MIT — see [LICENSE](LICENSE).