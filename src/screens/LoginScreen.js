import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import auth from '@react-native-firebase/auth';

const LoginScreen = ({ navigation }) => {
  const [phoneEmail, setPhoneEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <ImageBackground
      source={require('../assets/img/image.png')}
      style={styles.container}
    >
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Icon name="chevron-left" size={20} color="black" />
      </TouchableOpacity>

      <View style={styles.innerContainer}>
        <Text style={styles.headerText}>ĐĂNG NHẬP</Text>

        <TextInput
          style={styles.input}
          placeholder="Số điện thoại hoặc email"
          value={phoneEmail}
          onChangeText={(text) => setPhoneEmail(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Mật khẩu"
          secureTextEntry
          value={password}
          onChangeText={(text) => setPassword(text)}
        />

        <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={styles.forgotPasswordText}>QUÊN MẬT KHẨU</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>ĐĂNG NHẬP</Text>
        </TouchableOpacity>

        <View style={styles.separatorContainer}>
          <Text style={styles.separatorText}>HOẶC</Text>
        </View>

        <TouchableOpacity style={styles.googleButton}>
          <Icon name="google" size={20} color="#4285F4" />
          <Text style={styles.googleButtonText}>Đăng nhập bằng Google</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>BẠN CHƯA CÓ TÀI KHOẢN?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('SigninScreen')}>
            <Text style={styles.signupText}>ĐĂNG KÍ</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    padding: 10,
    backgroundColor: '#fff',
    borderRadius: 50,
  },
  innerContainer: {
    padding: 20,
    marginHorizontal: 20,
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#ffffffaa', // Sử dụng nền trong suốt
    elevation: 3, // Hiệu ứng đổ bóng
  },
  headerText: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    alignSelf: 'center',
    marginBottom: 20,
  },
  input: {
    height: 50,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingLeft: 10,
    marginBottom: 15,
    backgroundColor: '#fff',
  },
  forgotPasswordText: {
    color: '#FF6347',
    textAlign: 'right',
    marginBottom: 20,
  },
  loginButton: {
    backgroundColor: '#49A65A',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    elevation: 3, // Hiệu ứng đổ bóng cho nút
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
  separatorContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  separatorText: {
    fontSize: 16,
    color: '#8e8e8e',
  },
  googleButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    marginBottom: 20,
    elevation: 3,
  },
  googleButtonText: {
    marginLeft: 10,
    color: '#4285F4',
    fontWeight: 'bold',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  footerText: {
    color: '#000',
  },
  signupText: {
    color: '#FF6347',
    marginLeft: 5,
    fontWeight: 'bold',
  },
});

export default LoginScreen;
