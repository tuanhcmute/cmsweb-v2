import { ColumnDef } from '@tanstack/react-table'

import {
  Button,
  DataTableColumnHeader,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui'
import { IRole } from '@/types'
import { MoreHorizontal } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import { DialogAddRolePermission } from '@/components/app/dialog'

export const useRoleColumns = (): ColumnDef<IRole>[] => {
  const { t } = useTranslation('roles')
  return [
    {
      accessorKey: 'slug',
      header: ({ column }) => <DataTableColumnHeader column={column} title="Mã chức vụ" />
    },
    {
      accessorKey: 'nameDisplay',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('roles.nameDisplay')} />
      ),
      cell: ({ row }) => {
        const { nameDisplay, nameNormalize } = row.original
        return <div className="">{`${nameDisplay} (${nameNormalize})`}</div>
      }
    },
    {
      accessorKey: 'permissions',
      header: ({ column }) => (
        <DataTableColumnHeader column={column} title={t('roles.permissions')} />
      ),
      cell: ({ row }) => {
        const { rolePermissions } = row.original
        const permissions: JSX.Element[] = rolePermissions.map((item) => {
          return <div>{`(${item?.permission.authority}, ${item?.permission.resource})`}</div>
        })
        return <div className="font-bold flex flex-col gap-1">{permissions}</div>
      }
    },

    {
      id: 'actions',
      header: t('roles.actions'),
      cell: ({ row }) => {
        const role = row.original
        return (
          <div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="w-8 h-8 p-0">
                  <span className="sr-only">Thao tác</span>
                  <MoreHorizontal className="w-4 h-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>{t('roles.edit')}</DropdownMenuItem>
                <DialogAddRolePermission role={role} />
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        )
      }
    }
  ]
}