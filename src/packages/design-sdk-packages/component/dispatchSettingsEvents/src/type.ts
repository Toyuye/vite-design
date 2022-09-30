import type { ExtractPropTypes } from 'vue'

export const dispatchSettingsEventsProps = {
  name: {
    type: String,
    default: ''
  }
} as const

export type DispatchSettingsEventsProps = ExtractPropTypes<typeof dispatchSettingsEventsProps>

export const dispatchSettingsEventsEmits = {
  
}

export type DispatchSettingsEventsEmits = typeof dispatchSettingsEventsEmits



