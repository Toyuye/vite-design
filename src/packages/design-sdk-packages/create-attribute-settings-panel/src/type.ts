
import type { ExtractPropTypes } from 'vue'

export const CreateAttributeSettingsPanelProps = {
  source: {
    type: String,
    default: 'mall'
  }
} as const

export type CreateAttributeSettingsPanelProps = ExtractPropTypes<typeof CreateAttributeSettingsPanelProps>

export const CreateAttributeSettingsPanelEmits = {
  
}

export type CreateAttributeSettingsPanelEmits = typeof CreateAttributeSettingsPanelEmits
