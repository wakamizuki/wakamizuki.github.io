import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeSanitize from 'rehype-sanitize';
import style from '@/styles/markdown_viewer.module.scss';

export default function MarkdownViewer({ markdown }: { markdown: string }) {
  return (
    <div className={style.markdown_viewer}>
      <ReactMarkdown
        children={markdown}
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeSanitize]}
        components={{
          a: ({href, children}) => <a href={href} target='_blank' rel='noopener'>{children}</a>,
        }}
      />
    </div>
  );
}
