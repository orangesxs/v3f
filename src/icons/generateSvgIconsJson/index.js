const fs = require("fs");
const path = require("path");
// 用于生成 icons-symbolId.json 的脚本文件 生成的文件提供给icon选择的下拉框使用
function generateIconsJson(directory) {
  const iconFiles = {};
  
  function traverseDir(dir) {
    const files = fs.readdirSync(dir);

    files.forEach(file => {
      const fullPath = path.join(dir, file);
      const stat = fs.statSync(fullPath);

      if (stat.isDirectory()) {
        traverseDir(fullPath); // 递归处理子文件夹
      } else if (path.extname(file) === ".svg") {
        const iconName = path.basename(file, ".svg");
        const relativePath = path.relative(iconsDir, fullPath);
        const dirName = path.relative(iconsDir, dir);

        // 根据 dirName 是否为空生成 symbolId
        let symbolId = dirName ? `${dirName}-${iconName}` : iconName;
        // symbolId = 'icon-' + symbolId
        iconFiles[symbolId] = `./${relativePath}`;
      }
    });
  }

  const iconsDir = path.resolve(__dirname, directory);
  traverseDir(iconsDir);


  const result = {}
  const symbolIdList = Object.keys(iconFiles);
  result.symbolIdList = symbolIdList;

  const outputPath = path.resolve(__dirname, "icons-symbolId.json");

  // 写入 JSON 文件
  fs.writeFileSync(outputPath, JSON.stringify(result, null, 2));
}

// 调用函数并指定要处理的目录
generateIconsJson("../svg");
