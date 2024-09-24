import template from '@/app/(data)/template'
import React, { useEffect, useState } from 'react'
import TemplateCard from './TemplateCard'

export interface TEMPLATE {
    name: string,
    desc: string,
    icon: string,
    category: string,
    slug: string,
    aiPrompt: string,
    form?: FORM[]
}

export interface FORM {
    label: string,
    field: string,
    name: string,
    required?: boolean
}

function SearchTemplateSection({ onSearchInput }: any) {
    const [searchTemplate, setSearchTemplate] = useState(template)

    useEffect(() => {
        if (onSearchInput) {
            const filterSeach = template.filter(item => 
                item.name.toLowerCase().includes(onSearchInput.toLowerCase())
            )
            setSearchTemplate(filterSeach)

        }
        else{
            setSearchTemplate(template)
        }
    }, [onSearchInput])
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 p-10'>
            {
                searchTemplate.map((item: TEMPLATE, index: number) => (
                    <TemplateCard {...item} />
                ))
            }
        </div>
    )
}

export default SearchTemplateSection