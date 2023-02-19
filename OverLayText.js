import ReAnimated, {
    useAnimatedStyle, useSharedValue, useDerivedValue,
    withTiming, cancelAnimation, runOnUI, useAnimatedReaction, runOnJS,
    useAnimatedGestureHandler,
    interpolate,
    withDelay,
    withSpring,
    useAnimatedScrollHandler,

    //interpolateColors,

    useAnimatedProps,
    withSequence,
    withDecay,
    useAnimatedRef,
    ZoomIn,
    SlideInRight,
    SlideInDown,
    SlideInUp,
    ZoomInLeft,
    ZoomInEasyUp,
    ZoomOut,
    SlideOutRight,
    SlideOutUp,
    SlideOutDown

} from 'react-native-reanimated';
import multiavatar from '@multiavatar/multiavatar';
import { Overlay } from 'react-native-elements/dist/overlay/Overlay';
import { SharedElement } from 'react-navigation-shared-element';
import SvgUri from 'react-native-svg-uri';
import React, { useState, useRef, useEffect, useContext, useMemo } from 'react';
import { Context } from "./ContextProvider"
import { createContext, useContextSelector } from 'use-context-selector';
import { useNavigation, useRoute } from '@react-navigation/native';
import {
    GiftedChat, Bubble, InputToolbar, Avatar as AvatarIcon, Message, Time, MessageContainer, MessageText, SystemMessage, Day, Send, Composer, MessageImage,
    Actions,
} from 'react-native-gifted-chat'
import url, { hexToRgbA, hexify, moveArr, uniqByKeepFirst, ScaleView, ScaleAcitveView, createFolder, deleteFolder } from "./config";
import { useHeaderHeight } from '@react-navigation/elements';
import { PanGestureHandler, ScrollView, FlatList, NativeViewGestureHandler } from 'react-native-gesture-handler';
import { Video, AVPlaybackStatus, Audio, ExponentAV } from 'expo-av';

import { getStatusBarHeight } from 'react-native-status-bar-height';
const { width, height } = Dimensions.get('screen');
const WINDOW_HEIGHT = Dimensions.get('window').height;
const STATUS_HEIGHT = getStatusBarHeight();
const BOTTOM_HEIGHT = Math.max(0, height - WINDOW_HEIGHT - STATUS_HEIGHT);

import {
    StyleSheet, Dimensions, TouchableOpacity, TouchableNativeFeedback, Pressable, TouchableHighlight, TouchableWithoutFeedback, Vibration, Button,
    findNodeHandle, UIManager, Keyboard, Platform
} from 'react-native';

//import { OverlayDownloader } from './OverlayDownloader';
import { ListItem, Avatar, LinearProgress, Tooltip, Icon, Input } from 'react-native-elements';
import Image from 'react-native-scalable-image';
import * as FileSystem from 'expo-file-system';
import * as ImagePicker from 'expo-image-picker';
import * as MediaLibrary from 'expo-media-library';
const { View, Text, ScrollView: ScrollV, Extrapolate, createAnimatedComponent } = ReAnimated

const AnimatedComponent = createAnimatedComponent(View)



export default function OverLayText({ ...props }) {

    // const [left,setLeft] = useState(0)
    // const [top,setTop] = useState(0)

    const isOverLayTextVisible = useContextSelector(Context, (state) => (state.isOverLayTextVisible));
    const setOverLayTextVisible = useContextSelector(Context, (state) => (state.setOverLayTextVisible));

    const left = useContextSelector(Context, (state) => (state.overLayTextLeft));
    const top = useContextSelector(Context, (state) => (state.overLayTextTop));

    const fn1 = useContextSelector(Context, (state) => (state.overLayTextFn1));
    const fn2 = useContextSelector(Context, (state) => (state.overLayTextFn2));



    return (
        <Overlay isVisible={isOverLayTextVisible} fullScreen={false}
            onBackdropPress={function () {
                setOverLayTextVisible(false)
            }}
            backdropStyle={{ backgroundColor: "transparent" }}
            overlayStyle={{
                //  backgroundColor: "rgba(50,50,50,0)",
                backgroundColor: "transparent",
                position: "absolute",
                left,
                top,
                elevation: 0,
            }}
        >

            <AnimatedComponent entering={ZoomIn.duration(200)} style={{
                display: "flex", flexDirection: "row", backgroundColor: "rgba(50,50,50,0.8)",
                borderRadius: 8
            }}>

                <Icon name="copy-outline" type='ionicon' color='white' size={50} style={{ padding: 4 }} onPress={fn1} />
                <Icon name="trash-outline" type='ionicon' color='white' style={{ padding: 4 }} size={50} onPress={fn2} />

            </AnimatedComponent>
        </Overlay>

    )
}