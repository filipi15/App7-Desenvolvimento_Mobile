import { View, Text } from 'react-native';
import { styles } from './styles';
import Component1 from './src/ScrollView/index';

function App(){
  return(
     <View>
        <Text style={[styles.textos, styles.textoPrincipal]}>Anúncios</Text>
      
        <Component1 />
      </View>
  )
}

export default App;