//
//  ThirdPartyKeyManager.swift
//  UploaderDemo
//
//  Created by xianglong.liang on 2025/3/3.
//

import Foundation
import code_assign_util

@objc(ThirdPartyKeyManager)
class ThirdPartyKeyManager: NSObject {

  @objc static func requiresMainQueueSetup() -> Bool {
    return false
  }

  @objc func getApiKeySync() -> String {
    var util = CodeAssignmentUtil()
    var apiKey = util.getApiKey()
    print(apiKey)
    return apiKey
  }
  @objc func getHexStringSync(_ apiKey: String) -> String {
    var util = CodeAssignmentUtil()
    var hexStr = util.toReverseHexString(str: apiKey)
    print(hexStr)
    return hexStr
  }

}
