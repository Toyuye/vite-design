import type { ExtractPropTypes } from 'vue'

export const createHeaderBarProps = {
  source: {
    type: String,
    default: 'mall'
  }
} as const

export type CreateHeaderBarProps = ExtractPropTypes<typeof createHeaderBarProps>

export const createHeaderBarEmits = {
  
}

export type CreateHeaderBarEmits = typeof createHeaderBarEmits
