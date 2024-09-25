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
import { AIOutput } from '@/utils/schema'
import { db } from '@/utils/db'
import { useUser } from '@clerk/clerk-react'
import moment from 'moment'


interface PROPS {
  params: {
    'template-content': string
  }
}
function TemplateContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = template?.find((item) => item.slug == props.params['template-content'])
  const [loading, setLoading] = useState(false)
  const [aiOutput, setAiOutput] = useState<string>('')
  const { user } = useUser()
  const generateAIContent = async (val:any) => {
    setLoading(true)
    const selectedPrompt = selectedTemplate?.aiPrompt
    const finalPrompt = JSON.stringify(val) + "," + selectedPrompt
    const result = await chatSession.sendMessage(finalPrompt);
    setAiOutput(result?.response?.text())
    await saveInDb(val, selectedTemplate?.slug, result?.response?.text())
    setLoading(false)
  }

  const saveInDb = async (formData:any, slug: any, aiRes: any) => {
    const result = await db?.insert(AIOutput)?.values({
      formData: formData,
      templateSlug: slug,
      aiResponse: aiRes,
      createdBy: user?.primaryEmailAddress?.emailAddress,
      createdAt: moment().format("DD/MM/YYYY")


    })
    console.log(result)
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
          <OutputSection aiOutput={aiOutput} />
        </div>
      </div>
    </div>
  )
}

export default TemplateContent