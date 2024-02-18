import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import { initialContent } from './InitialContent';
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import { lowlight } from 'lowlight'
import html from 'highlight.js/lib/languages/xml'

lowlight.registerLanguage('html', html)

interface EditorProps {}

export function Editor() {
    const editor = useEditor({
      extensions: [StarterKit,
        CodeBlockLowlight.configure({
          lowlight,
        }),
      ],
      content: initialContent,
      editorProps: {
        attributes: {
          class:'outline-none'
        }
      }
    });

  return (
    <EditorContent 
      editor={editor} 
      className="max-w-[700px] mx-auto pt-16 prose prose-violet"
    />
  );
}
