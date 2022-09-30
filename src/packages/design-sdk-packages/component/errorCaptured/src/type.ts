import type { ExtractPropTypes } from 'vue'

export const errorCapturedProps = {
  name: {
    type: String,
    default: ''
  }
} as const

export type ErrorCapturedProps = ExtractPropTypes<typeof errorCapturedProps>

export const errorCapturedEmits = {
  
}

export type ErrorCapturedEmits = typeof errorCapturedEmits



