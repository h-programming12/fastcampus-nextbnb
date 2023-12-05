'use client'

import { filterState } from '@/atom'
import { CATEGORY_DATA } from '@/constants'
import { useRecoilState } from 'recoil'

import cn from 'classnames'

export default function CategoryList() {
  const [filterValue, setFilterValue] = useRecoilState(filterState)
  return (
    <div className="flex gap-6 fixed top-20 inset-x-0 mx-auto overflow-x-scroll w-full flex-nowrap sm:pl-24 sm:pr-16 px-2 bg-white z-1 mb-6">
      {CATEGORY_DATA?.map((category) => (
        <button
          type="button"
          key={category.title}
          onClick={() =>
            setFilterValue({
              ...filterValue,
              category: category.title,
            })
          }
          className={cn(
            'flex-none text-gray-500 hover:text-gray-700 gap-3 justify-center py-4 w-16 text-center',
            {
              'text-black font-semibold underline underline-offset-8':
                filterValue.category === category.title,
            },
          )}
        >
          <div className="flex-col flex justify-center gap-3">
            <div className="text-2xl mx-auto">
              <category.Icon />
            </div>
            <div className="text-gray-700 text-xs text-center">
              {category.title}
            </div>
          </div>
        </button>
      ))}
    </div>
  )
}
