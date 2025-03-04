package com.uploaderdemo

import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import com.dashliving.codeassign.CodeAssignmentUtil

class AndroidKeyManagerModule(context: ReactApplicationContext) :
    ReactContextBaseJavaModule(context) {

    override fun getName(): String = "ThirdPartyKeyManager"

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getApiKeySync(): String {
        val dashUtil = CodeAssignmentUtil()
        val apiKey = dashUtil.getApiKey()
        return apiKey
    }

    @ReactMethod(isBlockingSynchronousMethod = true)
    fun getHexStringSync(apiKey: String): String {
        val dashUtil = CodeAssignmentUtil()
        val hexStr = dashUtil.toReverseHexString(apiKey)
        return hexStr
    }

}