class Schema {
  constructor(obj) {
    this.obj=obj;
    console.log(obj);
  }
  validataAll() {
    console.log(this.obj, '---------');
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
}
export default Schema;
