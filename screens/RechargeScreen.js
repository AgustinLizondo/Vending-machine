import React from 'react';
import { StyleSheet, View } from 'react-native';
import RechargeSelection from '../components/RechargeSelection';
import PaymentSection from '../components/PaymentSection';

const RechargeScreen = ({onTap}) => {
    return (
        <View style={{ flex: 1, width: '100%' }}>
            <RechargeSelection onTap={onTap} />
            <PaymentSection />
        </View>
    )
}

export default RechargeScreen

const styles = StyleSheet.create({})
