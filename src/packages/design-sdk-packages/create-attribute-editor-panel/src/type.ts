
import type { ExtractPropTypes } from 'vue'

export const CreateAttributeEditorPanelProps = {
  source: {
    type: String,
    default: 'mall'
  }
} as const

export type CreateAttributeEditorPanelProps = ExtractPropTypes<typeof CreateAttributeEditorPanelProps>

export const CreateAttributeEditorPanelEmits = {
  
}

export type CreateAttributeEditorPanelEmits = typeof CreateAttributeEditorPanelEmits
