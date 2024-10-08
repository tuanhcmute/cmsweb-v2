// import {
//   Tabs,
//   TabsContent,
//   TabsList,
//   TabsTrigger,
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle
// } from '@/components/ui'
// import RequisitionStage1Table from '../table/requisition-stage-1-table'
// import { usePagination, useProductRequisitionByApprover } from '@/hooks'

// export function RequisitionsTab() {
//   const { pagination, handlePageChange, handlePageSizeChange } = usePagination()
//   const { data, isLoading } = useProductRequisitionByApprover({
//     page: pagination.pageIndex + 1,
//     pageSize: pagination.pageSize
//   })

//   console.log('data in tab', data?.result.items)
//   const filteredForms = data?.result.items
//     .map((item) => item.productRequisitionForm)
//     .flat()
//     .filter((form) => form.status === 'waiting' && form.isRecalled === false)

//   console.log('Filtered and grouped forms:', filteredForms)
//   return (
//     <Tabs defaultValue="not-approved" className="w-full">
//       <TabsList className="flex justify-end gap-2 space-x-2">
//         {/* Chia tab trigger thành 4 phần và dồn về cạnh phải */}
//         <TabsTrigger value="not-approved" className="w-fit">
//           Chưa duyệt
//         </TabsTrigger>
//         <TabsTrigger value="waiting-approval" className="w-fit">
//           Đang xét duyệt
//         </TabsTrigger>
//         <TabsTrigger value="approved" className="w-fit">
//           Đã duyệt
//         </TabsTrigger>
//         <TabsTrigger value="rejected" className="w-fit">
//           Từ chối
//         </TabsTrigger>
//       </TabsList>
//       <TabsContent value="not-approved" className="w-full">
//         {/* Tab content chiếm full width */}
//         <Card className="w-full border-none">
//           <CardHeader>
//             <CardTitle>Đang xét duyệt</CardTitle>
//             <CardDescription>Danh sách các yêu cầu đang xét duyệt</CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <RequisitionStage1Table />
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="waiting-approval" className="w-full">
//         {/* Tab content chiếm full width */}
//         <Card className="w-full border-none">
//           <CardHeader>
//             <CardTitle>Đang xét duyệt</CardTitle>
//             <CardDescription>
//               Change your password here. After saving, you'll be logged out.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <RequisitionStage1Table />
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="approved" className="w-full">
//         {/* Tab content chiếm full width */}
//         <Card className="w-full border-none">
//           <CardHeader>
//             <CardTitle>Đã duyệt</CardTitle>
//             <CardDescription>
//               Change your password here. After saving, you'll be logged out.
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-2">
//             <RequisitionStage1Table />
//           </CardContent>
//         </Card>
//       </TabsContent>
//       <TabsContent value="rejected" className="w-full">
//         {/* Tab content chiếm full width */}
//         <Card className="w-full border-none">
//           <CardHeader>
//             <CardTitle>Từ chối</CardTitle>
//             <CardDescription>
//               Change your password here. After saving, you'll be logged out.
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <RequisitionStage1Table />
//           </CardContent>
//         </Card>
//       </TabsContent>
//     </Tabs>
//   )
// }
