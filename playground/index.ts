/* eslint-disable @typescript-eslint/no-unused-vars */
import type { IsInclude } from '../src'

type A = [1, 2, 3, 4, 5]
type B = 3

type Test = IsInclude<A, B> // true

