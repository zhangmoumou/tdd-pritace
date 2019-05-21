const cmdLine = '-l -p 8080 -d /usr/logs'
const reg = /^-[a-zA-Z]$/

function parser(cmd){
  if (cmd.length < 1) {
    console.log('输入不能为空');
    return false
  }
  let arr = cmd.split(' ')
  for (var i = 0; i < arr.length; i++) {
    if (reg.test(arr[i])) {
      dealData(arr, i)
    }
  }
}

function validateNumber(param) {
  let reg = /^(\-|\+)?\d+(\.\d+)?$/
  if (reg.test(param)) {
    return true
  }
  return false
}

function dealData(arr, i) {
  let cmd = arr[i].split('-')[1]
  if (reg.test(arr[i+1]) && !validateNumber(arr[i])) {
    output(cmd)
  } else {
    let type = typeof(arr[i+1])
    console.log(cmd, arr[i+1], type);
  }
}

function output(cmd) {
  switch (cmd) {
    case 'l':
      console.log(cmd, false);
      break;
    case 'd':
      console.log(cmd, '');
      break;
    case 'p':
      console.log(cmd, 0);
      break;
  }
}

export default parser
