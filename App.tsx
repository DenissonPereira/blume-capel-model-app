import 'react-native-gesture-handler';
import Routes from './src/routes';
import {SpinProvider} from './src/contexts'

export default function App() {
  return (
    <SpinProvider>
      <Routes />
    </SpinProvider>
  );
}
