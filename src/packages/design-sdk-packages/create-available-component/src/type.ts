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


interface foo {
  a: number;
  b: string;
}

type A = keyof foo;

const fooObj: foo = { a: 1, b: "1" };

for (const key in fooObj) {
  console.log(key);
  console.log(fooObj[key as keyof foo]);
}


function pickSingleValue<T>(obj: T, key: keyof T): T[keyof T] {
  return obj[key];
}



function pickSingleValueS<T extends object, U extends keyof T>(obj: T, key: U): T[U] {
  return obj[key];
}