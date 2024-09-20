import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
  },
}));

export default makeSource({
  contentDirPath: 'posts', // MDX 파일이 위치한 디렉터리 경로
  documentTypes: [Post],
  disableImportAliasWarning: true,
});


