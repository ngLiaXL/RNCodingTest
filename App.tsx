import React, {useEffect, useState} from 'react';
import {View, Button, Image, StyleSheet, Platform, PermissionsAndroid, NativeModules} from 'react-native';
import {launchCamera} from 'react-native-image-picker';
import axios from 'axios';

const KeyManager = NativeModules.ThirdPartyKeyManager;
const BASE_URL = 'http://18.142.55.17:8080/api/v1/upload-photo';

const App = () => {
    const [assets, setAssets] = useState({fileName:'',type:''})
    const [imageUri, setImageUri] = useState(null);
    const [serverResponse, setServerResponse] = useState(null);

    const [apiKey, setApiKey] = useState()
    const [apiKeyHex, setApiKeyHex] = useState()

    useEffect(() => {
        const apiKey = KeyManager.getApiKeySync();
        const hexString = KeyManager.getHexStringSync(apiKey);
        console.log('-------------->', apiKey);
        console.log('-------------->', hexString);
        setApiKey(apiKey)
        setApiKeyHex(hexString)
    }, []);

    // 请求相机权限
    const requestCameraPermission = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.CAMERA,
                    {
                        title: '相机权限请求',
                        message: '需要访问相机以拍照',
                        buttonNeutral: '稍后询问',
                        buttonNegative: '取消',
                        buttonPositive: '确定',
                    }
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                console.error(err);
                return false;
            }
        }
        return true;
    };

    // 拍照处理
    const takePhoto = async () => {
        const hasPermission = await requestCameraPermission();
        if (!hasPermission) {
            alert('需要相机权限才能拍照');
            return;
        }

        const options = {
            mediaType: 'photo',
            quality: 0.8,
            maxWidth: 1024,
            maxHeight: 1024,
            saveToPhotos: true, // 是否保存到系统相册
        };

        launchCamera(options, (response) => {
            if (response.didCancel) {
                console.log('用户取消了拍照');
            } else if (response.error) {
                console.log('相机错误: ', response.error);
            } else {
                const source = {uri: response.assets[0].uri};
                setAssets(response.assets[0])
                setImageUri(source);
            }
        });
    };

    // 上传到服务器
    const uploadImage = async () => {
        if (!imageUri) {
            alert('请先拍照');
            return;
        }

        const formData = new FormData();
        const imagePath = imageUri.uri;
        formData.append('file', {
            uri: imagePath,
            type: assets.type,
            name: assets.fileName,
        });
        console.log('------------>', formData);
        try {
            const response = await axios.post(BASE_URL, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'accept': 'application/json',
                    'author-email': 'xianglong.liang@outlook.com',
                    'x-api-key': apiKey,
                    'x-hex-apikey': apiKeyHex,
                },
            });
            setServerResponse(response.data);
            alert('上传成功！');
        } catch (error) {
            console.error('上传错误:', error);
            alert('上传失败');
        }
    };

    return (
        <View style={styles.container}>
            <Button title="拍照" onPress={takePhoto}/>

            {imageUri && (
                <Image
                    source={imageUri}
                    style={styles.previewImage}
                />
            )}

            <Button
                title="上传到服务器"
                onPress={uploadImage}
                disabled={!imageUri}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    previewImage: {
        width: 300,
        height: 300,
        marginVertical: 20,
        resizeMode: 'contain',
    },
});

export default App;
