declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
declare module '*.json'
declare module '*.png'
declare module '*.jpg'
declare module '*.gif'
declare module '*.jpeg'
declare module '*.webp'
declare module '*.svg'
declare module '*.styl'