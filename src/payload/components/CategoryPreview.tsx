import { Category } from '@/payload-types';
import React from 'react'

type Props = {
  value: Category;
}

const CategoryPreview = ({ value }: Props) => {
  if (!value) return null;
  return <div>{value.title}</div>;
}

export default CategoryPreview