"use client"
import React, { useState } from 'react'
import { TEMPLATE } from '../../_components/SearchTemplateSection'
import Image from 'next/image'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

interface PROPS {
    selectedTemplate: TEMPLATE | undefined
    useFormInput: any
}
function FormSection({ selectedTemplate, useFormInput }: PROPS) {
    const [formData, setFormData] = useState<object>()
    const handleInputChange = (e: any) => {
        const { name, value } = e.target
        setFormData({ ...formData, [name]: value })
    }
    const onSubmit = (e: any) => {
        e.preventDefault();
        useFormInput(formData)
    }
    return (
        <div>
            <Link href={"/dashboard"}>
            <Button className='mb-4 ml-1'><ArrowLeft/>Back</Button>
            </Link>
            <div className='p-5 shadow-md border rounded-lg bg-white'>
                {/* @ts-ignore */}
                <Image src={selectedTemplate?.icon} alt='icon' width={70} height={70} />
                <h2 className='font-bold text-2xl mb-2 text-primary'>{selectedTemplate?.name}</h2>
                <p className='text-gray-500 text-sm'>{selectedTemplate?.desc}</p>
                <form className='mt-3' onSubmit={onSubmit}>
                    {selectedTemplate?.form?.map((item, index) => (
                        <div className='my-2 flex flex-col gap-2 mb-3'>
                            <label className='font-bold'>{item.label}</label>
                            {item.field == "input" ?
                                <Input name={item.name} required={item.required} onChange={(e) => handleInputChange(e)} />
                                : item.field == "textarea" ?
                                    <Textarea name={item.name} required={item.required} onChange={(e) => handleInputChange(e)} /> : null}
                        </div>
                    ))}
                    <Button className='w-full py-6'>Generate Content</Button>
                </form>
            </div>
        </div>
    )
}

export default FormSection