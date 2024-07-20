import type { FieldHook } from 'payload/types';

const format = (val: string): string =>
  val
    .replace(/ /g, '-')
    .replace(/[^\w-]+/g, '')
    .toLowerCase();

const formatSlug =
  (fallback: string, useCategory: boolean = false): FieldHook =>
  async (props) => {
    const { operation, value, originalDoc, data, req } = props;
    let slugValue = value;

    if (typeof slugValue === 'string') {
      slugValue = format(slugValue);
    } else if (operation === 'create') {
      const fallbackData = data?.[fallback] || originalDoc?.[fallback];
      if (fallbackData && typeof fallbackData === 'string') {
        slugValue = format(fallbackData);
      }
    }

    if (useCategory && data?.category) {
      const resp = await req.payload.find({
        collection: 'categories',
        where: {
          id: {
            equals: data.category,
          },
        },
      });
      const category = resp.docs[0];
      console.log({ category });
      const categorySlug = format(category.title);
      slugValue = `${categorySlug}/${slugValue}`;
    }

    return slugValue;
  };

export default formatSlug;
