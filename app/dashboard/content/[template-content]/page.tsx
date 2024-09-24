"use client"
import React, { useEffect } from 'react'
import FormSection from '../_component/formSection'
import OutputSection from '../_component/outputSection'
import { TEMPLATE } from '../../_components/SearchTemplateSection'
import template from '@/app/(data)/template'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import { chatSession } from '@/utils/aiGenerate'
import { useState } from 'react'
interface PROPS {
  params: {
    'template-content': string
  }
}
function TemplateContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = template?.find((item) => item.slug == props.params['template-content'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('')
  const generateAIContent = async (val: any) => {
    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(val) + "," + selectedPrompt
    const result = await chatSession.sendMessage(finalPrompt);
    console.log(result.response.text());
    setAiOutput(result.response.text())
    setLoading(false)
  }

  return (
    <div className='p-3'>
      <Link href={"/dashboard"}>
        <Button className=' ml-5'><ArrowLeft />Back</Button>
      </Link>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-4'>

        {/* form section */}
        <FormSection selectedTemplate={selectedTemplate} useFormInput={(val: any) => generateAIContent(val)} loading={loading} />

        {/* output section */}
        <div className='col-span-2'>
          <OutputSection aiOutput={aiOutput}/>
        </div>
      </div>
    </div>
  )
}

export default TemplateContent