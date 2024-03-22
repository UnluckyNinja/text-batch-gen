const inputData = useStorage('rawData','')
const regexPairs = useStorage('regexPairs',[] as string[][]).value
const template = useStorage('template','')
const regexPairsSize = useStorage('regexPairsSize', 0)
const output = useStorage('output', '')

/** 
 * 流程：先获取所有模版占位符，然后遍历输入，根据单行输入元素数量进行替换，替换时先对元素预处理
 * 
 */
export function generateOutput() {
  const { settings: options } = useSettings()

  const lines = inputData.value.trim().split('\n')
  const results: string[] = []
  lines.forEach(line => {
    if (line.trim() === '' && options.value.input.skipEmpty) {
      return
    }

    if (options.value.input.trim) {
      line = line.trim()
    }
    let delimiter
    if (options.value.input.separatorRegex) {
      delimiter = new RegExp(options.value.input.separator)
    } else {
      delimiter = options.value.input.separator
    }
    let eles = line.split(delimiter)
    let temp = template.value
    if (options.value.template.trim) {
      temp = temp.trim()
    }
    eles.forEach((val, i) => {
      let finalVal = val
      if (i < regexPairsSize.value && regexPairs[i] && regexPairs[i][0] && regexPairs[i][1]) {
        finalVal = val.replace(new RegExp(regexPairs[i][0], 'g'), regexPairs[i][1])
      }
      temp = temp.replace(new RegExp('(?<!\\\\)((?:\\\\{2})*)\\$\\{' + (i + 1) + '\\}', 'g'), '$1' + finalVal.replace(/\$/g, '$$')) // (?<!\\)(?:\\{2})*\$\{\d+\}
    })
    results.push(temp)
  })
  let prefix = options.value.join.prelb ? '\n' : ''
  let suffix = options.value.join.postlb ? '\n' : ''
  output.value = results.join(prefix + options.value.join.separator + suffix)
    .replace(/(?<!\\)((?:\\{2})*)\\\$/g, '$1$$')
    .replace(/\\\\/g, '\\')
}

export function useBatchgen() {
  return {
    inputData,
    regexPairs,
    regexPairsSize,
    template,
    output
  }
}