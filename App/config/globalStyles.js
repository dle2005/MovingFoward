import { Dimensions } from 'react-native';

export const storyBoardDimensions = {
    height: 740,
    width: 360,
};

export const height = (
    Dimensions.get('screen').height *
    (1 / storyBoardDimensions.height)
).toFixed(2);

export const width = (
    Dimensions.get('screen').width *
    (1 / storyBoardDimensions.width)
).toFixed(2);

export const screenStyle = {
    marginHorizontal: width * 16,
    marginVertical: height * 10
};

export const fonts = {
    NotoSansKR_Black: 'NotoSansKR-Black',
    NotoSansKR_Bold: 'NotoSansKR-Bold',
    NotoSansKR_Light: 'NotoSansKR-Light',
    NotoSansKR_Medium: 'NotoSansKR-Medium',
    NotoSansKR_Regular: 'NotoSansKR-Regular',
    NotoSansKR_Thin: 'NotoSansKR-Thin',
};