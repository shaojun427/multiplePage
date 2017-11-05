const path = require('path');
const glob = require('glob');//多入口文件 分别对应文件打包

module.exports = () => {
    const jsDir = path.resolve(__dirname, 'src/pages'),
          entryFiles = glob.sync(jsDir + '/*/index.{js,jsx}');
    let map = {
      'zh-CN': './src/i18n/zh-CN.js',
      'en': './src/i18n/en.js'
    };
    entryFiles.forEach((it,i)=>{
        const fileFolderArr = it.split('/'),
            fileFolder = fileFolderArr[fileFolderArr.length-2];
        const filename = it.substring(it.lastIndexOf('\/')+1, it.lastIndexOf('.'));
        map[`${fileFolder}/${filename}`] = it;
    })
    return map;
}
