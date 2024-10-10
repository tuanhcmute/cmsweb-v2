import React from 'react'
import { useTranslation } from 'react-i18next'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui'
import { CreateAuthorityForm } from '@/components/app/form'
import { TCreateAuthoritySchema } from '@/schemas'
import { ICreateAuthority } from '@/types'
import { useCreateAuthority } from '@/hooks'
import toast from 'react-hot-toast'

const CreateSite: React.FC = () => {
  const { t } = useTranslation(['companies'])
  const mutation = useCreateAuthority()

  const onSubmit = (values: TCreateAuthoritySchema) => {
    const requestData = { ...values } as ICreateAuthority
    mutation.mutate(requestData, {
      onSuccess: () => {
        toast.success(t('authorities.createAuthoritySuccessfully'))
      }
    })
  }

  return (
    <div className="flex flex-col gap-4">
      <Card>
        <CardHeader className="flex flex-row justify-between items-center w-full border-b">
          <div className="flex flex-col gap-2 items-start py-2">
            <CardTitle>{t('authorities.createAuthority')}</CardTitle>
            <CardDescription>{t('authorities.CreateAuthorityDescription')}</CardDescription>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col">
          <CreateAuthorityForm onSubmit={onSubmit} />
        </CardContent>
      </Card>
    </div>
  )
}

export default CreateSite
