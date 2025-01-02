cmake_minimum_required(VERSION 3.0)
project(project)

find_package(OpenGL REQUIRED)
set(CMAKE_LIBRARY_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}")
set(CMAKE_RUNTIME_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}")
set(CMAKE_ARCHIVE_OUTPUT_DIRECTORY "${CMAKE_BINARY_DIR}")


add_subdirectory(external)

include_directories(
        external/glfw-3.1.2/include/
        external/glm-0.9.7.1/
        external/glad-opengl-3.3/include/
        external/glew-2.1.0/include/
        external/assimp-master/include/
        external/
        render/
)

add_executable(project
        main.cpp
        render/camera/camera.h
        render/shader.cpp
        render/shader_s.h
        render/model.h
        render/shader_m.h
        render/mesh.h
)

target_link_libraries(project
        ${OPENGL_LIBRARY}
        glfw
        glad
)
