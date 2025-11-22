import {StyleSheet, Text, View, SectionList, TouchableOpacity, Image, ToastAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Display = () => {
    return (
            <SafeAreaView style={{flex: 1}}>
                <SectionList sections={datasource} renderItem={renderItem} renderSectionHeader={header}/>
            </SafeAreaView>
    )
}

const datasource = [
    {
        data: [
            {
                name: "Clemency's Peal (Hunting Horn)",
                origin: 'Gogmazios',
                img: 'https://cdnb.artstation.com/p/assets/images/images/030/473/815/large/brandon-smith-goghh-ss-close-01.jpg?1600715571'
            },
            {
                name: "Tamonowo (Long Sword)",
                origin: 'Mizutsune',
                img: 'https://media.sketchfab.com/models/c78869a2e3c3458298e3d6ca94fcf3d7/thumbnails/f1d79f336c344ed89e3e220c7dcf401b/35477c9ed10b4725be91e30f5a70c483.jpeg'
            },
        ],
        series: 'Monster Hunter',
        bgcolor: 'lightblue',
        txtcolor: 'black'
    },
    {
        data: [
            {
                name: 'Buster Sword',
                origin: 'Final Fantasy 7',
                img: 'https://media.sketchfab.com/models/4322f87996e740598bd6d08270ac0b09/thumbnails/339f8c6ebeea4c4ea8fe4050d6b85498/54bf56e03bf742029f1c8b65f12c0b9c.jpeg'
            },
            {
                name: 'Engine Sword',
                origin: 'Final Fantasy 15',
                img: 'https://tse3.mm.bing.net/th/id/OIP.lciluYkITcxzqsw-qckRNAHaEk?pid=ImgDet&w=474&h=292&rs=1&o=7&rm=3'
            },
        ],
        series: 'Final Fantasy',
        bgcolor: 'red',
        txtcolor: 'black',
    }
];

const handler = () => {
    ToastAndroid.show('UwU stop touching me...', ToastAndroid.SHORT)
}

const header = ({section: {series, bgcolor, txtcolor}}) => {
    return (
        <View style={[styles.sectionHeader, {backgroundColor: bgcolor}]}>
            <Text style={{color: txtcolor, fontSize: 28, fontWeight: "bold"}}>
                {series}
            </Text>
        </View>
    )
}

const renderItem = ({item}) => {
    return (
        <TouchableOpacity onPress={handler}>
            <View style={styles.card}>
                <Image source={{uri: item.img}} style={styles.image}/>
                <Text style={styles.weaponName}>{item.name}</Text>
                <Text style={styles.weaponOrigin}>{item.origin}</Text>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    sectionHeader: {
        backgroundColor: 'white',
        paddingVertical: 10,
        paddingHorizontal: 10,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
    },
    image: {
        width: '100%',
        height: 250,
        resizeMode: 'cover',
    },
    card: {
        padding: 10,
        margin: 10,
        backgroundColor: 'white',
        borderRadius: 10,
        elevation: 4,
    },
    weaponName: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 4,
    },
    weaponOrigin: {
        marginBottom: 8,
        color: "gray",
    },
})

export default Display