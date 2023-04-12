export function getPostCategoryIds(ids: string) {
  return ids.split(',').map((id) => Number(id));
}
