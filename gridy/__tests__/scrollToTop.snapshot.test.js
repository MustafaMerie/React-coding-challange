import ScrollToTop from '../components/ScrollToTop'
import renderer from 'react-test-renderer'

it('Header renders correctly', () => {
  const tree = renderer.create(<ScrollToTop />).toJSON()
  expect(tree).toMatchSnapshot()
})