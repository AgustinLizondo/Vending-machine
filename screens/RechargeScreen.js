import React from 'react';
import { StyleSheet, View } from 'react-native';
import RechargeSelection from '../components/RechargeSelection';
import PaymentSection from '../components/PaymentSection';

const RechargeScreen = () => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <RechargeSelection />
            <PaymentSection />
        </View>
    )
}

export default RechargeScreen

const styles = StyleSheet.create({})
