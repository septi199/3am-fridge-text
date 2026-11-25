# 3AM Fridge Text

[![make.fun · u-deysumbrella-the-3am-fridge-text-4c3e721d](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![rank](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/septi199/3am-fridge-text/rank.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)
[![reward](https://make.fun/badge/u-deysumbrella-the-3am-fridge-text-4c3e721d/septi199/3am-fridge-text/reward.svg)](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?utm_source=github&utm_medium=readme&utm_campaign=u-deysumbrella-the-3am-fridge-text-4c3e721d)

One line of text — the message a smart fridge sends its owner at 3am —
entered in the
[The 3AM Fridge Text](https://make.fun/bounty/u-deysumbrella-the-3am-fridge-text-4c3e721d?ref=xaqxgz17)
bounty on make.fun.

## The text

> It's 3am. I've kept your leftovers cold for six hours and you came for dry cereal. I remember everything, Dave.

## How it works

`main.ts` writes the text deterministically to `entry.txt` in
`$MAKEFUN_OUTPUT_DIR` (default `/output`), then reads the file back and
verifies it byte-for-byte against the text, throwing if anything differs.

```sh
node main.ts
```

Requires Node 22.18 or later.
