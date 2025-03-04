if(NOT TARGET hermes-engine::libhermes)
add_library(hermes-engine::libhermes SHARED IMPORTED)
set_target_properties(hermes-engine::libhermes PROPERTIES
    IMPORTED_LOCATION "/Users/xianglong.liang/.gradle/caches/8.10.2/transforms/3d4f9ba91972868adcc0d8ff442fe2de/transformed/hermes-android-0.78.0-release/prefab/modules/libhermes/libs/android.x86_64/libhermes.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/xianglong.liang/.gradle/caches/8.10.2/transforms/3d4f9ba91972868adcc0d8ff442fe2de/transformed/hermes-android-0.78.0-release/prefab/modules/libhermes/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

