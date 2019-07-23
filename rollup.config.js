import { uglify } from 'rollup-plugin-uglify'
import babel from 'rollup-plugin-babel' 

const config = {
  input: 'src/components/index.js',
  external: ['react', 'prop-types', 'styled-components'],
  output: {
    format: 'umd',
    name: 'txstate-react',
    globals: {
      react: 'React',
      'prop-types': 'PropTypes',
      'styled-components': 'styled'
    }
  },
  plugins: [
    babel({
      exclude: ["node_modules/**", "src/stories/**"]
    }),
    uglify()
  ]
}

export default config
