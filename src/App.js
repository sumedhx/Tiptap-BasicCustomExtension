import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import './App.css';

function App() {
  const editor = useEditor({
    extensions: [StarterKit],
    content: '<p>Hello, this is a sleek text editor with a modern toolbar!</p>',
  });

  if (!editor) {
    return <p>Loading Editor...</p>;
  }

  return (
    <div className="editor-container">
      <div className="editor-wrapper">
        {/* Toolbar */}
        <div className="toolbar">
          <button 
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'active' : ''}
          >
            Bold
          </button>
          <button 
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'active' : ''}
          >
            Italic
          </button>
          <button 
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'active' : ''}
          >
            Strike
          </button>
          <button onClick={() => editor.chain().focus().undo().run()}>
            Undo
          </button>
          <button onClick={() => editor.chain().focus().redo().run()}>
            Redo
          </button>
        </div>

        {/* Editor */}
        <EditorContent editor={editor} className="tiptap-editor" />
      </div>
      <footer> By <a target='new' href="https://github.com/sumedhx/">Sumedh</a></footer>
    </div>
  );
}

export default App;
