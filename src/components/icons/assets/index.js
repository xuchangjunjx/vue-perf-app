const requireAll = (r) => r.keys().map(el=>{
  console.log(el)
  return r(el)
});
// 加载目录下的所有的 svg 文件
requireAll(require.context("./", true, /\.svg$/));