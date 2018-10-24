import { fromPairs } from 'ramda';

export function mapKeys<K1 extends string, K2 extends string, V>(
  obj: Record<K1, V>,
  f: ((_: K1) => K2)
): Record<K2, V> {
  return fromPairs(
    Object.entries(obj).map(([k, v]) => [f(k), v] as [K2, V])
  ) as Record<K2, V>;
}
