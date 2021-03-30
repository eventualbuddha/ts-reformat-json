# ts-reformat-json

This is an example repo demonstrating a bug/design choice in TypeScript in which
it will reformat JSON files copied from sources to an `outDir`. It seems to do
this by using 4-space indenting and ensuring a trailing newline.

## Try it out

```sh
$ npm install
…
$ npm test

> ts-reformat-json@1.0.0 test
> echo Original; ts-node src/index.ts; tsc; echo Compiled; node dist/index.js

Original
6df3be5b276bce2a13717dcc4d56594fabab5dd50285e4b144328a6546bab69c
{
  "hello": "world"
}

Compiled
8c91c97296861a8e91702ab0d820c93ca1152fc79ba901ab23118c7f70963155
{
    "hello": "world"
}
```

The output above shows the sha256 hashes of the original and compiled `data.json`
files. I believe that, as TypeScript has no need to reformat the JSON file and a
library or application author may have a desire to maintain the same bytes on
disk, the data should match after TypeScript "copies" the files.
