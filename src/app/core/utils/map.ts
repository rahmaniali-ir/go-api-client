export function mapToArray<K, V>(map: Map<K, V>) {
  return [...map].map(([_, v]) => v);
}
