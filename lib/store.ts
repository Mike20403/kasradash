import { create } from "zustand"
import { persist } from "zustand/middleware"

interface SettingsState {
  name: string
  email: string
}

interface SettingsStore {
  settings: SettingsState
  updateSettings: (settings: Partial<SettingsState>) => void
  resetSettings: () => void
}

const initialSettings: SettingsState = {
  name: "",
  email: "",
}

export const useSettingsStore = create<SettingsStore>()(
  persist(
    (set) => ({
      settings: initialSettings,
      updateSettings: (newSettings) =>
        set((state) => ({
          settings: { ...state.settings, ...newSettings },
        })),
      resetSettings: () => set({ settings: initialSettings }),
    }),
    {
      name: "settings-storage",
    },
  ),
)
