import type { ExtractPropTypes } from 'vue'

export const CreateMobilePhoneSimulationProps = {
  source: {
    type: String,
    default: 'mall'
  }
} as const

export type CreateMobilePhoneSimulationProps = ExtractPropTypes<typeof CreateMobilePhoneSimulationProps>

export const CreateMobilePhoneSimulationEmits = {
  
}

export type CreateMobilePhoneSimulationEmits = typeof CreateMobilePhoneSimulationEmits
