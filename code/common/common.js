/** 判断数据类型 */
function getTypeString(value){
    // [object Null/Undefined/Boolean/String/Number/...]
    return Object.prototype.toString.call(value);
}

// todo 按位非~
/** 取反 */
function getAbstract(value){
    let _valueToNumber=+value;
    return !isNaN(_valueToNumber)?~_valueToNumber+1:value;
}

/** indexOfToBoolean */
function indexOfToBoolean(value,targetObject){
    try{
        return !!~targetObject.indexOf(value);
    }catch(e){
        return e
    }
}

/** 奇数判断——奇数&1=1 */
function isOdd(value){
    let _valueToNumber=+value;
    return isNaN(_valueToNumber)?false:!!(_valueToNumber&1);
}

/** 偶数判断——偶数&1=0 */
function isEven(value){
    let _valueToNumber=+value;
    return isNaN(_valueToNumber)?false:!(_valueToNumber&1);
}

/** 位运算符取整——将小数部分去掉【~~ |0 >>0 <<0】
 * 原理：位运算符只用于整数，只要用位运算符且不改变值都可取整
 */
function integer(value){
    let _valueToNumber=+value;
    return isNaN(_valueToNumber)?value:(~~_valueToNumber||(_valueToNumber|0)||(_valueToNumber>>0)||(_valueToNumber<<0));
}

/**
 * 16进制颜色值转RGB
 * @param  {String} hex 16进制颜色字符串
 * @return {String}     RGB颜色字符串
 * hexToRGB('#ffffff')
 */
  function hexToRGB(hex) {
    var hexx = hex.replace('#', '0x')
    var r = hexx >> 16
    var g = hexx >> 8 & 0xff
    var b = hexx & 0xff
    return `rgb(${r}, ${g}, ${b})`
}

/**
 * RGB颜色转16进制颜色
 * @param  {String} rgb RGB进制颜色字符串
 * @return {String}     16进制颜色字符串
 * RGBToHex('rgb(255,255,255)') 
 */
function RGBToHex(rgb) {
    var rgbArr = rgb.split(/[^\d]+/)
    var color = rgbArr[1]<<16 | rgbArr[2]<<8 | rgbArr[3]
    return '#'+ color.toString(16)
}
