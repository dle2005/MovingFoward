// import React, { useState, useRef } from 'react';
// import { StyleSheet, Text, TextInput, View } from 'react-native';
// import { colors, height, width } from '~/config/globalStyles';
// import AppText from './appText';

// const AppTextInputBirth = ({
//   style,
//   title,
//   warnningText,
//   placeholder,
//   onChangeBirthdate,
//   birthdate,
//   gender,
//   onChangeGender,
// }) => {
//   const ref = useRef();

//   return (
//     <View style={{ ...styles.container, ...style }}>
//       <View style={styles.textContainer}>
//         <AppText size={13}>{title}</AppText>
//         <AppText
//           size={11}
//           style={{
//             color: warnningText ? colors.red : colors.mediumGrey,
//             letterSpacing: 0,
//             marginLeft: 5,
//           }}
//         >
//           {warnningText ? warnningText : '* 핸드폰 번호 변경시 필요합니다.'}
//         </AppText>
//       </View>
//       <View style={styles.inputContainer}>
//         <TextInput
//           style={styles.textInput}
//           placeholderTextColor="#A3A3A3"
//           placeholder={placeholder}
//           keyboardType="numeric"
//           maxLength={6}
//           onChangeText={(value) => {
//             onChangeBirthdate(value);
//             value.length === 6 && ref.current.focus();
//           }}
//           value={birthdate}
//         />
//         <AppText size={20}> - </AppText>
//         <TextInput //수정 필요
//           ref={ref}
//           style={styles.textInput2}
//           placeholderTextColor="#A3A3A3"
//           placeholder="●"
//           keyboardType="numeric"
//           maxLength={1}
//           onChangeText={(value) => onChangeGender(value)}
//           value={gender}
//         />
//         <AppText size={12} style={{ marginLeft: gender ? 2.5 : 0 }}>
//           {' '}
//           ● ● ● ● ● ●{' '}
//         </AppText>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     width: '100%',
//   },
//   textContainer: {
//     flexDirection: 'row',
//     marginBottom: height * 8,
//   },
//   inputContainer: {
//     width: width * 343,
//     flexDirection: 'row',
//     alignItems: 'center',
//     borderRadius: 5,
//     borderWidth: 1,
//     borderColor: '#A3A3A3',
//   },
//   textInput: {
//     width: '50%',
//     height: height * 48,
//     paddingLeft: width * 16,
//   },
//   textInput2: {
//     height: height * 48,
//     paddingLeft: width * 16,
//   },
// });

// export default AppTextInputBirth;
