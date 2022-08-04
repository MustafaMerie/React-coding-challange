import Layout from '../components/Layout'
import renderer from 'react-test-renderer'

it('Layout renders correctly', () => {
  const tree = renderer.create(<Layout />).toJSON()
  expect(tree).toMatchSnapshot()
})