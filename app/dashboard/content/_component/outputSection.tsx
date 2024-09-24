import React, { useRef, useEffect } from 'react'
import '@toast-ui/editor/dist/toastui-editor.css';
import { Editor } from '@toast-ui/react-editor';
import { Button } from '@/components/ui/button';
import { Copy } from 'lucide-react';

interface PROPS{
    aiOutput:string
}

function OutputSection({aiOutput}:PROPS) {
    const editorRef:any = useRef()
    useEffect(()=>{
        const setInstance = editorRef.current.getInstance()
        setInstance.setMarkdown(aiOutput)
    },[aiOutput])
    return (
        <div className='shadow-md border rounded-lg bg-white'>
            <div className='flex justify-between items-center p-5'>
                <h2 className='font-bold'>Your Result</h2>
                <Button className='text-sm'><Copy/>Copy</Button>
            </div>
            <Editor
            ref={editorRef}
                initialValue="Your result will appear here!"
                height="450px"
                initialEditType="wysiwyg"
                useCommandShortcut={true}
                onChange={()=>console.log(editorRef.current.getInstance().getMarkdown())}
            />
        </div>
    )
}

export default OutputSection