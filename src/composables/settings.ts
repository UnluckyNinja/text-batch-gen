import { defu } from 'defu'

function defaultValue(){
  return {
    input: {
      skipEmpty: true,
      trim: true,
      separator: '\\t',
      separatorRegex: false,
    },
    template: {
      trim: true
    },
    join: {
      prelb: true,
      separator: '',
      postlb: true
    }
  }
}

const settings = useStorage('settings', defaultValue(), localStorage, {
  mergeDefaults(storage, defaluts){
    return defu(storage, defaluts)
  }
})

export function useSettings(){
  const reset = () => settings.value = defaultValue()
  return { settings, reset}
}