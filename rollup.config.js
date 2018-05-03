import uglify from 'rollup-plugin-uglify';
export default [{
    input: './src/index.js',
    output: {
      file: 'loader-message.min.js',
      format: 'umd',
      name: "loaderMessage"
    },
    plugins: [
        uglify()
    ]
  },
  {
    input: './src/index.js',
    output: {
      file: 'loader-message.js',
      format: 'umd',
      name: "loaderMessage"
    }
  }];
  
  //rollup index.js --o loader-message.js -f umd --name 'loaderMessage