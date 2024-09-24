"use client"
import React, { useEffect } from 'react'
import FormSection from '../_component/formSection'
import OutputSection from '../_component/outputSection'
import { TEMPLATE } from '../../_components/SearchTemplateSection'
import template from '@/app/(data)/template'
interface PROPS{
    params:{
        'template-content':string
    }
}
function TemplateContent(props:PROPS) {
  const selectedTemplate:TEMPLATE|undefined = template?.find((item)=>item.slug==props.params['template-content'])

  const generateAIContent = (val:any)=>{}

  return (
    <div className='grid grid-cols-1 md:grid-cols-3 gap-5 p-5'>
        {/* form section */}
        <FormSection selectedTemplate={selectedTemplate} useFormInput={(val:any)=>generateAIContent(val)}/>

        {/* output section */}
        <div className='col-span-2'>
        <OutputSection/>
        </div>
    </div>
  )
}

export default TemplateContent