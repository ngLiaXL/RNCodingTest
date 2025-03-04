//
//  ThirdPartyKeyManagerBridge.m
//  UploaderDemo
//
//  Created by xianglong.liang on 2025/3/3.
//

#import <Foundation/Foundation.h>
#import <React/RCTBridgeModule.h>

@interface RCT_EXTERN_MODULE(ThirdPartyKeyManager, NSObject)

// 同步方法导出
RCT_EXTERN_METHOD(getApiKeySync)
                  
RCT_EXTERN_METHOD(getHexStringSync:(NSString)apiKey)


@end
