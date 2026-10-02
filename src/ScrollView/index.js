import { View, ScrollView, Text, Image } from 'react-native';
import { styles } from '../../styles.js';


function ComponenteScroll(){
  return(
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={styles.box}>
          <Text style={styles.textos}>Zara Larsson - Poster Girl (Vinil)</Text>
          <Image style={styles.alinhaImagem}
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFbSeB1-bHyQHc8OjY04573NXgKhzjh4szzCILDzV6bA&s=10'}} />
          <Text style={styles.textos}>Preço: 200</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textos}>Ariana Grande - Petal (Vinil)</Text>
          <Image style={styles.alinhaImagem}
          source={{ uri: 'https://acdn-us.mitiendanube.com/stores/003/152/347/products/texto-do-seu-paragrafo-2026-06-18t110703-411-64625fd77d509190da17817953833886-480-0.webp'}} />
          <Text style={styles.textos}>Preço: 400</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textos}>Lady Gaga - MAYHEM (Vinil)</Text>
          <Image style={styles.alinhaImagem}
          source={{ uri: 'https://acdn-us.mitiendanube.com/stores/003/152/347/products/lady-gaga-mayhem-walmart-exclusive-opaque-blue-vinyl-alt-cover-poster_9850bbc3-c0f9-4c96-a580-948afc5da714-47149e650ad6de7a29186e735c7fc082-jpeg-aecb5a2af0c09909c117381668436611-640-0.webp'}} />
          <Text style={styles.textos}>Preço: 300</Text>
        </View>

        <View style={styles.box}>
          <Text style={styles.textos}>Dua Lipa - Radical Optimism (Vinil)</Text>
          <Image style={styles.alinhaImagem}
          source={{ uri: 'https://imusic.b-cdn.net/images/item/original/386/5054197943386.jpg?dua-lipa-2024-radical-optimism-lp&class=scaled&v=1710405185'}} />
          <Text style={styles.textos}>Preço: 150</Text>
        </View>
      </ScrollView>
  )
}


export default ComponenteScroll;
