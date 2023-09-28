import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import TodoScreen from './src/screen/TodoScreen';
export default function App() {
  return (
    <SafeAreaView>
      <View >
        <TodoScreen />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  
});
