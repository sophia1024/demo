// module.exports = {
//   preset: "ts-jest",
//   testMatch: ["<rootDir>/tests/**/*.(spec|test).ts?(x)"],
//   transform: {
//     // 将.js后缀的文件使用babel-jest处理
//     "^.+\\.js$": "babel-jest",
//     "^.+\\.(ts|tsx)$": "ts-jest"
//   },
//   // 下面非要从重要, 将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
//   transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"]
// };
const path = require('path')
module.exports = {
  rootDir: path.resolve(__dirname, '../../'),
  moduleFileExtensions: ['js', 'jsx', 'json', 'vue'], // 告诉jest处理文件格式
  // preset: 'ts-jest',
  transform: { // 用vue-jest处理.vue
    // 将.js后缀的文件使用babel-jest处理
    '^.+\\.vue$': 'vue-jest',
    // '^.+\\.(css|style|less|sass|scss|svg|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    '^.+\\.(js|jsx)$': 'babel-jest'
  },
  //  将不忽略 lodash-es, other-es-lib 这些es库, 从而使babel-jest去处理它们
  //   transformIgnorePatterns: ["<rootDir>/node_modules/(?!(lodash-es|other-es-lib))"]
  transformIgnorePatterns: ['<rootDir>/node_modules/'],
  testPathIgnorePatterns: [
    '<rootDir>/test/e2e'
  ],
  moduleNameMapper: {
    '^@/(.*)$': '<rootDir>/src/$1'
  },
  snapshotSerializers: ['jest-serializer-vue'],
  // testMatch:[
  //   // "**/test/unit/**/*.spec.(js|jsx|ts|tsx)" // 指定根目录下test/unit目录下的以.spec结尾的都单测
  // ],
  testMatch: ['**/*.spec.(js|jsx|ts|tsx)'], // 以.spec结尾的都单测
  testURL: 'http://localhost/',
  // collectCoverage: process.env.COVERAGE === 'true', // 当环境变量是true时，收集测试覆盖率报告
  collectCoverage: false, // 当环境变量是true时，收集测试覆盖率报告
  collectCoverageFrom: ['src/**/*.{js,vue}', '!**/node_modules/**'] // 在src目录下的.js或者.vue文件，但是排除第三方库，作为测试报告分析的基准数据

}
