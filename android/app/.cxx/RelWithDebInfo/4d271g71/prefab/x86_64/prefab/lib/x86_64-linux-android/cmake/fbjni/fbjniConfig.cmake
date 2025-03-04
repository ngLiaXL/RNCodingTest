if(NOT TARGET fbjni::fbjni)
add_library(fbjni::fbjni SHARED IMPORTED)
set_target_properties(fbjni::fbjni PROPERTIES
    IMPORTED_LOCATION "/Users/xianglong.liang/.gradle/caches/8.10.2/transforms/4f128a316068668a73ba76277233ca9a/transformed/fbjni-0.7.0/prefab/modules/fbjni/libs/android.x86_64/libfbjni.so"
    INTERFACE_INCLUDE_DIRECTORIES "/Users/xianglong.liang/.gradle/caches/8.10.2/transforms/4f128a316068668a73ba76277233ca9a/transformed/fbjni-0.7.0/prefab/modules/fbjni/include"
    INTERFACE_LINK_LIBRARIES ""
)
endif()

