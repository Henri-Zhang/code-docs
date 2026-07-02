import fs from 'fs';
import configStr from './config.template.js';

const dirs = ['简单', '中等', '困难'];
const sidebar = [
  {
    text: "关于",
    collapsible: false,
    link: '/README.md',
  }
];

const genCategory = (dir, files) => {
  const result = {
    text: dir,
    collapsible: true,
  };

  // file按题号排序，若有题号非数字放最后按字母顺序排
  const sorter = (a, b) => {
    const orderA = a.substr(0, a.indexOf('.'));
    const orderB = b.substr(0, b.indexOf('.'));

    return orderA - orderB || (orderA > orderB) - 0.5;
  };

  result.children = files.sort(sorter).map(file => ({
      text: file.replace('.md', ''), 
      link: `/${dir}/${file.replace('.md', '')}`
    }
  ));

  return result;
};

dirs.forEach(dir => {
  const files = fs.readdirSync(`./docs/${dir}`);
  sidebar.push(genCategory(dir, files));
});

fs.writeFileSync(
  './docs/.vuepress/config.js',
  configStr.replace('{{SIDEBAR}}', JSON.stringify(sidebar, null , 2))
);
