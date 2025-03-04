if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/xianglong.liang/.gradle/caches/8.10.2/transforms/a30a5df19c53c41e640292247d8717ed/transformed/hermes-android-0.78.0-debug/prefab/modules/libhermes/libs/android.arm64-v8a/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/xianglong.liang/.gradle/caches/8.10.2/transforms/a30a5df19c53c41e640292247d8717ed/transformed/hermes-android-0.78.0-debug/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

