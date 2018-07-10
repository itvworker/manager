class Schema {
  constructor(obj, page) {
    this.obj = obj;
  }
  tirm(arg) {
    return arg.replace(/^(\s*)|(\s*)$/, '');
  }
  require(arg) {
    if (arg) {
      return arg
    } else {
      return false;
    }
  }
  phone(arg) {
    let result = arg.match(/^1[34578]\d{9}$/);
    if (result) {
      return true
    } else {
      return false;
    }
  }
  email(str) {
    var result = str.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result === null) return false;
    return true;
  }
}
export default Schema;
