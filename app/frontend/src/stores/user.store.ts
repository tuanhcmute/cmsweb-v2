import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { IUserInfoPermissionsStore, IUserPermission, IUserStore } from '@/types'
import { IUserInfo } from '@/types'

export const useUserStore = create<IUserStore>()(
  persist(
    (set) => ({
      userInfo: undefined,
      setUserInfo: (userInfo?: IUserInfo) => set({ userInfo }),
      removeUserInfo: () => set({ userInfo: undefined })
    }),
    {
      name: 'user-storage' // Key for storage
    }
  )
)

export const useUserInfoPermissionsStore = create<IUserInfoPermissionsStore>()(
  persist(
    (set) => ({
      userRoles: [],
      setUserRoles: (roles: IUserPermission[]) => set({ userRoles: roles }),
      clearUserRoles: () => {
        set({ userRoles: [] })
      }
    }),
    {
      name: 'user-info-permissions-storage'
    }
  )
)
