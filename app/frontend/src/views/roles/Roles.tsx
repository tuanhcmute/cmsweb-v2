import React from 'react'
import { useTranslation } from 'react-i18next'
import { ReaderIcon } from '@radix-ui/react-icons'

import { DataTable, Label } from '@/components/ui'
import { usePagination, useRoles } from '@/hooks'
import { useRoleColumns } from './DataTable'

const Roles: React.FC = () => {
  const { t } = useTranslation(['roles'])
  const { pagination, handlePageChange, handlePageSizeChange } = usePagination()

  const { data: roles, isLoading } = useRoles({
    order: 'DESC',
    page: pagination.pageIndex,
    pageSize: pagination.pageSize
  })

  return (
    <div className="flex flex-col gap-4">
      <Label className="flex items-center gap-1 font-semibold text-normal text-md font-beVietNam">
        <ReaderIcon className="header-icon" />
        {t('roles.list')}
      </Label>
      <DataTable
        columns={useRoleColumns()}
        data={roles?.items || []}
        pages={roles?.totalPages || 0}
        onPageChange={handlePageChange}
        onPageSizeChange={handlePageSizeChange}
        isLoading={isLoading}
      />
    </div>
  )
}

export default Roles
