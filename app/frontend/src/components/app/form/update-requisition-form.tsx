import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useTranslation } from 'react-i18next'
import { format } from 'date-fns'
import { cn } from '@/lib/utils'
import { CalendarIcon } from 'lucide-react'

import {
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
  Input,
  Form,
  Button,
  Textarea,
  PopoverTrigger,
  Popover,
  PopoverContent,
  Calendar,
  // DataTableRequisition,
  DataTable
} from '@/components/ui'
import { productRequisitionSchema, TProductRequisitionSchema } from '@/schemas'
import { SelectProject, RequestPrioritySelect } from '@/components/app/select'

import { zodResolver } from '@hookform/resolvers/zod'
import {
  IProductRequisitionFormInfo,
  IProductRequisitionInfo,
  IUpdateProductRequisitionQuantity,
  ProductRequisitionType
} from '@/types'
import { DateTimePicker } from '@/components/app/picker'
import { useColumnsUpdateRequisition } from '@/views/product-requisitions/data-table/columns/columnsUpdateRequisition'

interface IUpdateRequisitionFormProps {
  requisition: IProductRequisitionFormInfo
  onUpdateProductSubmit: (data: IUpdateProductRequisitionQuantity) => void
  onDeleteProductSubmit: (requestProductSlug: string) => void
  isLoading: boolean
}

export const UpdateRequisitionForm: React.FC<IUpdateRequisitionFormProps> = ({
  onUpdateProductSubmit,
  onDeleteProductSubmit,
  requisition,
  isLoading
}) => {
  const { t } = useTranslation('productRequisition')

  const [date, setDate] = useState<Date | undefined>(
    requisition?.deadlineApproval ? new Date(requisition.deadlineApproval) : undefined
  )

  const validateDate = (selectedDate: Date | undefined) => {
    if (!selectedDate) return false
    const now = new Date()
    return selectedDate > now
  }

  const form = useForm<TProductRequisitionSchema>({
    resolver: zodResolver(productRequisitionSchema),
    defaultValues: {
      code: requisition?.code || '',
      requester: requisition?.creator.fullname || '',
      deadlineApproval: requisition?.deadlineApproval
        ? format(new Date(requisition.deadlineApproval), 'yyyy-MM-dd HH:mm:ss')
        : undefined,
      company: {
        slug: requisition?.creator.userDepartments[0]?.department?.site?.company?.slug || '',
        name: requisition?.creator.userDepartments[0]?.department?.site?.company?.name || ''
      },
      site: {
        slug: requisition?.creator.userDepartments[0]?.department?.site?.slug || '',
        name: requisition?.creator.userDepartments[0]?.department?.site?.name || ''
      },
      type: requisition?.type || 'normal',
      requestProducts: requisition?.requestProducts || [],
      userApprovals: requisition?.userApprovals || [],
      project: {
        slug: requisition?.project.slug || '',
        name: requisition?.project.name || ''
      },
      note: requisition?.description || ''
    }
  })

  useEffect(() => {
    if (requisition) {
      form.reset({
        code: requisition.code || '',
        requester: requisition.creator.fullname || '',
        deadlineApproval: requisition.deadlineApproval
          ? format(new Date(requisition.deadlineApproval), 'yyyy-MM-dd HH:mm:ss')
          : undefined,
        company: {
          slug: requisition.creator.userDepartments[0]?.department?.site?.company?.slug || '',
          name: requisition.creator.userDepartments[0]?.department?.site?.company?.name || ''
        },
        site: {
          slug: requisition.creator.userDepartments[0]?.department?.site?.slug || '',
          name: requisition.creator.userDepartments[0]?.department?.site?.name || ''
        },
        type: requisition.type || 'normal',
        requestProducts: requisition.requestProducts || [],
        userApprovals: requisition.userApprovals || [],
        project: {
          slug: requisition.project.slug || '',
          name: requisition.project.name || ''
        },
        note: requisition.description || ''
      })
      setDate(requisition.deadlineApproval ? new Date(requisition.deadlineApproval) : undefined)
    }
  }, [requisition, form])

  const handleEditProduct = (product: IUpdateProductRequisitionQuantity) => {
    onUpdateProductSubmit(product)
  }

  const handleDeleteProduct = (requestProductSlug: string) => {
    onDeleteProductSubmit(requestProductSlug)
  }

  const columns = useColumnsUpdateRequisition(handleEditProduct, handleDeleteProduct)

  const handleChoosePriority = (value: ProductRequisitionType) => {
    form.setValue('type', value)
  }

  const formFields = {
    code: (
      <FormField
        control={form.control}
        name="code"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.requestCode')}</FormLabel>
            <FormControl>
              <Input readOnly {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    type: (
      <FormField
        control={form.control}
        name="type"
        render={() => (
          <FormItem>
            <FormLabel>{t('productRequisition.priority')}</FormLabel>
            <FormControl>
              <RequestPrioritySelect
                defaultValue={form.getValues('type')}
                onChange={handleChoosePriority as (value: string) => void}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    deadlineApproval: (
      <FormField
        control={form.control}
        name="deadlineApproval"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.deadlineApproval')}</FormLabel>
            <Popover>
              <PopoverTrigger asChild>
                <FormControl>
                  <Button
                    variant={'outline'}
                    className={cn(
                      'w-full justify-start text-left font-normal',
                      !field.value && 'text-muted-foreground'
                    )}
                  >
                    <CalendarIcon className="w-4 h-4 mr-2" />
                    {field.value ? field.value : <span>Chọn ngày và thời gian</span>}
                  </Button>
                </FormControl>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={(newDate) => {
                    if (newDate) {
                      const newDateTime = date
                        ? new Date(
                            date.setFullYear(
                              newDate.getFullYear(),
                              newDate.getMonth(),
                              newDate.getDate()
                            )
                          )
                        : newDate
                      if (validateDate(newDateTime)) {
                        setDate(newDateTime)
                        field.onChange(format(newDateTime, 'yyyy-MM-dd HH:mm:ss'))
                      }
                    }
                  }}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
                <DateTimePicker
                  date={date}
                  setDate={(newDate) => {
                    if (newDate && validateDate(newDate)) {
                      setDate(newDate)
                      field.onChange(format(newDate, 'yyyy-MM-dd HH:mm:ss'))
                    }
                  }}
                />
              </PopoverContent>
            </Popover>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    requester: (
      <FormField
        control={form.control}
        name="requester"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.requester')}</FormLabel>
            <FormControl>
              <Input
                readOnly
                placeholder={t('productRequisition.requesterDescription')}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    company: (
      <FormField
        control={form.control}
        name="company.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.companyName')}</FormLabel>
            <FormControl>
              <Input readOnly {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    site: (
      <FormField
        control={form.control}
        name="site.name"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.constructionSite')}</FormLabel>
            <FormControl>
              <Input readOnly {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    project: (
      <FormField
        control={form.control}
        name="project"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.projectName')}</FormLabel>
            <FormControl>
              <SelectProject
                defaultValue={form.getValues('project').slug}
                value={field.value.slug} // Add this line
                onChange={(slug: string, name: string) => field.onChange({ slug, name })}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    ),
    note: (
      <FormField
        control={form.control}
        name="note"
        render={({ field }) => (
          <FormItem>
            <FormLabel>{t('productRequisition.note')}</FormLabel>
            <FormControl>
              <Textarea
                placeholder={t('productRequisition.noteDescription')}
                defaultValue={requisition?.description}
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    )
  }

  return (
    <div className="mt-3">
      <Form {...form}>
        <form className="space-y-6">
          <div className="grid grid-cols-1 gap-2">
            {Object.keys(formFields).map((key) => (
              <React.Fragment key={key}>
                {formFields[key as keyof typeof formFields]}
              </React.Fragment>
            ))}
          </div>
        </form>
      </Form>
      <DataTable
        isLoading={isLoading}
        columns={columns}
        data={requisition?.requestProducts || []}
        // page={1}
        pages={1}
        // pageSize={requisition?.requestProducts?.length || 0}
        onPageChange={() => {}}
        onPageSizeChange={() => {}}
      />
      {/* <DataTableRequisition
        isLoading={isLoading}
        columns={columns}
        data={requisition?.requestProducts || []}
        page={1}
        pages={1}
        pageSize={requisition?.requestProducts?.length || 0}
        onPageChange={() => {}}
      /> */}
    </div>
  )
}