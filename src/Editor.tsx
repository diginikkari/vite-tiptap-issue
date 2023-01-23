import Placeholder from '@tiptap/extension-placeholder';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';

export const TipTapEditor = () => {
    const editor = useEditor({
        extensions: [
            StarterKit,
            Placeholder.configure({ placeholder: 'Start writing' }),
        ],
        content: '<p>Hello World!</p>',
    });

    return <EditorContent editor={editor} />;
};

export default TipTapEditor;
