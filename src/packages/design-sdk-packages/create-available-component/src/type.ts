import type { ExtractPropTypes } from 'vue'

export const createAvailableComponentProps = {
  source: {
    type: String,
    default: 'mall'
  }
} as const

export type CreateAvailableComponentProps = ExtractPropTypes<typeof createAvailableComponentProps>

export const createAvailableComponentEmits = {
  
}

export type CreateAvailableComponentEmits = typeof createAvailableComponentEmits
