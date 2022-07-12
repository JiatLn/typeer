# Typeer

[![NPM version](https://img.shields.io/npm/v/typeer?color=a1b858&label=)](https://www.npmjs.com/package/typeer)
 
> TODO

### Install

```bash
npm i typeer
```

### Usage

```ts
import type { IsEqual } from 'typeer'

type A = [1, 2, 3, 4, 5]
type B = 3

type Test = IsInclude<A, B> // true
```

#### Is

- IsAny<T>
- IsNumber<T>
- IsNever<T>
- IsEqual<T, U>
- IsInclude<T extends any[], U>

## License

[MIT](./LICENSE) License © 2022 [JiatLn](https://github.com/JiatLn)
