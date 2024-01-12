import clsx from 'clsx';
import serialize from '../_lib/seralize';

type Props = {
  className?: string;
  content: any;
};

export function Prose({ className, content, ...props }: Props) {
  if (!content) return <></>;

  return (
    <div className={clsx(className, 'prose lg:prose-md dark:prose-invert')} {...props}>
      {serialize(content)}
    </div>
  );
}
