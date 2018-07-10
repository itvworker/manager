class Schema {
  constructor(obj) {
    let key=Object.keys(obj);
    var rule = {};
    for (let i of key) {

      if (this.type(obj[i]['rule'])==='array') {
        rule[i] = this.arrRule(obj[i]);
      }
    }
    return rule;
  }
  arrRule(obj) {
    let arr=[];
    let self=this;
    for (let i=0, l=obj['rule'].length; i<l; i++) {
      let message=obj['message'][i];
      arr.push({
        validator: this[obj['rule'][i]].bind(this),
        trigger: obj['trigger'],
        message: message
      })
    }
    return arr;
  }
  type(str) {
    return Object.prototype.toString.call(str).slice(8, -1).toLowerCase();
  }
  tirm(arg) {
    return arg.replace(/^(\s*)|(\s*)$/, '');
  }
  require(rule, value, callback) {
    if (this.tirm(value)) {
      callback();
    } else {
      callback(new Error('手机号码是必须'));
    }
  }
  phone(rule, value, callback) {
    let result = value.match(/^1[34578]\d{9}$/);
    if (result === null) callback(new Error(rule.message))
    callback();
  }
  email(rule, value, callback) {
    var result = value.match(/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/);
    if (result === null) callback(new Error(rule.message))
    callback();
  }
}
export default Schema;
