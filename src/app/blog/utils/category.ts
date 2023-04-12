export function getArticleCategoryIds(ids: string) {
  return ids.split(',').map((id) => Number(id));
}
