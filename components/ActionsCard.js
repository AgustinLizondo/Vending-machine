import React from 'react'
import { StyleSheet, Text, View, ScrollView } from 'react-native'
import colorPalette from '../assets/Colors'
import BasicButton from './BasicButton'
import Tag from './Tag'
import { LinearGradient } from 'expo-linear-gradient'

const ActionsCard = () => {
    let latestOrders = ['E41', 'F24', 'G56', 'A12', 'B84', 'C23', 'J89', 'D23',]
    return (
        <View style={styles.card} >
            <Text style={styles.recent}>RECENT</Text>
            <ScrollView horizontal style={styles.latestOrders} showsHorizontalScrollIndicator={false}>
                {latestOrders.map((el, index) => (<Tag key={index} value={el} selected={index === 1 ? true : false} />))}
            </ScrollView>
            <View style={{ alignSelf: 'center', position: 'absolute', bottom: 15 }}>
                <BasicButton content={'Buy'} />
            </View>
        </View>
    )
}

export default ActionsCard

const styles = StyleSheet.create({
    card: {
        width: '100%',
        height: 189,
    },
    recent: {
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '700',
        // fontFamily: 'Circular Std',
        position: 'absolute',
        top: 25,
        left: 15,
        color: colorPalette.Gray,
    },
    latestOrders: {
        flexDirection: 'row',
        top: 53
    },
})
