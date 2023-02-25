export function fmDate(time: string) {//时间戳转日期
    let date = new Date(time);
    let y = date.getFullYear();
    let MM = (date.getMonth() + 1).toString();
    MM = parseInt(MM) < 10 ? ('0' + MM) : MM;
    let d = date.getDate().toString();
    d = parseInt(d) < 10 ? ('0' + d) : d;
    let h = date.getHours().toString();
    h = parseInt(h) < 10 ? ('0' + h) : h;
    let m = date.getMinutes().toString();
    m = parseInt(m) < 10 ? ('0' + m) : m;
    let s = date.getSeconds().toString();
    s = parseInt(s) < 10 ? ('0' + s) : s;
    return y + '-' + MM + '-' + d + ' ' + h + ':' + m + ':' + s;
}

