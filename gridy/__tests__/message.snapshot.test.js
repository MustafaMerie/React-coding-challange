import Message from '../components/Message'
import renderer from 'react-test-renderer'

it('Message renders correctly', () => {
  const tree = renderer.create(<Message />).toJSON()
  expect(tree).toMatchSnapshot()
})