import { StatusBar } from 'expo-status-bar';

import './global.css';
import { Photography } from './screens';

export default function App() {
  return (
    <>
      <StatusBar style="light"/>
      <Photography />
    </>
  );
}
