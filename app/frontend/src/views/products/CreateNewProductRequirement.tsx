import React, { useEffect, useState } from 'react'

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  DataTableProduct
} from '@/components/ui'
import { columns } from './DataTable/columns'
import { SpinnerLoading } from '@/components/app/loading'
import { IMaterialInfo } from '@/types'
import { FormCreateProduct } from '@/components/app/form'
import { ProgressBar } from '@/components/app/progress/progress-bar'

const Products: React.FC = () => {
  const [data, setData] = useState<IMaterialInfo[]>([])
  const [loading, setLoading] = useState<boolean>(true)

  async function getData(): Promise<IMaterialInfo[]> {
    return [
      {
        id: '728ed52f',
        createdBy: 'Lê Thành Nghĩa',
        createdAt: new Date('2021-09-01T00:00:00Z'),
        commanderApprovalStatus: 'Đã duyệt',
        commanderApprovalContent: 'Duyệt yêu cầu vật tư',
        projectManagerApprovalStatus: 'Đã duyệt',
        projectManagerApprovalContent: 'Duyệt yêu cầu vật tư',
        directorApprovalStatus: 'Đã duyệt',
        directorApprovalContent: 'Duyệt yêu cầu vật tư',
        notes: 'Yêu cầu vật tư gấp'
      }
    ]
  }

  useEffect(() => {
    getData().then((data) => {
      setData(data)
      setLoading(false)
    })
  }, [])

  return (
    <div
      className="relative flex items-start flex-1 rounded-lg shadow-none"
      x-chunk="dashboard-02-chunk-1"
    >
      {loading && <SpinnerLoading />}
      <div className="grid items-start w-full gap-8 mx-auto">
        <ProgressBar />
        <div className="grid w-full gap-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between w-full border-b">
              <div className="flex flex-col items-start gap-2">
                <CardTitle>Yêu cầu vật tư</CardTitle>
                <CardDescription>Công ty Cổ phần Công nghệ Mekong</CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col">
              {/* <DataTableProduct columns={columns} data={data} /> */}
              <FormCreateProduct />
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}

export default Products