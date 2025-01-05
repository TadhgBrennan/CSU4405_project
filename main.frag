#version 330 core
out vec4 FragColor;

in vec2 TexCoords;

uniform sampler2D texture1;
uniform vec3 emissiveColor;
uniform float emissiveStrength;

void main()
{
    vec4 baseColor = texture(texture1, TexCoords);

    vec3 emissive = emissiveColor * emissiveStrength;

    vec3 finalColor = baseColor.rgb + emissive;

    FragColor = vec4(finalColor, baseColor.a);
}