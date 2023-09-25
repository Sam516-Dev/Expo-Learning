import { StyleSheet, Image } from 'react-native';


export default function ImageViewer({ arsenal_pic }) {
  return (
    <Image source={arsenal_pic} style={styles.image} />
  );
}

const styles = StyleSheet.create({
      image: {
      width: 320,
      height: 440,
      borderRadius: 9,
    },
  });
  