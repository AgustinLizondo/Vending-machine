import React, { useState } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import colorPalette from '../assets/Colors';

const Header = ({ profileImage, name }) => {

    const [notifications, setNotifications] = useState(1)
    //Implementar useContext con las notificaciones para el badge

    return (
        <View style={styles.card}>
            <TouchableOpacity style={styles.profileImage}>
                <Image
                    source={profileImage}
                    style={{ width: 38, height: 38 }}
                />
            </TouchableOpacity>
            <View style={styles.subCard}>
                <Text style={styles.welcome}>WELCOME</Text>
                <Text style={styles.profileName}>{name}</Text>
            </View>
            {(notifications != 0)
                ? (
                    <View style={styles.badge}>
                        <Image
                            source={require('../assets/badge.png')}
                            style={{ width: 16, height: 16 }}
                        />
                    </View>
                )
                : null
            }
            <View style={styles.iconsCard}>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/more-horizontal.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image
                        source={require('../assets/active.png')}
                        style={{ width: 24, height: 24 }}
                    />
                </TouchableOpacity>
            </View>
        </View>
    )
}


const styles = StyleSheet.create({
    card: {
        width: 375,
        height: 70,
        backgroundColor: colorPalette.White
    },
    profileImage: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        width: 46,
        height: 46,
        top: 12,
        left: 15,
        borderWidth: 2,
        borderColor: colorPalette.Pink,
        borderRadius: 100,
    },
    welcome: {
        position: 'absolute',
        top: 12,
        left: 76,
        // fontFamily: 'Circular Std',
        fontSize: 13,
        lineHeight: 18,
        fontWeight: '700',
        color: colorPalette.Gray,
    },
    profileName: {
        // fontFamily: 'Circular Std',
        fontSize: 22,
        lineHeight: 28,
        fontWeight: '400',
        color: colorPalette.Blue,
        position: 'absolute',
        left: 76,
        top: 30,
    },
    iconsCard: {
        width: 64,
        height: 30,
        position: 'absolute',
        top: 17,
        right: 20,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
    },
    badge: {
        position: 'absolute',
        bottom: 37,
        right: 20,
        zIndex: 1500,
    }
})

export default Header