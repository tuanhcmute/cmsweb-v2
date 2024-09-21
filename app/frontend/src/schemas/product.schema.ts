import * as z from 'zod'

import { USERNAME_REGEX } from '@/constants/regex'

export const productSchema = z.object({
  createdAt: z.string().default(''),
  requestCode: z.string().min(1, 'Mã yêu cầu không hợp lệ'),
  requester: z.string().regex(USERNAME_REGEX, 'Tên người yêu cầu không hợp lệ'),
  project: z.object({
    slug: z.string().min(1, 'Mã dự án không hợp lệ'),
    name: z.string().min(1, 'Tên dự án không hợp lệ')
  }),
  site: z.object({
    slug: z.string().min(1, 'Mã công trình không hợp lệ'),
    name: z.string().min(1, 'Tên công trình không hợp lệ')
  }),
  approver: z.string().regex(USERNAME_REGEX, 'Tên người duyệt không hợp lệ'),
  products: z
    .array(
      z.object({
        createdAt: z.string().default(''),
        code: z.string().min(1, 'Mã sản phẩm không hợp lệ'),
        name: z.string().min(1, 'Tên sản phẩm không hợp lệ'),
        provider: z.string().min(1, 'Nhà cung cấp không hợp lệ'),
        unit: z.string().min(1, 'Đơn vị không hợp lệ'),
        quantity: z.number().min(1, 'Số lượng không hợp lệ'),
        description: z.string().min(1, 'Mô tả không hợp lệ'),
        status: z.string().min(1, 'Trạng thái không hợp lệ')
        // id: z.string().optional().default(''),
        // createdBy: z.string().optional().default(''),
        // productCode: z.string().min(1, 'Mã sản phẩm không hợp lệ'),
        // productName: z.string().min(1, 'Tên sản phẩm không hợp lệ'),
        // modelOrSerialNumber: z.string().min(1, 'Model hoặc Serial không hợp lệ'),
        // supplier: z.string().min(1, 'Nhà cung cấp không hợp lệ'),
        // importDate: z.string().min(1, 'Ngày nhập không hợp lệ'),
        // unit: z.string().min(1, 'Đơn vị không hợp lệ'),
        // quantity: z.string().min(1, 'Số lượng không hợp lệ'),
        // address: z.string().min(1, 'Địa chỉ không hợp lệ'),
        // note: z.string().optional().default('')
      })
    )
    .default([]),
  priority: z.string().optional().default('normal'),
  note: z.string().optional().default('')
})

export const productSearchSchema = z.object({
  productName: z.string().optional().default('')
})

export const addNewProductSchema = z.object({
  code: z.string().min(1, 'Mã sản phẩm không hợp lệ'),
  name: z.string().min(1, 'Tên sản phẩm không hợp lệ'),
  provider: z.string().min(1, 'Nhà cung cấp không hợp lệ'),
  unit: z.string().min(1, 'Đơn vị không hợp lệ'),
  quantity: z.string().min(1, 'Số lượng không hợp lệ'),
  description: z.string().min(1, 'Mô tả không hợp lệ'),
  status: z.string().min(1, 'Trạng thái không hợp lệ')
})

export const requestProdcuctSchema = z.object({
  code: z.string().min(1, 'Mã sản phẩm không hợp lệ'),
  name: z.string().min(1, 'Tên sản phẩm không hợp lệ'),
  provider: z.string().min(1, 'Nhà cung cấp không hợp lệ'),
  unit: z.string().min(1, 'Đơn vị không hợp lệ'),
  quantity: z.number().min(1, 'Số lượng không hợp lệ'),
  description: z.string().optional()
})

export type TProductSchema = z.infer<typeof productSchema>
