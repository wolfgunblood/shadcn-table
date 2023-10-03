import React from 'react'
import { DataTable } from './data-table'
import { people } from '@/people'
import { columns } from './column'

type Props = {}

const People = (props: Props) => {
  return (
    <div className="container mx-auto py-10">
      <DataTable columns={columns} data={people} />
    </div>
  )
}

export default People